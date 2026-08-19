const gitConflictResolutionQuestions = [
  {
    id: "git-conflict-resolution-q-001",
    quizId: "quiz_git_conflict_resolution",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a merge conflict?",
    options: [
      { id: "A", text: "A GitHub account authentication failure" },
      { id: "B", text: "A situation where Git cannot automatically determine how competing changes should be combined" },
      { id: "C", text: "A branch that has no commits" },
      { id: "D", text: "A failed Git installation" }
    ],
    correctOptionId: "B",
    explanation: "A merge conflict occurs when Git cannot automatically reconcile changes from different lines of development and needs human input.",
    tags: ["merge-conflicts", "merge"]
  },

  {
    id: "git-conflict-resolution-q-002",
    quizId: "quiz_git_conflict_resolution",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which situation is most likely to produce a merge conflict?",
    options: [
      { id: "A", text: "Two branches modify the same lines of a file differently" },
      { id: "B", text: "Two branches have identical histories" },
      { id: "C", text: "A repository contains a .gitignore file" },
      { id: "D", text: "A developer creates a new empty branch" }
    ],
    correctOptionId: "A",
    explanation: "Conflicts commonly occur when separate branches make incompatible changes to the same part of a file.",
    tags: ["merge-conflicts", "conflict-causes"]
  },

  {
    id: "git-conflict-resolution-q-003",
    quizId: "quiz_git_conflict_resolution",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which markers can Git insert into a file when a text merge conflict occurs?",
    options: [
      { id: "A", text: "<<<, ===, >>>" },
      { id: "B", text: "{{, }}, //" },
      { id: "C", text: "<<<<<<<, =======, >>>>>>>" },
      { id: "D", text: "[START], [END]" }
    ],
    correctOptionId: "C",
    explanation: "Git uses conflict markers such as `<<<<<<<`, `=======`, and `>>>>>>>` to identify the competing sections.",
    tags: ["conflicts", "conflict-markers"]
  },

  {
    id: "git-conflict-resolution-q-004",
    quizId: "quiz_git_conflict_resolution",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `<<<<<<<` marker generally indicate?",
    options: [
      { id: "A", text: "The beginning of one side of a conflict" },
      { id: "B", text: "The successful completion of a merge" },
      { id: "C", text: "The beginning of the Git repository" },
      { id: "D", text: "The end of the conflicting section" }
    ],
    correctOptionId: "A",
    explanation: "The `<<<<<<<` marker starts the section containing one side of the conflicting changes.",
    tags: ["conflict-markers"]
  },

  {
    id: "git-conflict-resolution-q-005",
    quizId: "quiz_git_conflict_resolution",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `=======` conflict marker separate?",
    options: [
      { id: "A", text: "Two repositories" },
      { id: "B", text: "The two conflicting versions of the content" },
      { id: "C", text: "The local and remote repositories" },
      { id: "D", text: "Two Git branches permanently" }
    ],
    correctOptionId: "B",
    explanation: "The `=======` marker separates the two competing versions inside a conflict block.",
    tags: ["conflict-markers"]
  },

  {
    id: "git-conflict-resolution-q-006",
    quizId: "quiz_git_conflict_resolution",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "After manually resolving a merge conflict, what should you normally do?",
    options: [
      { id: "A", text: "Delete the .git directory" },
      { id: "B", text: "Run git init again" },
      { id: "C", text: "Stage the resolved files" },
      { id: "D", text: "Clone the repository again" }
    ],
    correctOptionId: "C",
    explanation: "After resolving the contents, stage the files with `git add` to tell Git that those conflicts have been resolved.",
    tags: ["conflicts", "git-add", "merge"]
  },

  {
    id: "git-conflict-resolution-q-007",
    quizId: "quiz_git_conflict_resolution",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "During a merge, you resolve a conflict in `app.js`. Which command marks that file as resolved?",
    options: [
      { id: "A", text: "git resolve app.js" },
      { id: "B", text: "git merge --resolved app.js" },
      { id: "C", text: "git status --resolve app.js" },
      { id: "D", text: "git add app.js" }
    ],
    correctOptionId: "D",
    explanation: "Once the conflict has been manually resolved, `git add app.js` stages the resolved version.",
    tags: ["conflicts", "git-add"]
  },

  {
    id: "git-conflict-resolution-q-008",
    quizId: "quiz_git_conflict_resolution",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "How can you check which files still have unresolved merge conflicts?",
    options: [
      { id: "A", text: "git status" },
      { id: "B", text: "git conflicts" },
      { id: "C", text: "git unresolved" },
      { id: "D", text: "git log --conflicts-only" }
    ],
    correctOptionId: "A",
    explanation: "`git status` reports files that are still unmerged and provides guidance about resolving the merge.",
    tags: ["conflicts", "git-status"]
  },

  {
    id: "git-conflict-resolution-q-009",
    quizId: "quiz_git_conflict_resolution",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "After resolving all conflicts and staging the files during a merge, what normally completes the merge?",
    options: [
      { id: "A", text: "git init" },
      { id: "B", text: "The merge commit, usually created by git commit" },
      { id: "C", text: "git clone" },
      { id: "D", text: "git fetch" }
    ],
    correctOptionId: "B",
    explanation: "After conflict resolution and staging, the merge can be completed by creating the merge commit, typically with `git commit`.",
    tags: ["merge", "conflicts", "merge-commit"]
  },

  {
    id: "git-conflict-resolution-q-010",
    quizId: "quiz_git_conflict_resolution",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git merge --abort` generally do during an in-progress conflicted merge?",
    options: [
      { id: "A", text: "Deletes the repository" },
      { id: "B", text: "Commits all conflict markers" },
      { id: "C", text: "Attempts to return the repository to the state it was in before the merge began" },
      { id: "D", text: "Pushes the conflict to GitHub" }
    ],
    correctOptionId: "C",
    explanation: "`git merge --abort` attempts to cancel the current merge and restore the pre-merge state.",
    tags: ["merge-abort", "conflicts"]
  },

  {
    id: "git-conflict-resolution-q-011",
    quizId: "quiz_git_conflict_resolution",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about conflict resolution is correct?",
    options: [
      { id: "A", text: "Git always knows which developer's change is correct" },
      { id: "B", text: "Resolving a conflict may require understanding the intended behavior before choosing or combining changes" },
      { id: "C", text: "The newest commit is always automatically correct" },
      { id: "D", text: "Conflicts can only occur in text files" }
    ],
    correctOptionId: "B",
    explanation: "Git can identify conflicting changes but cannot determine the project's intended behavior. A developer must decide how the changes should be combined.",
    tags: ["conflicts", "best-practices"]
  },

  {
    id: "git-conflict-resolution-q-012",
    quizId: "quiz_git_conflict_resolution",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is rebasing in Git?",
    options: [
      { id: "A", text: "Deleting all commits from a branch" },
      { id: "B", text: "Creating a GitHub fork" },
      { id: "C", text: "Moving or replaying commits onto a new base commit" },
      { id: "D", text: "Converting a branch into a tag" }
    ],
    correctOptionId: "C",
    explanation: "Rebase takes commits from one line of development and replays them on top of another base.",
    tags: ["rebase", "history"]
  },

  {
    id: "git-conflict-resolution-q-013",
    quizId: "quiz_git_conflict_resolution",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can rebasing produce a cleaner-looking history?",
    options: [
      { id: "A", text: "It can replay commits on a new base and avoid unnecessary merge commits in some workflows" },
      { id: "B", text: "It deletes all old commits" },
      { id: "C", text: "It prevents developers from creating branches" },
      { id: "D", text: "It converts every commit into one file" }
    ],
    correctOptionId: "A",
    explanation: "Rebasing can produce a more linear history by replaying local commits on top of an updated base.",
    tags: ["rebase", "linear-history"]
  },

  {
    id: "git-conflict-resolution-q-014",
    quizId: "quiz_git_conflict_resolution",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Suppose you are on `feature` and want to rebase your feature commits onto the latest `main`. Which command is appropriate after obtaining the latest main history?",
    options: [
      { id: "A", text: "git rebase main" },
      { id: "B", text: "git rebase --delete main" },
      { id: "C", text: "git merge --rebase-only main" },
      { id: "D", text: "git branch --rebase main" }
    ],
    correctOptionId: "A",
    explanation: "While on the feature branch, `git rebase main` replays the feature's commits on top of the current `main` commit.",
    tags: ["rebase", "feature-branch"]
  },

  {
    id: "git-conflict-resolution-q-015",
    quizId: "quiz_git_conflict_resolution",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "During a rebase, Git reports a conflict. What should you generally do first?",
    options: [
      { id: "A", text: "Force-push immediately" },
      { id: "B", text: "Delete the conflicted commit" },
      { id: "C", text: "Inspect and resolve the conflicting files" },
      { id: "D", text: "Run git init" }
    ],
    correctOptionId: "C",
    explanation: "During a conflicted rebase, inspect the conflict, resolve the intended content, and then continue the rebase.",
    tags: ["rebase", "conflicts"]
  },

  {
    id: "git-conflict-resolution-q-016",
    quizId: "quiz_git_conflict_resolution",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "After resolving a conflict during a rebase and staging the file, which command continues the rebase?",
    options: [
      { id: "A", text: "git rebase --continue" },
      { id: "B", text: "git merge --continue" },
      { id: "C", text: "git rebase --finish" },
      { id: "D", text: "git continue-rebase" }
    ],
    correctOptionId: "A",
    explanation: "`git rebase --continue` tells Git to continue replaying the remaining commits after the conflict has been resolved and staged.",
    tags: ["rebase", "rebase-continue", "conflicts"]
  },

  {
    id: "git-conflict-resolution-q-017",
    quizId: "quiz_git_conflict_resolution",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command abandons an in-progress rebase?",
    options: [
      { id: "A", text: "git rebase --delete" },
      { id: "B", text: "git rebase --abort" },
      { id: "C", text: "git rebase --stop" },
      { id: "D", text: "git reset --rebase-abort" }
    ],
    correctOptionId: "B",
    explanation: "`git rebase --abort` cancels the current rebase and attempts to return the branch to its previous state.",
    tags: ["rebase", "rebase-abort"]
  },

  {
    id: "git-conflict-resolution-q-018",
    quizId: "quiz_git_conflict_resolution",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git rebase --skip` do during a rebase?",
    options: [
      { id: "A", text: "Skips the current commit being replayed" },
      { id: "B", text: "Skips every future commit" },
      { id: "C", text: "Deletes the target branch" },
      { id: "D", text: "Creates a merge commit" }
    ],
    correctOptionId: "A",
    explanation: "`git rebase --skip` tells Git to omit the current commit from the rebase sequence.",
    tags: ["rebase", "rebase-skip"]
  },

  {
    id: "git-conflict-resolution-q-019",
    quizId: "quiz_git_conflict_resolution",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens to commit IDs when commits are rebased?",
    options: [
      { id: "A", text: "They are guaranteed to remain identical" },
      { id: "B", text: "They are often changed because the commits are recreated with different ancestry" },
      { id: "C", text: "They become branch names" },
      { id: "D", text: "They are converted into tags" }
    ],
    correctOptionId: "B",
    explanation: "A rebased commit is generally recreated with a different parent, which changes its commit ID.",
    tags: ["rebase", "commit-hash", "history"]
  },

  {
    id: "git-conflict-resolution-q-020",
    quizId: "quiz_git_conflict_resolution",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is rebasing shared public history potentially dangerous?",
    options: [
      { id: "A", text: "It can rewrite commit IDs that other developers may already have based work on" },
      { id: "B", text: "It disables GitHub permanently" },
      { id: "C", text: "It removes all files from the working tree" },
      { id: "D", text: "It prevents any future commits" }
    ],
    correctOptionId: "A",
    explanation: "Rewriting shared history can cause collaborators to have different versions of the same commits and may require force-pushing.",
    tags: ["rebase", "shared-history", "collaboration"]
  },

  {
    id: "git-conflict-resolution-q-021",
    quizId: "quiz_git_conflict_resolution",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is generally safer when you need to undo a published commit without rewriting shared history?",
    options: [
      { id: "A", text: "git reset --hard" },
      { id: "B", text: "git rebase -i" },
      { id: "C", text: "git revert" },
      { id: "D", text: "git branch -D" }
    ],
    correctOptionId: "C",
    explanation: "`git revert` creates a new commit that reverses the earlier change while preserving the existing commit history.",
    tags: ["revert", "shared-history"]
  },

  {
    id: "git-conflict-resolution-q-022",
    quizId: "quiz_git_conflict_resolution",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does interactive rebase allow you to do?",
    options: [
      { id: "A", text: "Edit, reorder, squash, or otherwise manipulate a sequence of commits during the rebase" },
      { id: "B", text: "Automatically merge every remote repository" },
      { id: "C", text: "Delete GitHub accounts" },
      { id: "D", text: "Create database migrations" }
    ],
    correctOptionId: "A",
    explanation: "Interactive rebase provides an editor for controlling how selected commits are replayed.",
    tags: ["interactive-rebase", "rebase"]
  },

  {
    id: "git-conflict-resolution-q-023",
    quizId: "quiz_git_conflict_resolution",
    order: 23,
    type: "code",
    difficulty: "Intermediate",
    question: "Which command starts an interactive rebase over the last five commits?",
    options: [
      { id: "A", text: "git rebase --interactive 5" },
      { id: "B", text: "git rebase -i HEAD~5" },
      { id: "C", text: "git interactive-rebase 5" },
      { id: "D", text: "git rebase --edit 5" }
    ],
    correctOptionId: "B",
    explanation: "`git rebase -i HEAD~5` opens the last five commits in an interactive rebase sequence.",
    tags: ["interactive-rebase", "HEAD"]
  },

  {
    id: "git-conflict-resolution-q-024",
    quizId: "quiz_git_conflict_resolution",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In an interactive rebase todo list, what does `squash` generally mean?",
    options: [
      { id: "A", text: "Delete the entire branch" },
      { id: "B", text: "Push the commit to GitHub" },
      { id: "C", text: "Combine the commit with the previous commit and allow editing the resulting message" },
      { id: "D", text: "Create a merge commit" }
    ],
    correctOptionId: "C",
    explanation: "`squash` combines the selected commit with the previous commit and lets you edit the resulting commit message.",
    tags: ["interactive-rebase", "squash"]
  },

  {
    id: "git-conflict-resolution-q-025",
    quizId: "quiz_git_conflict_resolution",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How does `fixup` differ from `squash` in interactive rebase?",
    options: [
      { id: "A", text: "fixup combines the commit with the previous one while discarding the fixup commit's message" },
      { id: "B", text: "fixup creates a new branch" },
      { id: "C", text: "fixup always creates a merge commit" },
      { id: "D", text: "fixup aborts the rebase" }
    ],
    correctOptionId: "A",
    explanation: "`fixup` combines the commit with the previous commit without using the fixup commit's message in the final commit message.",
    tags: ["interactive-rebase", "fixup"]
  },

  {
    id: "git-conflict-resolution-q-026",
    quizId: "quiz_git_conflict_resolution",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git rebase main` do when run from a feature branch?",
    options: [
      { id: "A", text: "Moves main onto the feature branch" },
      { id: "B", text: "Replays feature commits on top of the current main commit" },
      { id: "C", text: "Deletes main" },
      { id: "D", text: "Creates a GitHub pull request" }
    ],
    correctOptionId: "B",
    explanation: "The current branch's commits are replayed onto the specified base, here `main`.",
    tags: ["rebase", "feature-branch"]
  },

  {
    id: "git-conflict-resolution-q-027",
    quizId: "quiz_git_conflict_resolution",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```text\nA---B---C  main\n     \\\n      D---E  feature\n```\n\nWhat happens conceptually when feature is rebased onto main?",
    options: [
      { id: "A", text: "D and E are deleted" },
      { id: "B", text: "Main is moved onto E" },
      { id: "C", text: "Feature commits are replayed on top of C, producing new commits" },
      { id: "D", text: "A merge commit is always created" }
    ],
    correctOptionId: "C",
    explanation: "The feature commits are recreated on top of the new base represented by C.",
    tags: ["rebase", "history"]
  },

  {
    id: "git-conflict-resolution-q-028",
    quizId: "quiz_git_conflict_resolution",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main conceptual difference between merging and rebasing?",
    options: [
      { id: "A", text: "Merging combines histories while preserving their existing ancestry; rebasing recreates commits on a new base" },
      { id: "B", text: "Merging deletes history while rebasing preserves every commit ID" },
      { id: "C", text: "They always produce exactly the same history" },
      { id: "D", text: "Rebase only works with remote repositories" }
    ],
    correctOptionId: "A",
    explanation: "A merge joins existing histories, while rebase changes the ancestry by replaying commits onto another base.",
    tags: ["merge", "rebase", "history"]
  },

  {
    id: "git-conflict-resolution-q-029",
    quizId: "quiz_git_conflict_resolution",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about merge conflicts and rebase conflicts is correct?",
    options: [
      { id: "A", text: "Conflicts can occur during both merge and rebase operations" },
      { id: "B", text: "Only merges can produce conflicts" },
      { id: "C", text: "Only rebases can produce conflicts" },
      { id: "D", text: "Rebase automatically resolves every conflict" }
    ],
    correctOptionId: "A",
    explanation: "Both operations may encounter incompatible changes and require manual conflict resolution.",
    tags: ["conflicts", "merge", "rebase"]
  },

  {
    id: "git-conflict-resolution-q-030",
    quizId: "quiz_git_conflict_resolution",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "During a rebase conflict, what does `git status` help you determine?",
    options: [
      { id: "A", text: "Which files remain conflicted and what Git expects you to do next" },
      { id: "B", text: "Which GitHub users are online" },
      { id: "C", text: "Which commits will be created next with certainty" },
      { id: "D", text: "Whether the remote repository has been deleted" }
    ],
    correctOptionId: "A",
    explanation: "`git status` reports the state of the ongoing rebase and identifies files that need attention.",
    tags: ["rebase", "conflicts", "git-status"]
  },

  {
    id: "git-conflict-resolution-q-031",
    quizId: "quiz_git_conflict_resolution",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does it mean when Git says a rebase is stopped because of conflicts?",
    options: [
      { id: "A", text: "Git is waiting for you to resolve the current conflict before continuing the commit replay" },
      { id: "B", text: "The repository has been permanently corrupted" },
      { id: "C", text: "All feature commits have been deleted" },
      { id: "D", text: "The remote branch has automatically been force-pushed" }
    ],
    correctOptionId: "A",
    explanation: "The rebase pauses at the problematic commit so you can resolve the conflict before continuing.",
    tags: ["rebase", "conflicts"]
  },

  {
    id: "git-conflict-resolution-q-032",
    quizId: "quiz_git_conflict_resolution",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What should you generally verify after completing a complex rebase?",
    options: [
      { id: "A", text: "That tests pass and the resulting history and behavior are correct" },
      { id: "B", text: "That all branches have been deleted" },
      { id: "C", text: "That every commit has the same hash as before" },
      { id: "D", text: "That the repository has no remote" }
    ],
    correctOptionId: "A",
    explanation: "Because rebase can rewrite history and replay changes, running tests and reviewing the resulting history is important.",
    tags: ["rebase", "testing", "best-practices"]
  },

  {
    id: "git-conflict-resolution-q-033",
    quizId: "quiz_git_conflict_resolution",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common mistake when resolving a conflict?",
    options: [
      { id: "A", text: "Understanding both sides before choosing the final content" },
      { id: "B", text: "Running tests after resolving the conflict" },
      { id: "C", text: "Removing conflict markers but accidentally leaving incorrect code" },
      { id: "D", text: "Reviewing the resulting diff" }
    ],
    correctOptionId: "C",
    explanation: "A file can be syntactically valid after removing conflict markers but still contain incorrect behavior if the resolution was not understood carefully.",
    tags: ["conflicts", "common-mistakes"]
  },

  {
    id: "git-conflict-resolution-q-034",
    quizId: "quiz_git_conflict_resolution",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should you not simply choose 'ours' or 'theirs' for every conflict without reviewing the context?",
    options: [
      { id: "A", text: "Because the correct resolution depends on the intended behavior and may require combining both changes" },
      { id: "B", text: "Because Git does not support those concepts" },
      { id: "C", text: "Because choosing either side deletes the repository" },
      { id: "D", text: "Because conflict resolution never affects application behavior" }
    ],
    correctOptionId: "A",
    explanation: "Conflict resolution is a semantic decision. Sometimes one side is correct, while other situations require combining parts of both changes.",
    tags: ["conflicts", "ours-theirs", "best-practices"]
  },

  {
    id: "git-conflict-resolution-q-035",
    quizId: "quiz_git_conflict_resolution",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git checkout --ours <file>` historically refer to during a conflicted merge?",
    options: [
      { id: "A", text: "The version from the branch being merged in" },
      { id: "B", text: "The version from the currently checked-out side of the merge" },
      { id: "C", text: "The version from GitHub's main branch" },
      { id: "D", text: "The version from the oldest commit" }
    ],
    correctOptionId: "B",
    explanation: "During a merge, 'ours' refers to the current branch side of the conflict, while 'theirs' refers to the branch being merged.",
    tags: ["conflicts", "ours-theirs"]
  },

  {
    id: "git-conflict-resolution-q-036",
    quizId: "quiz_git_conflict_resolution",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "During a merge, what does 'theirs' generally refer to?",
    options: [
      { id: "A", text: "The branch being merged into the current branch" },
      { id: "B", text: "The current branch" },
      { id: "C", text: "The oldest repository version" },
      { id: "D", text: "The remote called origin" }
    ],
    correctOptionId: "A",
    explanation: "In a normal merge, 'theirs' refers to the other side of the merge — the branch whose changes are being integrated.",
    tags: ["conflicts", "ours-theirs"]
  },

  {
    id: "git-conflict-resolution-q-037",
    quizId: "quiz_git_conflict_resolution",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one benefit of resolving conflicts locally before pushing a branch?",
    options: [
      { id: "A", text: "You can test the integrated result before sharing the resolved history" },
      { id: "B", text: "It guarantees the code is bug-free" },
      { id: "C", text: "It automatically merges all other branches" },
      { id: "D", text: "It removes the need for code review" }
    ],
    correctOptionId: "A",
    explanation: "Resolving and testing locally allows you to verify that the integrated code behaves correctly before pushing it to collaborators.",
    tags: ["conflicts", "workflow", "testing"]
  },

  {
    id: "git-conflict-resolution-q-038",
    quizId: "quiz_git_conflict_resolution",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can a rebase require a force push afterward?",
    options: [
      { id: "A", text: "Because rebase can rewrite the commit history, making the local branch no longer a fast-forward update of the remote branch" },
      { id: "B", text: "Because GitHub requires force pushes for every branch" },
      { id: "C", text: "Because rebase deletes the remote repository" },
      { id: "D", text: "Because rebase disables normal pushes permanently" }
    ],
    correctOptionId: "A",
    explanation: "After rewriting commit ancestry, the remote branch may contain the old commit IDs, so a normal push may be rejected.",
    tags: ["rebase", "force-push", "history"]
  },

  {
    id: "git-conflict-resolution-q-039",
    quizId: "quiz_git_conflict_resolution",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command is generally safer than `git push --force` after rewriting your own branch history?",
    options: [
      { id: "A", text: "git push --delete" },
      { id: "B", text: "git push --force-with-lease" },
      { id: "C", text: "git push --overwrite-all" },
      { id: "D", text: "git push --unsafe" }
    ],
    correctOptionId: "B",
    explanation: "`--force-with-lease` performs a safety check before allowing the forced update.",
    tags: ["force-with-lease", "rebase", "push"]
  },

  {
    id: "git-conflict-resolution-q-040",
    quizId: "quiz_git_conflict_resolution",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `git rerere`?",
    options: [
      { id: "A", text: "It can remember previously recorded conflict resolutions and reuse them when the same conflict occurs again" },
      { id: "B", text: "It permanently deletes merge conflicts" },
      { id: "C", text: "It creates remote repositories" },
      { id: "D", text: "It converts merge commits into tags" }
    ],
    correctOptionId: "A",
    explanation: "`rerere` stands for reuse recorded resolution and can help Git reuse a conflict resolution that has previously been recorded.",
    tags: ["rerere", "conflicts", "advanced-git"]
  },

  {
    id: "git-conflict-resolution-q-041",
    quizId: "quiz_git_conflict_resolution",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main danger of rewriting a branch that other developers have already based work on?",
    options: [
      { id: "A", text: "Their references may point to commits that no longer match the rewritten branch history" },
      { id: "B", text: "Git automatically deletes their working directories" },
      { id: "C", text: "GitHub permanently blocks their accounts" },
      { id: "D", text: "All branches become read-only" }
    ],
    correctOptionId: "A",
    explanation: "History rewriting changes commit identities and ancestry, potentially causing collaborators to have divergent histories.",
    tags: ["history-rewrite", "rebase", "collaboration"]
  },

  {
    id: "git-conflict-resolution-q-042",
    quizId: "quiz_git_conflict_resolution",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `git rebase --onto` allow you to do?",
    options: [
      { id: "A", text: "Delete all commits before a branch" },
      { id: "B", text: "Replay a selected range of commits onto a specified new base" },
      { id: "C", text: "Merge every remote branch" },
      { id: "D", text: "Create a GitHub organization" }
    ],
    correctOptionId: "B",
    explanation: "`--onto` provides fine-grained control over which commits are replayed and what new base they should be applied onto.",
    tags: ["rebase-onto", "advanced-git"]
  },

  {
    id: "git-conflict-resolution-q-043",
    quizId: "quiz_git_conflict_resolution",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might `git rebase --onto` be useful in a stacked-branch workflow?",
    options: [
      { id: "A", text: "It can move a series of commits from one base to another without replaying unrelated history" },
      { id: "B", text: "It automatically creates pull requests" },
      { id: "C", text: "It prevents branches from diverging forever" },
      { id: "D", text: "It removes all merge commits from the repository" }
    ],
    correctOptionId: "A",
    explanation: "`--onto` can selectively transplant a range of commits onto a different base, which is useful when branch dependencies change.",
    tags: ["rebase-onto", "stacked-branches"]
  },

  {
    id: "git-conflict-resolution-q-044",
    quizId: "quiz_git_conflict_resolution",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common reason to rebase a feature branch before opening or updating a pull request?",
    options: [
      { id: "A", text: "To incorporate the latest target-branch changes and present a more linear history" },
      { id: "B", text: "To delete the pull request" },
      { id: "C", text: "To remove all feature commits" },
      { id: "D", text: "To bypass all automated checks" }
    ],
    correctOptionId: "A",
    explanation: "Rebasing can bring the feature branch onto the current target branch and may make its history easier to review.",
    tags: ["rebase", "pull-request", "workflow"]
  },

  {
    id: "git-conflict-resolution-q-045",
    quizId: "quiz_git_conflict_resolution",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should you coordinate with collaborators before rebasing a shared branch?",
    options: [
      { id: "A", text: "Because the rebase can rewrite commits that collaborators already reference" },
      { id: "B", text: "Because Git cannot rebase branches with more than one commit" },
      { id: "C", text: "Because rebasing requires deleting the repository" },
      { id: "D", text: "Because GitHub does not support branches" }
    ],
    correctOptionId: "A",
    explanation: "Rebasing shared history can invalidate collaborators' existing commit references and complicate synchronization.",
    tags: ["rebase", "collaboration", "shared-history"]
  },

  {
    id: "git-conflict-resolution-q-046",
    quizId: "quiz_git_conflict_resolution",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "During a rebase, you resolve a conflict but accidentally stage the wrong final contents. What is the primary risk?",
    options: [
      { id: "A", text: "The rebase will automatically detect all semantic mistakes" },
      { id: "B", text: "The resulting history may be valid while containing incorrect application behavior" },
      { id: "C", text: "Git will delete the remote repository" },
      { id: "D", text: "The branch will automatically become detached forever" }
    ],
    correctOptionId: "B",
    explanation: "Git can verify that the conflict is mechanically resolved, but it cannot guarantee that the chosen code implements the intended behavior.",
    tags: ["rebase", "conflicts", "testing"]
  },

  {
    id: "git-conflict-resolution-q-047",
    quizId: "quiz_git_conflict_resolution",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which practice is most useful after resolving a complicated conflict?",
    options: [
      { id: "A", text: "Run relevant tests and inspect the resulting diff/history" },
      { id: "B", text: "Immediately delete the branch" },
      { id: "C", text: "Force-push every remote branch" },
      { id: "D", text: "Remove the test suite to avoid failures" }
    ],
    correctOptionId: "A",
    explanation: "Conflict resolution changes code from multiple development lines, so tests and review help detect incorrect resolutions.",
    tags: ["conflicts", "testing", "best-practices"]
  },

  {
    id: "git-conflict-resolution-q-048",
    quizId: "quiz_git_conflict_resolution",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer has a feature branch with local commits. Main has advanced significantly, and the feature branch has not been shared with anyone else. Which approach is generally reasonable if the team prefers linear history?",
    options: [
      { id: "A", text: "Rebase the feature branch onto the updated main" },
      { id: "B", text: "Force-reset main to the feature branch" },
      { id: "C", text: "Delete main and recreate it" },
      { id: "D", text: "Delete all feature commits" }
    ],
    correctOptionId: "A",
    explanation: "Because the feature history is private, rebasing it onto the updated main is generally safe and can produce a clean linear history.",
    tags: ["rebase", "feature-branch", "workflow"]
  },

  {
    id: "git-conflict-resolution-q-049",
    quizId: "quiz_git_conflict_resolution",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A feature branch has already been pushed and another developer has based work on it. You want to clean up the feature's commit history. What should you consider first?",
    options: [
      { id: "A", text: "Whether rewriting the shared branch will disrupt collaborators" },
      { id: "B", text: "Whether GitHub supports commit messages" },
      { id: "C", text: "Whether the branch contains exactly two files" },
      { id: "D", text: "Whether `.gitignore` contains the branch name" }
    ],
    correctOptionId: "A",
    explanation: "Once others depend on a branch, rewriting its history can cause synchronization problems. Coordination is essential before doing so.",
    tags: ["rebase", "shared-history", "collaboration"]
  },

  {
    id: "git-conflict-resolution-q-050",
    quizId: "quiz_git_conflict_resolution",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are rebasing a private feature branch onto the latest `main`. Git stops because of a conflict. Which sequence best represents the normal recovery workflow?",
    options: [
      { id: "A", text: "Resolve files → stage resolutions → git rebase --continue → repeat if necessary → test the final result" },
      { id: "B", text: "Delete the repository → clone again → force-push main" },
      { id: "C", text: "Run git init → delete the conflict markers automatically → push" },
      { id: "D", text: "Run git rebase --abort → delete the feature branch → recreate it without commits" }
    ],
    correctOptionId: "A",
    explanation: "During a conflicted rebase, resolve each conflict, stage the resolved files, continue the rebase, repeat for later conflicts, and verify the final result with tests and review.",
    tags: ["rebase", "conflicts", "workflow", "best-practices"]
  }
];

export default gitConflictResolutionQuestions;