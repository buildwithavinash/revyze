const gitFundamentalsQuestions = [
  {
    id: "git-fundamentals-q-001",
    quizId: "quiz_git_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is Git primarily used for?",
    options: [
      { id: "A", text: "Hosting websites" },
      { id: "B", text: "Managing and tracking changes to files" },
      { id: "C", text: "Running JavaScript in a browser" },
      { id: "D", text: "Managing SQL databases" }
    ],
    correctOptionId: "B",
    explanation: "Git is a distributed version control system that tracks changes to files and allows developers to manage different versions of a project.",
    tags: ["git", "version-control"]
  },

  {
    id: "git-fundamentals-q-002",
    quizId: "quiz_git_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command initializes a Git repository in the current directory?",
    options: [
      { id: "A", text: "git create" },
      { id: "B", text: "git start" },
      { id: "C", text: "git init" },
      { id: "D", text: "git repository" }
    ],
    correctOptionId: "C",
    explanation: "`git init` creates the `.git` directory and initializes the current directory as a Git repository.",
    tags: ["git-init", "repository"]
  },

  {
    id: "git-fundamentals-q-003",
    quizId: "quiz_git_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `.git` directory contain?",
    options: [
      { id: "A", text: "Git's repository metadata and version-control information" },
      { id: "B", text: "Only the project's source code" },
      { id: "C", text: "Only files that are currently staged" },
      { id: "D", text: "The GitHub website for the project" }
    ],
    correctOptionId: "A",
    explanation: "The `.git` directory stores the repository's objects, references, configuration, and other metadata required for Git to track the project.",
    tags: ["git-directory", "repository"]
  },

  {
    id: "git-fundamentals-q-004",
    quizId: "quiz_git_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command shows the current state of the working tree and staging area?",
    options: [
      { id: "A", text: "git inspect" },
      { id: "B", text: "git state" },
      { id: "C", text: "git check" },
      { id: "D", text: "git status" }
    ],
    correctOptionId: "D",
    explanation: "`git status` shows information about modified, staged, and untracked files as well as the current branch.",
    tags: ["git-status", "workflow"]
  },

  {
    id: "git-fundamentals-q-005",
    quizId: "quiz_git_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command stages a file named `app.js`?",
    options: [
      { id: "A", text: "git stage app.js" },
      { id: "B", text: "git add app.js" },
      { id: "C", text: "git commit app.js" },
      { id: "D", text: "git prepare app.js" }
    ],
    correctOptionId: "B",
    explanation: "`git add app.js` places the current changes to `app.js` into the staging area.",
    tags: ["git-add", "staging"]
  },

  {
    id: "git-fundamentals-q-006",
    quizId: "quiz_git_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the staging area used for?",
    options: [
      { id: "A", text: "Selecting changes to include in the next commit" },
      { id: "B", text: "Uploading files to GitHub" },
      { id: "C", text: "Creating remote repositories" },
      { id: "D", text: "Deleting old commits" }
    ],
    correctOptionId: "A",
    explanation: "The staging area lets you select exactly which changes should be included in the next commit.",
    tags: ["staging", "git-add"]
  },

  {
    id: "git-fundamentals-q-007",
    quizId: "quiz_git_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command creates a commit with a message?",
    options: [
      { id: "A", text: "git save -m \"message\"" },
      { id: "B", text: "git record -m \"message\"" },
      { id: "C", text: "git commit -m \"message\"" },
      { id: "D", text: "git snapshot \"message\"" }
    ],
    correctOptionId: "C",
    explanation: "`git commit -m \"message\"` creates a commit from the currently staged changes and assigns the provided commit message.",
    tags: ["git-commit", "commit-message"]
  },

  {
    id: "git-fundamentals-q-008",
    quizId: "quiz_git_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a Git commit represent?",
    options: [
      { id: "A", text: "A remote GitHub repository" },
      { id: "B", text: "A branch that has been deleted" },
      { id: "C", text: "A list of untracked files" },
      { id: "D", text: "A recorded snapshot of staged changes" }
    ],
    correctOptionId: "D",
    explanation: "A commit records a snapshot of the project based on the changes that were staged at the time of committing.",
    tags: ["commits", "snapshots"]
  },

  {
    id: "git-fundamentals-q-009",
    quizId: "quiz_git_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command displays the commit history?",
    options: [
      { id: "A", text: "git log" },
      { id: "B", text: "git history" },
      { id: "C", text: "git commits" },
      { id: "D", text: "git timeline" }
    ],
    correctOptionId: "A",
    explanation: "`git log` displays the commit history of the current repository.",
    tags: ["git-log", "history"]
  },

  {
    id: "git-fundamentals-q-010",
    quizId: "quiz_git_fundamentals",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "You modify `index.html` but have not run `git add`. Where is the change currently located?",
    options: [
      { id: "A", text: "Only in the GitHub repository" },
      { id: "B", text: "In the working tree but not the staging area" },
      { id: "C", text: "Already inside a commit" },
      { id: "D", text: "Only inside the `.gitignore` file" }
    ],
    correctOptionId: "B",
    explanation: "Editing a tracked file changes the working tree. The change does not enter the staging area until you run `git add`.",
    tags: ["working-tree", "staging"]
  },

  {
    id: "git-fundamentals-q-011",
    quizId: "quiz_git_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git add .` generally do?",
    options: [
      { id: "A", text: "Creates a commit automatically" },
      { id: "B", text: "Pushes all changes to GitHub" },
      { id: "C", text: "Stages eligible changes under the current directory" },
      { id: "D", text: "Deletes every untracked file" }
    ],
    correctOptionId: "C",
    explanation: "`git add .` stages changes matched by the command from the current directory downward, subject to Git's ignore rules.",
    tags: ["git-add", "staging"]
  },

  {
    id: "git-fundamentals-q-012",
    quizId: "quiz_git_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which sequence represents the basic Git workflow for saving a change?",
    options: [
      { id: "A", text: "edit → stage → commit" },
      { id: "B", text: "commit → edit → stage" },
      { id: "C", text: "stage → push → edit" },
      { id: "D", text: "push → edit → commit" }
    ],
    correctOptionId: "A",
    explanation: "A typical local Git workflow is to edit files, stage the desired changes, and then create a commit.",
    tags: ["workflow", "staging", "commits"]
  },

  {
    id: "git-fundamentals-q-013",
    quizId: "quiz_git_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens if you run `git commit` without staging newly modified changes?",
    options: [
      { id: "A", text: "All modified files are automatically committed" },
      { id: "B", text: "Git automatically pushes the changes" },
      { id: "C", text: "Git creates an empty GitHub repository" },
      { id: "D", text: "The unstaged modifications are not included in the commit" }
    ],
    correctOptionId: "D",
    explanation: "A normal commit records the contents currently staged in the index. Unstaged modifications remain outside that commit.",
    tags: ["commit", "staging"]
  },

  {
    id: "git-fundamentals-q-014",
    quizId: "quiz_git_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git status` report for a newly created file that Git is not tracking?",
    options: [
      { id: "A", text: "It reports the file as untracked" },
      { id: "B", text: "It automatically commits the file" },
      { id: "C", text: "It reports the file as deleted" },
      { id: "D", text: "It ignores the file completely" }
    ],
    correctOptionId: "A",
    explanation: "Files that exist in the working tree but have not been added to Git are shown as untracked files.",
    tags: ["git-status", "untracked-files"]
  },

  {
    id: "git-fundamentals-q-015",
    quizId: "quiz_git_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command stages all tracked modifications and deletions in the current working tree, but not new untracked files?",
    options: [
      { id: "A", text: "git add ." },
      { id: "B", text: "git add -u" },
      { id: "C", text: "git commit -a" },
      { id: "D", text: "git stage --all" }
    ],
    correctOptionId: "B",
    explanation: "`git add -u` stages modifications and deletions of already tracked files, but does not add new untracked files.",
    tags: ["git-add", "staging", "tracked-files"]
  },

  {
    id: "git-fundamentals-q-016",
    quizId: "quiz_git_fundamentals",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `-m` option mean in `git commit -m \"Fix bug\"`?",
    options: [
      { id: "A", text: "Merge" },
      { id: "B", text: "Main branch" },
      { id: "C", text: "Message" },
      { id: "D", text: "Modify" }
    ],
    correctOptionId: "C",
    explanation: "The `-m` option allows you to provide the commit message directly in the command.",
    tags: ["git-commit", "commit-message"]
  },

  {
    id: "git-fundamentals-q-017",
    quizId: "quiz_git_fundamentals",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why are meaningful commit messages useful?",
    options: [
      { id: "A", text: "They automatically improve application performance" },
      { id: "B", text: "They make it easier to understand repository history" },
      { id: "C", text: "They prevent all merge conflicts" },
      { id: "D", text: "They replace the need for branches" }
    ],
    correctOptionId: "B",
    explanation: "Clear commit messages help developers understand what changed and why when reviewing repository history.",
    tags: ["commit-message", "best-practices"]
  },

  {
    id: "git-fundamentals-q-018",
    quizId: "quiz_git_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command shows a compact one-line summary for each commit?",
    options: [
      { id: "A", text: "git log --oneline" },
      { id: "B", text: "git history --short" },
      { id: "C", text: "git commits --compact" },
      { id: "D", text: "git status --oneline" }
    ],
    correctOptionId: "A",
    explanation: "`git log --oneline` displays each commit in a concise single-line format.",
    tags: ["git-log", "history"]
  },

  {
    id: "git-fundamentals-q-019",
    quizId: "quiz_git_fundamentals",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the working tree in Git?",
    options: [
      { id: "A", text: "Only the files inside `.git`" },
      { id: "B", text: "Only the staging area" },
      { id: "C", text: "The files and directories you are currently working on" },
      { id: "D", text: "The remote repository on GitHub" }
    ],
    correctOptionId: "C",
    explanation: "The working tree is the checked-out version of your project where you edit and create files.",
    tags: ["working-tree", "fundamentals"]
  },

  {
    id: "git-fundamentals-q-020",
    quizId: "quiz_git_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which area comes between your working files and the repository's committed history?",
    options: [
      { id: "A", text: "GitHub" },
      { id: "B", text: "The staging area" },
      { id: "C", text: "The remote branch" },
      { id: "D", text: "The `.gitignore` file" }
    ],
    correctOptionId: "B",
    explanation: "Git's staging area, also called the index, lets you prepare changes before committing them.",
    tags: ["staging", "index"]
  },

  {
    id: "git-fundamentals-q-021",
    quizId: "quiz_git_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "If a file is modified but not staged, what will `git status` typically show?",
    options: [
      { id: "A", text: "The file as modified but not staged for commit" },
      { id: "B", text: "The file as committed" },
      { id: "C", text: "The file as a remote branch" },
      { id: "D", text: "Nothing about the file" }
    ],
    correctOptionId: "A",
    explanation: "Git status distinguishes working-tree modifications from changes already staged for the next commit.",
    tags: ["git-status", "unstaged-changes"]
  },

  {
    id: "git-fundamentals-q-022",
    quizId: "quiz_git_fundamentals",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when you run `git add` on a modified tracked file?",
    options: [
      { id: "A", text: "The file is permanently committed" },
      { id: "B", text: "The file is uploaded to GitHub" },
      { id: "C", text: "The file's current changes are placed in the staging area" },
      { id: "D", text: "The file is deleted from the working tree" }
    ],
    correctOptionId: "C",
    explanation: "`git add` updates the staging area with the current contents of the specified file.",
    tags: ["git-add", "staging"]
  },

  {
    id: "git-fundamentals-q-023",
    quizId: "quiz_git_fundamentals",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the relationship between `git add` and `git commit`?",
    options: [
      { id: "A", text: "`git add` stages changes, while `git commit` records staged changes" },
      { id: "B", text: "Both commands create commits" },
      { id: "C", text: "`git commit` stages changes, while `git add` pushes them" },
      { id: "D", text: "Both commands only inspect repository status" }
    ],
    correctOptionId: "A",
    explanation: "`git add` prepares changes in the index; `git commit` records the staged snapshot into repository history.",
    tags: ["git-add", "git-commit", "workflow"]
  },

  {
    id: "git-fundamentals-q-024",
    quizId: "quiz_git_fundamentals",
    order: 24,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command lets you inspect the exact changes that have not yet been staged?",
    options: [
      { id: "A", text: "git log" },
      { id: "B", text: "git status" },
      { id: "C", text: "git diff" },
      { id: "D", text: "git init" }
    ],
    correctOptionId: "C",
    explanation: "By default, `git diff` compares the working tree against the staging area, showing unstaged changes.",
    tags: ["git-diff", "unstaged-changes"]
  },

  {
    id: "git-fundamentals-q-025",
    quizId: "quiz_git_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command shows changes that are staged but not yet committed?",
    options: [
      { id: "A", text: "git diff --cached" },
      { id: "B", text: "git status --staged-only" },
      { id: "C", text: "git log --staged" },
      { id: "D", text: "git staged-diff" }
    ],
    correctOptionId: "A",
    explanation: "`git diff --cached` compares the staging area with the current commit and shows staged changes.",
    tags: ["git-diff", "staging"]
  },

  {
    id: "git-fundamentals-q-026",
    quizId: "quiz_git_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git log -1` typically show?",
    options: [
      { id: "A", text: "The first commit ever created" },
      { id: "B", text: "The latest commit" },
      { id: "C", text: "One untracked file" },
      { id: "D", text: "One Git branch" }
    ],
    correctOptionId: "B",
    explanation: "The `-1` option limits the log output to one commit, normally the most recent commit.",
    tags: ["git-log", "history"]
  },

  {
    id: "git-fundamentals-q-027",
    quizId: "quiz_git_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "What information can `git log` commonly display?",
    options: [
      { id: "A", text: "Commit IDs, authors, dates, and commit messages" },
      { id: "B", text: "Only the current file contents" },
      { id: "C", text: "Only GitHub issues" },
      { id: "D", text: "Only untracked files" }
    ],
    correctOptionId: "A",
    explanation: "Git log commonly displays commit metadata including the commit hash, author, date, and message.",
    tags: ["git-log", "commit-history"]
  },

  {
    id: "git-fundamentals-q-028",
    quizId: "quiz_git_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a commit hash?",
    options: [
      { id: "A", text: "The name of the GitHub account" },
      { id: "B", text: "A unique identifier associated with a commit" },
      { id: "C", text: "A password used to push code" },
      { id: "D", text: "A branch's display name" }
    ],
    correctOptionId: "B",
    explanation: "A commit has a unique object ID, commonly represented as a hexadecimal hash, which identifies that commit.",
    tags: ["commit-hash", "commits"]
  },

  {
    id: "git-fundamentals-q-029",
    quizId: "quiz_git_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why does Git use commits instead of simply overwriting the previous project version?",
    options: [
      { id: "A", text: "To preserve a history of project changes" },
      { id: "B", text: "To make files larger" },
      { id: "C", text: "To prevent developers from editing files" },
      { id: "D", text: "To make Git dependent on GitHub" }
    ],
    correctOptionId: "A",
    explanation: "Commits allow Git to preserve project history so developers can inspect, compare, and potentially restore earlier states.",
    tags: ["commits", "history"]
  },

  {
    id: "git-fundamentals-q-030",
    quizId: "quiz_git_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "You stage `app.js`, then modify it again before committing. Which statement is correct?",
    options: [
      { id: "A", text: "The new modification is automatically staged" },
      { id: "B", text: "The new modification is not automatically staged" },
      { id: "C", text: "Git automatically commits both versions" },
      { id: "D", text: "The original staged version disappears" }
    ],
    correctOptionId: "B",
    explanation: "After staging a file, further edits modify the working tree. Those later changes need to be staged again if they should be included in the commit.",
    tags: ["staging", "working-tree"]
  },

  {
    id: "git-fundamentals-q-031",
    quizId: "quiz_git_fundamentals",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command can stage all changes in the repository, including new files, subject to ignore rules?",
    options: [
      { id: "A", text: "git add --all" },
      { id: "B", text: "git commit --all" },
      { id: "C", text: "git stage-new" },
      { id: "D", text: "git prepare-all" }
    ],
    correctOptionId: "A",
    explanation: "`git add --all` stages additions, modifications, and deletions throughout the repository, subject to Git's ignore rules.",
    tags: ["git-add", "staging"]
  },

  {
    id: "git-fundamentals-q-032",
    quizId: "quiz_git_fundamentals",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about Git and GitHub is correct?",
    options: [
      { id: "A", text: "Git and GitHub are exactly the same thing" },
      { id: "B", text: "Git is a version-control system, while GitHub is a platform for hosting and collaborating on repositories" },
      { id: "C", text: "Git only works when GitHub is installed" },
      { id: "D", text: "GitHub replaces the need for commits" }
    ],
    correctOptionId: "B",
    explanation: "Git is the version-control software. GitHub is an online platform that provides repository hosting and collaboration features.",
    tags: ["git", "github"]
  },

  {
    id: "git-fundamentals-q-033",
    quizId: "quiz_git_fundamentals",
    order: 33,
    type: "mcq",
    difficulty: "Beginner",
    question: "Can Git be used without GitHub?",
    options: [
      { id: "A", text: "No, Git requires GitHub" },
      { id: "B", text: "Only when using JavaScript" },
      { id: "C", text: "Yes, Git works locally without GitHub" },
      { id: "D", text: "Only on Linux" }
    ],
    correctOptionId: "C",
    explanation: "Git is distributed version-control software and can be used entirely locally without any GitHub account.",
    tags: ["git", "github", "local-repository"]
  },

  {
    id: "git-fundamentals-q-034",
    quizId: "quiz_git_fundamentals",
    order: 34,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git init` NOT do?",
    options: [
      { id: "A", text: "Create Git repository metadata" },
      { id: "B", text: "Initialize the current directory as a repository" },
      { id: "C", text: "Start tracking the repository's history infrastructure" },
      { id: "D", text: "Automatically create commits for all existing files" }
    ],
    correctOptionId: "D",
    explanation: "`git init` initializes the repository, but it does not automatically stage or commit the existing files.",
    tags: ["git-init", "repository"]
  },

  {
    id: "git-fundamentals-q-035",
    quizId: "quiz_git_fundamentals",
    order: 35,
    type: "mcq",
    difficulty: "Beginner",
    question: "After running `git init` in a project, what must you do before the first commit?",
    options: [
      { id: "A", text: "Create a GitHub organization" },
      { id: "B", text: "Stage the files you want included in the first commit" },
      { id: "C", text: "Run git push first" },
      { id: "D", text: "Delete the `.git` directory" }
    ],
    correctOptionId: "B",
    explanation: "The files need to be staged with `git add` before they can be included in the initial commit.",
    tags: ["git-init", "staging", "first-commit"]
  },

  {
    id: "git-fundamentals-q-036",
    quizId: "quiz_git_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command is useful for checking whether you are currently inside a Git repository?",
    options: [
      { id: "A", text: "git status" },
      { id: "B", text: "git repository-check" },
      { id: "C", text: "git verify-repo" },
      { id: "D", text: "git current-repository" }
    ],
    correctOptionId: "A",
    explanation: "`git status` can be run within a repository and reports repository state. If the directory is not within a repository, Git reports that it is not one.",
    tags: ["git-status", "repository"]
  },

  {
    id: "git-fundamentals-q-037",
    quizId: "quiz_git_fundamentals",
    order: 37,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an untracked file?",
    options: [
      { id: "A", text: "A file Git knows about but whose changes are staged" },
      { id: "B", text: "A file that exists in the working tree but is not currently tracked by Git" },
      { id: "C", text: "A file stored on GitHub" },
      { id: "D", text: "A file that has already been committed" }
    ],
    correctOptionId: "B",
    explanation: "An untracked file exists in the working directory but has not yet been added to Git's tracked files.",
    tags: ["untracked-files", "git-status"]
  },

  {
    id: "git-fundamentals-q-038",
    quizId: "quiz_git_fundamentals",
    order: 38,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when you stage a newly created file with `git add`?",
    options: [
      { id: "A", text: "Git permanently commits it" },
      { id: "B", text: "The file becomes eligible to be included in the next commit" },
      { id: "C", text: "The file is uploaded to GitHub" },
      { id: "D", text: "The file becomes read-only" }
    ],
    correctOptionId: "B",
    explanation: "Staging prepares the new file for the next commit; it is not committed or uploaded until later steps occur.",
    tags: ["staging", "untracked-files"]
  },

  {
    id: "git-fundamentals-q-039",
    quizId: "quiz_git_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git log --oneline --decorate` help you see?",
    options: [
      { id: "A", text: "Only untracked files" },
      { id: "B", text: "Only the contents of the working directory" },
      { id: "C", text: "A concise commit history with reference decorations such as branch names" },
      { id: "D", text: "Only Git configuration values" }
    ],
    correctOptionId: "C",
    explanation: "The command provides compact commit history while decorating commits with references such as branch or tag names.",
    tags: ["git-log", "history", "branches"]
  },

  {
    id: "git-fundamentals-q-040",
    quizId: "quiz_git_fundamentals",
    order: 40,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of `git diff` in a basic workflow?",
    options: [
      { id: "A", text: "To inspect differences between file states" },
      { id: "B", text: "To create a repository" },
      { id: "C", text: "To create a commit" },
      { id: "D", text: "To connect automatically to GitHub" }
    ],
    correctOptionId: "A",
    explanation: "`git diff` helps developers inspect what changed between different Git states.",
    tags: ["git-diff", "changes"]
  },

  {
    id: "git-fundamentals-q-041",
    quizId: "quiz_git_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command would you normally run after finishing a small change and before committing it?",
    options: [
      { id: "A", text: "git shutdown" },
      { id: "B", text: "git add" },
      { id: "C", text: "git destroy" },
      { id: "D", text: "git repository" }
    ],
    correctOptionId: "B",
    explanation: "After making a change, you normally use `git add` to stage the desired changes before committing.",
    tags: ["git-add", "workflow"]
  },

  {
    id: "git-fundamentals-q-042",
    quizId: "quiz_git_fundamentals",
    order: 42,
    type: "mcq",
    difficulty: "Beginner",
    question: "Suppose you run `git add app.js` but not `git commit`. What is true?",
    options: [
      { id: "A", text: "The changes are staged but not committed" },
      { id: "B", text: "The changes are already part of repository history" },
      { id: "C", text: "The changes have been pushed to GitHub" },
      { id: "D", text: "The changes have been deleted" }
    ],
    correctOptionId: "A",
    explanation: "Staging and committing are separate operations. The changes remain in the staging area until a commit records them.",
    tags: ["staging", "commits"]
  },

  {
    id: "git-fundamentals-q-043",
    quizId: "quiz_git_fundamentals",
    order: 43,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about `git commit` is correct?",
    options: [
      { id: "A", text: "It always uploads commits to GitHub" },
      { id: "B", text: "It records the currently staged snapshot in the local repository history" },
      { id: "C", text: "It stages every untracked file automatically" },
      { id: "D", text: "It deletes the staging area" }
    ],
    correctOptionId: "B",
    explanation: "A commit records the contents currently staged in the local repository. Uploading to a remote is a separate operation.",
    tags: ["git-commit", "local-repository"]
  },

  {
    id: "git-fundamentals-q-044",
    quizId: "quiz_git_fundamentals",
    order: 44,
    type: "mcq",
    difficulty: "Beginner",
    question: "A developer runs `git status` and sees both 'Changes to be committed' and 'Changes not staged for commit'. What does this mean?",
    options: [
      { id: "A", text: "The repository is corrupted" },
      { id: "B", text: "There are staged changes and separate unstaged changes" },
      { id: "C", text: "All changes have already been committed" },
      { id: "D", text: "The remote repository is unavailable" }
    ],
    correctOptionId: "B",
    explanation: "Git can have one version of a file staged while additional edits remain unstaged in the working tree.",
    tags: ["git-status", "staging", "working-tree"]
  },

  {
    id: "git-fundamentals-q-045",
    quizId: "quiz_git_fundamentals",
    order: 45,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command is most appropriate for reviewing recent repository history?",
    options: [
      { id: "A", text: "git log" },
      { id: "B", text: "git init" },
      { id: "C", text: "git add" },
      { id: "D", text: "git status --history" }
    ],
    correctOptionId: "A",
    explanation: "`git log` is the standard Git command for inspecting commit history.",
    tags: ["git-log", "history"]
  },

  {
    id: "git-fundamentals-q-046",
    quizId: "quiz_git_fundamentals",
    order: 46,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which sequence correctly creates a repository and records the first version of a project?",
    options: [
      { id: "A", text: "git commit → git init → git add" },
      { id: "B", text: "git push → git add → git init" },
      { id: "C", text: "git init → git add → git commit" },
      { id: "D", text: "git status → git push → git commit" }
    ],
    correctOptionId: "C",
    explanation: "A basic first-time workflow is to initialize the repository, stage the files, and then create the initial commit.",
    tags: ["git-init", "git-add", "git-commit", "workflow"]
  },

  {
    id: "git-fundamentals-q-047",
    quizId: "quiz_git_fundamentals",
    order: 47,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command is useful for seeing which files have been changed since the last commit?",
    options: [
      { id: "A", text: "git status" },
      { id: "B", text: "git init" },
      { id: "C", text: "git commit" },
      { id: "D", text: "git repository" }
    ],
    correctOptionId: "A",
    explanation: "`git status` provides a high-level view of modified, staged, deleted, and untracked files.",
    tags: ["git-status", "changes"]
  },

  {
    id: "git-fundamentals-q-048",
    quizId: "quiz_git_fundamentals",
    order: 48,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does Git allow you to do with project history?",
    options: [
      { id: "A", text: "Only view the latest file" },
      { id: "B", text: "Track versions and inspect previous commits" },
      { id: "C", text: "Only upload files" },
      { id: "D", text: "Only rename directories" }
    ],
    correctOptionId: "B",
    explanation: "Git maintains a history of commits, allowing developers to inspect how the project evolved over time.",
    tags: ["history", "commits", "version-control"]
  },

  {
    id: "git-fundamentals-q-049",
    quizId: "quiz_git_fundamentals",
    order: 49,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is it useful to stage changes selectively instead of always committing every modification?",
    options: [
      { id: "A", text: "It allows commits to contain focused, logically related changes" },
      { id: "B", text: "It makes Git stop tracking files" },
      { id: "C", text: "It automatically creates remote repositories" },
      { id: "D", text: "It prevents developers from creating branches" }
    ],
    correctOptionId: "A",
    explanation: "Selective staging lets developers create focused commits that are easier to understand, review, and maintain.",
    tags: ["staging", "commits", "best-practices"]
  },

  {
    id: "git-fundamentals-q-050",
    quizId: "quiz_git_fundamentals",
    order: 50,
    type: "mcq",
    difficulty: "Beginner",
    question: "A developer wants to check their changes, stage the intended files, create a commit, and then inspect the resulting history. Which sequence makes the most sense?",
    options: [
      { id: "A", text: "git log → git commit → git add → git status" },
      { id: "B", text: "git push → git init → git log → git add" },
      { id: "C", text: "git status → git add → git commit → git log" },
      { id: "D", text: "git init → git push → git status → git commit" }
    ],
    correctOptionId: "C",
    explanation: "A sensible workflow is to inspect the current state, stage the intended changes, commit them, and then inspect the updated history.",
    tags: ["git-status", "git-add", "git-commit", "git-log", "workflow"]
  }
];

export default gitFundamentalsQuestions;