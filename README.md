# Revyze

**Quick quizzes on React, JavaScript, SQL, and more — made for people who want concepts to actually stick, not just get skimmed once and forgotten.**

Revyze is a self-testing/spaced-revision app for developers: short, focused quizzes across common web-dev topics, with progress and history that follow you across devices. It works fully offline and requires no account — signing in is optional and only unlocks cross-device sync.

> 🔗 **Live demo:** [add your deployed URL here]

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Architecture](#architecture)
  - [Local-first storage + cloud sync](#local-first-storage--cloud-sync)
  - [Seeded, reproducible question shuffling](#seeded-reproducible-question-shuffling)
  - [Theming](#theming)
  - [PWA](#pwa)
- [Project structure](#project-structure)
- [Data model](#data-model)
- [Getting started](#getting-started)
- [Design decisions worth knowing](#design-decisions-worth-knowing)
- [Known limitations / roadmap](#known-limitations--roadmap)
- [License](#license)

---

## Features

**Browsing & discovery**
- 8 categories (React, JavaScript, HTML, CSS, Git & GitHub, TypeScript, Node.js, SQL) covering 65+ quizzes and ~2,900 questions
- Search and filter quizzes by difficulty within a category
- At-a-glance progress indicators on every quiz card (not started / in progress / completed, with best score)

**Taking a quiz**
- One question at a time, with a progress bar and question counter
- Answers and current position auto-save after every action — close the tab mid-quiz and pick up exactly where you left off
- Resume-or-restart prompt when you return to an in-progress quiz
- Instant quiz-info modal (question count, estimated time, passing score) before you commit

**Results & review**
- Score breakdown: correct / wrong / skipped, plus accuracy % and completion %
- Tiered feedback message based on performance
- Full answer review, question by question, with the exact shuffled option order you saw during the attempt

**History & profile**
- Every completed attempt is saved and browsable later, with its own results + review pages
- Profile page aggregates lifetime stats: total attempts, best/average accuracy, unique quizzes practiced

**Accounts (optional)**
- Email/password auth via Supabase
- Fully usable as a guest with local-only storage — signing in adds cross-device sync on top, it's never required
- Once signed in, local history and in-progress quizzes sync to the cloud and merge with anything already there

**Everything else**
- Light/dark theme toggle, persisted, independent of OS preference
- Installable PWA with offline support and an in-app update prompt
- Toast notifications for background events (sync warnings, save failures, confirmations)

---

## Tech stack

| Layer | Choice |
|---|---|
| UI | React (Vite) |
| Routing | React Router |
| Styling | Tailwind CSS v4 (CSS-variable-driven theming, not the default media-query dark mode) |
| Icons | lucide-react |
| Local storage | Dexie.js (IndexedDB wrapper) |
| Auth + cloud sync | Supabase (Postgres + Auth) |
| Offline / installability | vite-plugin-pwa |

No global state library (Redux/Zustand/etc.) — app state is handled with React Context for the two genuinely cross-cutting concerns (`AuthContext`, `ToastContext`) and local component state everywhere else, backed by IndexedDB/Supabase as the actual source of truth.

---

## Architecture

### Local-first storage + cloud sync

Every quiz attempt and every in-progress quiz is written to **IndexedDB first** (via Dexie), regardless of whether the person is signed in. This means the app is fully functional offline and for guests — nothing about taking a quiz depends on a network request succeeding.

If the person **is** signed in, the same write is also mirrored to Supabase in the background. If that cloud write fails (offline, server error, etc.), the local save has already succeeded, so nothing is lost — the user just gets a toast warning that cloud sync failed, and:

- `useSync` retries a full sync automatically the next time the browser's `online` event fires.
- `AuthContext` runs a full sync on genuine sign-in events (not on token refreshes — see below).

**Conflict resolution** (`services/syncService.js`) compares local and cloud records by `updatedAt`/`completedAt` timestamps in both directions:
- Local records missing from the cloud get uploaded.
- Cloud records missing locally get imported.
- Whichever side is newer wins when both exist.
- Once a quiz is *completed*, any leftover "in-progress" record for it (local or cloud) is treated as stale and cleaned up — so finishing a quiz on your phone doesn't leave a half-finished version of it lingering on your laptop.

This was deliberately built as a real sync system rather than a "last write wins, hope for the best" approach — the edge cases (finishing on one device while another still has stale progress, going offline mid-quiz, signing in with existing local history for the first time) are handled explicitly.

### Seeded, reproducible question shuffling

Options within a question are shuffled per attempt so the correct answer isn't always in the same position — but that shuffle needs to be **reproducible** later, so the review screen can show the exact same option order and letters (A/B/C/D) the person actually saw.

Instead of storing the shuffled question set itself, each attempt stores a small random **seed** (`crypto.randomUUID()`, generated once when the quiz starts). `services/questionService.js` uses that seed to drive a small deterministic PRNG (`hashSeed` → `createSeededRandom`) which reshuffles the *same* base question data identically every time it's given the same seed — whether that's during the live attempt or weeks later on the review page. This keeps storage minimal (one string per attempt) while still supporting full, faithful review.

### Theming

Light/dark mode is driven by CSS custom properties (`globals.css`) rather than Tailwind's default `dark:`-follows-OS behavior. A `.dark` class is toggled on `<html>` (`Header.jsx`), the user's choice is persisted to `localStorage`, and a `@custom-variant dark (&:where(.dark, .dark *));` declaration tells Tailwind's `dark:` utilities to key off that class instead of `prefers-color-scheme` — so the in-app toggle is the single source of truth for every themed element, including ones using plain `dark:` utility classes.

### PWA

`vite-plugin-pwa` registers a service worker for offline support and installability. Rather than silently forcing a reload when a new version ships, `UpdatePrompt.jsx` surfaces an explicit "a new version is available" banner and lets the user choose when to refresh.

---

## Project structure

```
src/
├── App.jsx                  # Routes + dynamic <title> per page
├── main.jsx
├── globals.css              # Theme tokens, fonts, dark-mode variant
│
├── components/
│   ├── common/               # Header, HeroSection, CategoryCard,
│   │                         # LoadingState, ErrorState, ConfirmModal,
│   │                         # UpdatePrompt
│   ├── quiz/                 # QuizHeader, QuestionCard, OptionButton,
│   │                         # QuizFooter, FinishQuizModal,
│   │                         # ResumeQuizModal, QuizInfoModal,
│   │                         # ReviewQuestionCard
│   └── ui/                   # Container (layout primitive)
│
├── pages/                    # One component per route (see App.jsx)
│
├── context/
│   ├── AuthContext.jsx        # Supabase session state + sync trigger
│   └── ToastContext.jsx       # App-wide toast notifications
│
├── hooks/
│   └── useSync.js             # Re-syncs on regained connectivity
│
├── services/
│   ├── authService.js          # Supabase auth wrappers
│   ├── quizService.js          # Category/quiz lookups, scoring, feedback
│   ├── questionService.js      # Question loading + seeded shuffling
│   ├── storageService.js       # Local IndexedDB (Dexie) reads/writes
│   ├── cloudService.js         # Supabase reads/writes
│   └── syncService.js          # Local ⇄ cloud reconciliation
│
├── data/
│   ├── categories.js
│   ├── quizzes.js              # Manifest: one entry per quiz
│   └── questions/              # One file per quiz's question bank
│
├── db/
│   └── db.js                   # Dexie schema (quizAttempts, quizProgress)
│
├── lib/
│   └── supabase.js             # Supabase client init
│
└── assets/
    └── category_icons/         # SVGs referenced by data/categories.js
```

---

## Data model

Each quiz is a plain object in `data/quizzes.js`:

```js
{
  id: "quiz_react_hooks_basics",
  slug: "react-hooks-basics",
  categoryId: "cat_react",
  title: "React Hooks Basics",
  description: "...",
  difficulty: "Beginner",       // Beginner | Intermediate | Advanced
  totalQuestions: 20,
  estimatedTime: 10,             // minutes
  passingScore: 70,              // % accuracy required to "pass"
  questionSource: "react/hooks-basics", // -> data/questions/react/hooks-basics.js
  isPublished: true,
}
```

Question banks are loaded lazily per quiz via `import.meta.glob`, keyed off `questionSource` — so the whole question catalog isn't bundled into the initial page load, only the quiz someone actually opens.

A quiz **attempt**, once finished, is stored as:

```js
{
  id: "<uuid>",
  quizId: "quiz_react_hooks_basics",
  answers: { "<questionId>": "<optionId>", ... },
  results: { totalQuestions, attempted, correct, wrong, skipped, accuracy, completion },
  startedAt: 1719999999999,
  completedAt: 1720000999999,
  shuffleSeed: "<uuid>",
}
```

---

## Getting started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) project (for auth + cloud sync — the app still runs fully as a guest without one, but sign-in features will error without valid credentials)

### Environment variables

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
```

> Use Supabase's **publishable/anon** key here, never the `service_role` secret key — this key is bundled into the client and is meant to be public. Row Level Security policies on your `quiz_attempts` and `quiz_progress` tables (enforcing `auth.uid() = user_id`) are what actually keep users' data private, not the key itself.

### Install & run

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build
npm run preview   # preview the production build locally
```

(Adjust script names above to match whatever's in your `package.json` if they differ.)

### Supabase setup

You'll need two tables — `quiz_attempts` and `quiz_progress` — with RLS enabled and a policy restricting all operations to `auth.uid() = user_id`. See `services/cloudService.js` for the exact columns each table needs to support (`id`, `user_id`, `quiz_id`, `answers`, `results`, `started_at`, `completed_at` for attempts; similar plus `current_question_index` and `shuffle_seed` for progress).

---

## Design decisions worth knowing

A few choices that are worth calling out explicitly (e.g. in an interview) rather than leaving implicit:

- **Local-first, not cloud-first.** Every write hits IndexedDB before it ever touches the network. The cloud is treated as a sync target, not the source of truth — the app should never feel broken just because a request failed.
- **Sync failures are visible, not silent.** If a cloud write fails, the user gets a toast telling them their data is safe locally but not yet backed up — rather than pretending everything succeeded.
- **Auth state changes are filtered before triggering expensive work.** `AuthContext` only runs a full sync on genuine sign-in events, not on Supabase's periodic token refresh, to avoid unnecessary network chatter on long sessions.
- **Reproducibility over storage.** The shuffle-seed approach means "what did this attempt actually look like" can always be reconstructed exactly, without duplicating the question bank per attempt.
- **Guest mode is a first-class path, not an afterthought.** Nothing about taking a quiz, saving progress, or reviewing history requires an account — sign-in only adds cross-device sync on top of functionality that already works.

---

## Known limitations / roadmap

Being upfront about what's not done yet:

- No automated tests (Vitest/RTL would be the natural next step, starting with `quizService.calculateQuizResults` and the seeded-shuffle logic in `questionService`)
- No TypeScript — the whole codebase is JS/JSX
- No CI pipeline yet
- Cloud progress writes happen on every answer for signed-in users rather than being debounced
- No "practice mode" with instant per-question feedback (currently test-style only: results shown at the end)
- No way to flag a question and jump back to it before submitting
- No offline fallback screen for the PWA beyond the browser's default (works offline, but doesn't yet explain that state to the user)

---