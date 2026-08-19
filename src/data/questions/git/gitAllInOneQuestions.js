const gitAllInOneQuestions = [
  {
    id: "git-all-in-one-q-001",
    quizId: "quiz_git_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does Git primarily do?",
    options: [
      { id: "A", text: "Host websites online" },
      { id: "B", text: "Manage and track changes to files over time" },
      { id: "C", text: "Compile JavaScript into machine code" },
      { id: "D", text: "Create databases" }
    ],
    correctOptionId: "B",
    explanation: "Git is a distributed version control system used to track changes, create branches, and collaborate on code.",
    tags: ["git", "version-control"]
  },

  {
    id: "git-all-in-one-q-002",
    quizId: "quiz_git_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command initializes a new Git repository?",
    options: [
      { id: "A", text: "git start" },
      { id: "B", text: "git create" },
      { id: "C", text: "git init" },
      { id: "D", text: "git repo" }
    ],
    correctOptionId: "C",
    explanation: "git init creates a new .git directory and initializes the current directory as a Git repository.",
    tags: ["git-init", "repository"]
  },

  {
    id: "git-all-in-one-q-003",
    quizId: "quiz_git_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the staging area?",
    options: [
      { id: "A", text: "To select changes that will be included in the next commit" },
      { id: "B", text: "To permanently store every file" },
      { id: "C", text: "To upload code to GitHub" },
      { id: "D", text: "To delete untracked files" }
    ],
    correctOptionId: "A",
    explanation: "The staging area lets you prepare specific changes before creating a commit.",
    tags: ["staging", "git-add", "workflow"]
  },

  {
    id: "git-all-in-one-q-004",
    quizId: "quiz_git_all_in_one",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What does `git status` show?",
    options: [
      { id: "A", text: "Only commits that exist on GitHub" },
      { id: "B", text: "The current branch and the state of tracked, staged, and untracked files" },
      { id: "C", text: "Only deleted files" },
      { id: "D", text: "The contents of the Git database" }
    ],
    correctOptionId: "B",
    explanation: "git status provides a snapshot of the working tree and staging area, including staged, unstaged, and untracked changes.",
    tags: ["git-status", "workflow"]
  },

  {
    id: "git-all-in-one-q-005",
    quizId: "quiz_git_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command stages a specific file?",
    options: [
      { id: "A", text: "git commit file.js" },
      { id: "B", text: "git stage file.js" },
      { id: "C", text: "git push file.js" },
      { id: "D", text: "git add file.js" }
    ],
    correctOptionId: "D",
    explanation: "git add places changes for the specified file into the staging area.",
    tags: ["git-add", "staging"]
  },

  {
    id: "git-all-in-one-q-006",
    quizId: "quiz_git_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command creates a commit?",
    options: [
      { id: "A", text: "git save" },
      { id: "B", text: "git commit" },
      { id: "C", text: "git snapshot" },
      { id: "D", text: "git record" }
    ],
    correctOptionId: "B",
    explanation: "git commit records the staged changes as a new commit in the repository history.",
    tags: ["git-commit", "history"]
  },

  {
    id: "git-all-in-one-q-007",
    quizId: "quiz_git_all_in_one",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What does this command do?\n\ngit commit -m \"Fix login bug\"",
    options: [
      { id: "A", text: "Creates a commit with the specified message" },
      { id: "B", text: "Pushes the commit to GitHub" },
      { id: "C", text: "Creates a new branch" },
      { id: "D", text: "Deletes the login files" }
    ],
    correctOptionId: "A",
    explanation: "The -m flag supplies the commit message directly on the command line.",
    tags: ["git-commit", "commit-message"]
  },

  {
    id: "git-all-in-one-q-008",
    quizId: "quiz_git_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a Git commit represent?",
    options: [
      { id: "A", text: "A remote GitHub repository" },
      { id: "B", text: "A saved snapshot of staged changes in repository history" },
      { id: "C", text: "A temporary editor file" },
      { id: "D", text: "A branch that has been merged" }
    ],
    correctOptionId: "B",
    explanation: "A commit records a snapshot of the repository state based on what was staged.",
    tags: ["commits", "history"]
  },

  {
    id: "git-all-in-one-q-009",
    quizId: "quiz_git_all_in_one",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command displays commit history?",
    options: [
      { id: "A", text: "git history" },
      { id: "B", text: "git commits" },
      { id: "C", text: "git log" },
      { id: "D", text: "git timeline" }
    ],
    correctOptionId: "C",
    explanation: "git log displays the commit history of the current repository.",
    tags: ["git-log", "history"]
  },

  {
    id: "git-all-in-one-q-010",
    quizId: "quiz_git_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a Git branch?",
    options: [
      { id: "A", text: "A separate line of development represented by a movable reference to commits" },
      { id: "B", text: "A copy of the entire Git installation" },
      { id: "C", text: "A GitHub organization" },
      { id: "D", text: "A compressed repository backup" }
    ],
    correctOptionId: "A",
    explanation: "A branch is a lightweight reference to a commit that provides an independent line of development.",
    tags: ["branches", "git-branch"]
  },

  {
    id: "git-all-in-one-q-011",
    quizId: "quiz_git_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command creates a new branch named feature-login?",
    options: [
      { id: "A", text: "git new feature-login" },
      { id: "B", text: "git branch feature-login" },
      { id: "C", text: "git create-branch feature-login" },
      { id: "D", text: "git checkout-new feature-login" }
    ],
    correctOptionId: "B",
    explanation: "git branch feature-login creates the branch but does not switch to it.",
    tags: ["branches", "git-branch"]
  },

  {
    id: "git-all-in-one-q-012",
    quizId: "quiz_git_all_in_one",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command creates and switches to a new branch in one step?",
    options: [
      { id: "A", text: "git branch --switch feature" },
      { id: "B", text: "git checkout feature" },
      { id: "C", text: "git switch -c feature" },
      { id: "D", text: "git branch feature --new" }
    ],
    correctOptionId: "C",
    explanation: "git switch -c creates a new branch and switches HEAD to it.",
    tags: ["git-switch", "branches"]
  },

  {
    id: "git-all-in-one-q-013",
    quizId: "quiz_git_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does merging a branch generally do?",
    options: [
      { id: "A", text: "Deletes all commits from the branch" },
      { id: "B", text: "Combines the changes from one line of development into another" },
      { id: "C", text: "Uploads the branch to GitHub automatically" },
      { id: "D", text: "Converts the branch into a tag" }
    ],
    correctOptionId: "B",
    explanation: "A merge incorporates the history and changes of one branch into another.",
    tags: ["merge", "branches"]
  },

  {
    id: "git-all-in-one-q-014",
    quizId: "quiz_git_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a fast-forward merge?",
    options: [
      { id: "A", text: "A merge where Git creates two new branches" },
      { id: "B", text: "A merge that always creates a merge commit" },
      { id: "C", text: "A merge where the target branch reference simply moves forward because no divergent history exists" },
      { id: "D", text: "A merge performed only on GitHub" }
    ],
    correctOptionId: "C",
    explanation: "If the target branch is an ancestor of the branch being merged, Git can move the target reference forward without creating a merge commit.",
    tags: ["fast-forward", "merge"]
  },

  {
    id: "git-all-in-one-q-015",
    quizId: "quiz_git_all_in_one",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a three-way merge?",
    options: [
      { id: "A", text: "A merge based on the two branch tips and their common ancestor" },
      { id: "B", text: "A merge involving exactly three developers" },
      { id: "C", text: "A merge between three repositories" },
      { id: "D", text: "A merge performed three times" }
    ],
    correctOptionId: "A",
    explanation: "Git can use the tips of the two branches and their merge base/common ancestor to combine divergent histories.",
    tags: ["three-way-merge", "merge"]
  },

  {
    id: "git-all-in-one-q-016",
    quizId: "quiz_git_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git clone` do?",
    options: [
      { id: "A", text: "Creates a local copy of an existing repository, including its Git history" },
      { id: "B", text: "Creates a new empty repository without history" },
      { id: "C", text: "Only downloads the latest file" },
      { id: "D", text: "Deletes the remote repository" }
    ],
    correctOptionId: "A",
    explanation: "git clone creates a local repository based on an existing repository and configures the remote origin by default.",
    tags: ["git-clone", "remote"]
  },

  {
    id: "git-all-in-one-q-017",
    quizId: "quiz_git_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Git remote?",
    options: [
      { id: "A", text: "A special type of commit" },
      { id: "B", text: "A named reference to another repository" },
      { id: "C", text: "A branch that cannot be edited" },
      { id: "D", text: "A local backup directory" }
    ],
    correctOptionId: "B",
    explanation: "A remote is a named reference to another repository, commonly a repository hosted on GitHub.",
    tags: ["remotes", "origin"]
  },

  {
    id: "git-all-in-one-q-018",
    quizId: "quiz_git_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the remote name `origin` usually refer to?",
    options: [
      { id: "A", text: "The default remote created when cloning a repository" },
      { id: "B", text: "The main Git branch" },
      { id: "C", text: "The first commit" },
      { id: "D", text: "A GitHub issue" }
    ],
    correctOptionId: "A",
    explanation: "origin is the conventional default name Git assigns to the remote repository when cloning.",
    tags: ["origin", "remotes"]
  },

  {
    id: "git-all-in-one-q-019",
    quizId: "quiz_git_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git fetch` do?",
    options: [
      { id: "A", text: "Downloads changes from a remote without automatically merging them into the current branch" },
      { id: "B", text: "Deletes remote branches" },
      { id: "C", text: "Creates a pull request" },
      { id: "D", text: "Commits local changes" }
    ],
    correctOptionId: "A",
    explanation: "git fetch updates remote-tracking references with changes from the remote while leaving your current branch unchanged.",
    tags: ["git-fetch", "remotes"]
  },

  {
    id: "git-all-in-one-q-020",
    quizId: "quiz_git_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git pull` generally do?",
    options: [
      { id: "A", text: "Deletes local changes" },
      { id: "B", text: "Fetches changes from a remote and integrates them into the current branch" },
      { id: "C", text: "Only displays remote branches" },
      { id: "D", text: "Creates a GitHub repository" }
    ],
    correctOptionId: "B",
    explanation: "git pull generally performs a fetch followed by an integration step such as merge or rebase, depending on configuration and options.",
    tags: ["git-pull", "fetch", "merge"]
  },

  {
    id: "git-all-in-one-q-021",
    quizId: "quiz_git_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git push` do?",
    options: [
      { id: "A", text: "Transfers local commits to a remote repository" },
      { id: "B", text: "Downloads commits from GitHub" },
      { id: "C", text: "Creates a local commit" },
      { id: "D", text: "Stages files" }
    ],
    correctOptionId: "A",
    explanation: "git push sends local commits and related references to a configured remote repository.",
    tags: ["git-push", "remotes"]
  },

  {
    id: "git-all-in-one-q-022",
    quizId: "quiz_git_all_in_one",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this command commonly accomplish?\n\ngit push -u origin feature-login",
    options: [
      { id: "A", text: "Deletes feature-login from origin" },
      { id: "B", text: "Pushes feature-login and sets origin/feature-login as its upstream" },
      { id: "C", text: "Merges feature-login into main locally" },
      { id: "D", text: "Downloads feature-login from origin" }
    ],
    correctOptionId: "B",
    explanation: "The -u option sets the upstream tracking relationship for the pushed branch.",
    tags: ["git-push", "upstream", "branches"]
  },

  {
    id: "git-all-in-one-q-023",
    quizId: "quiz_git_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a GitHub pull request?",
    options: [
      { id: "A", text: "A request to download a repository" },
      { id: "B", text: "A mechanism for proposing and reviewing changes before integrating them into another branch" },
      { id: "C", text: "A replacement for git pull" },
      { id: "D", text: "A Git commit stored locally" }
    ],
    correctOptionId: "B",
    explanation: "A pull request is a collaboration mechanism on GitHub for discussing, reviewing, testing, and eventually integrating changes.",
    tags: ["github", "pull-request", "code-review"]
  },

  {
    id: "git-all-in-one-q-024",
    quizId: "quiz_git_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a fork on GitHub?",
    options: [
      { id: "A", text: "A local Git branch" },
      { id: "B", text: "A server-side copy of a repository under another account or organization" },
      { id: "C", text: "A Git commit" },
      { id: "D", text: "A merge conflict" }
    ],
    correctOptionId: "B",
    explanation: "A fork is a GitHub-hosted copy of a repository in another user's or organization's namespace.",
    tags: ["github", "fork"]
  },

  {
    id: "git-all-in-one-q-025",
    quizId: "quiz_git_all_in_one",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the typical workflow when contributing to an open-source repository you cannot directly push to?",
    options: [
      { id: "A", text: "Fork → clone → create branch → make changes → push → open pull request" },
      { id: "B", text: "Clone → delete repository → push directly" },
      { id: "C", text: "Fork → force-push to the original repository" },
      { id: "D", text: "Create an issue → commit to GitHub's database directly" }
    ],
    correctOptionId: "A",
    explanation: "Forking provides your own remote copy, allowing you to push changes and then propose them to the original repository through a pull request.",
    tags: ["fork", "pull-request", "open-source"]
  },

  {
    id: "git-all-in-one-q-026",
    quizId: "quiz_git_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a merge conflict?",
    options: [
      { id: "A", text: "A GitHub account error" },
      { id: "B", text: "A situation where Git cannot automatically reconcile competing changes" },
      { id: "C", text: "A failed push caused by slow internet" },
      { id: "D", text: "A branch with no commits" }
    ],
    correctOptionId: "B",
    explanation: "A conflict occurs when Git needs human input to determine how competing changes should be combined.",
    tags: ["merge-conflicts", "merge"]
  },

  {
    id: "git-all-in-one-q-027",
    quizId: "quiz_git_all_in_one",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "After manually resolving a merge conflict, what should you normally do before completing the merge?",
    options: [
      { id: "A", text: "Run git init again" },
      { id: "B", text: "Delete the .git directory" },
      { id: "C", text: "Stage the resolved files" },
      { id: "D", text: "Clone the repository again" }
    ],
    correctOptionId: "C",
    explanation: "Once conflicts are resolved, the corrected files need to be staged so Git knows those conflicts have been resolved.",
    tags: ["conflicts", "git-add", "merge"]
  },

  {
    id: "git-all-in-one-q-028",
    quizId: "quiz_git_all_in_one",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git diff` primarily show?",
    options: [
      { id: "A", text: "Differences between versions or states of files" },
      { id: "B", text: "Only GitHub pull requests" },
      { id: "C", text: "Only branch names" },
      { id: "D", text: "Only commit messages" }
    ],
    correctOptionId: "A",
    explanation: "git diff compares file states and shows line-level changes depending on the references or default state being compared.",
    tags: ["git-diff", "changes"]
  },

  {
    id: "git-all-in-one-q-029",
    quizId: "quiz_git_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between the working tree and staging area?",
    options: [
      { id: "A", text: "They are always identical" },
      { id: "B", text: "The working tree contains your current file changes, while the staging area contains changes selected for the next commit" },
      { id: "C", text: "The working tree exists only on GitHub" },
      { id: "D", text: "The staging area contains only remote commits" }
    ],
    correctOptionId: "B",
    explanation: "Git separates the files you're currently editing from the exact changes you've selected to include in the next commit.",
    tags: ["working-tree", "staging"]
  },

  {
    id: "git-all-in-one-q-030",
    quizId: "quiz_git_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git stash` allow you to do?",
    options: [
      { id: "A", text: "Temporarily save uncommitted changes so you can switch contexts" },
      { id: "B", text: "Permanently delete all commits" },
      { id: "C", text: "Push changes to GitHub" },
      { id: "D", text: "Merge every branch" }
    ],
    correctOptionId: "A",
    explanation: "Stashing temporarily stores changes that are not ready for a commit, allowing you to work on a clean working tree.",
    tags: ["git-stash", "workflow"]
  },

  {
    id: "git-all-in-one-q-031",
    quizId: "quiz_git_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command restores the most recently stashed changes?",
    options: [
      { id: "A", text: "git stash recover" },
      { id: "B", text: "git stash load" },
      { id: "C", text: "git stash pop" },
      { id: "D", text: "git stash restore-all" }
    ],
    correctOptionId: "C",
    explanation: "git stash pop applies the most recent stash and removes it from the stash list if the operation succeeds.",
    tags: ["git-stash", "stash-pop"]
  },

  {
    id: "git-all-in-one-q-032",
    quizId: "quiz_git_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the key difference between `git stash pop` and `git stash apply`?",
    options: [
      { id: "A", text: "pop applies the stash and removes it; apply applies it while keeping the stash" },
      { id: "B", text: "apply deletes the stash while pop keeps it" },
      { id: "C", text: "They always behave identically" },
      { id: "D", text: "pop only works with remote branches" }
    ],
    correctOptionId: "A",
    explanation: "Both apply the stash, but pop also removes the stash entry after successful application.",
    tags: ["git-stash", "stash-pop", "stash-apply"]
  },

  {
    id: "git-all-in-one-q-033",
    quizId: "quiz_git_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `git reset` generally allow you to do?",
    options: [
      { id: "A", text: "Move a branch reference and optionally modify the staging area and working tree" },
      { id: "B", text: "Create a GitHub pull request" },
      { id: "C", text: "Download remote commits" },
      { id: "D", text: "Create a new repository on GitHub" }
    ],
    correctOptionId: "A",
    explanation: "git reset can move HEAD/branch references and, depending on the mode, alter the index and working tree.",
    tags: ["git-reset", "history"]
  },

  {
    id: "git-all-in-one-q-034",
    quizId: "quiz_git_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the major difference between `git reset` and `git revert`?",
    options: [
      { id: "A", text: "reset creates a new commit while revert deletes history" },
      { id: "B", text: "revert creates a new commit that reverses changes, while reset moves references and can rewrite local history" },
      { id: "C", text: "They are exactly the same" },
      { id: "D", text: "reset only works with GitHub" }
    ],
    correctOptionId: "B",
    explanation: "git revert preserves existing history by adding a new inverse commit, while reset can move a branch reference to another commit.",
    tags: ["git-reset", "git-revert", "history"]
  },

  {
    id: "git-all-in-one-q-035",
    quizId: "quiz_git_all_in_one",
    order: 35,
    type: "code",
    difficulty: "Advanced",
    question: "Which reset mode moves HEAD but keeps changes staged?",
    options: [
      { id: "A", text: "git reset --hard" },
      { id: "B", text: "git reset --soft" },
      { id: "C", text: "git reset --clean" },
      { id: "D", text: "git reset --remote" }
    ],
    correctOptionId: "B",
    explanation: "A soft reset moves HEAD while leaving the index and working tree unchanged, so changes remain staged.",
    tags: ["git-reset", "soft-reset"]
  },

  {
    id: "git-all-in-one-q-036",
    quizId: "quiz_git_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should `git reset --hard` be used carefully?",
    options: [
      { id: "A", text: "It can discard working-tree changes that are not otherwise saved" },
      { id: "B", text: "It always deletes the remote repository" },
      { id: "C", text: "It creates hundreds of commits" },
      { id: "D", text: "It disables Git permanently" }
    ],
    correctOptionId: "A",
    explanation: "A hard reset updates HEAD, the index, and working tree to the target commit, potentially destroying uncommitted changes.",
    tags: ["git-reset", "hard-reset", "data-loss"]
  },

  {
    id: "git-all-in-one-q-037",
    quizId: "quiz_git_all_in_one",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `git revert <commit>` do?",
    options: [
      { id: "A", text: "Deletes the specified commit from all history" },
      { id: "B", text: "Creates a new commit that reverses the changes introduced by the specified commit" },
      { id: "C", text: "Moves the branch pointer without creating a commit" },
      { id: "D", text: "Deletes the remote branch" }
    ],
    correctOptionId: "B",
    explanation: "Revert is designed to undo a commit while preserving the existing history by creating a new commit.",
    tags: ["git-revert", "history"]
  },

  {
    id: "git-all-in-one-q-038",
    quizId: "quiz_git_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `git cherry-pick` do?",
    options: [
      { id: "A", text: "Copies the changes introduced by selected commits onto the current branch by creating new commits" },
      { id: "B", text: "Deletes selected commits" },
      { id: "C", text: "Merges every branch automatically" },
      { id: "D", text: "Creates a GitHub fork" }
    ],
    correctOptionId: "A",
    explanation: "Cherry-picking applies the changes introduced by specific commits onto another branch.",
    tags: ["cherry-pick", "advanced-git"]
  },

  {
    id: "git-all-in-one-q-039",
    quizId: "quiz_git_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "When might cherry-picking be useful?",
    options: [
      { id: "A", text: "When you need a specific commit's change on another branch without merging the entire branch" },
      { id: "B", text: "When you want to initialize a repository" },
      { id: "C", text: "When you need to remove Git completely" },
      { id: "D", text: "When creating a CSS file" }
    ],
    correctOptionId: "A",
    explanation: "Cherry-pick is useful when a particular fix or change should be brought into another branch independently of the rest of the source branch.",
    tags: ["cherry-pick", "workflow"]
  },

  {
    id: "git-all-in-one-q-040",
    quizId: "quiz_git_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does rebasing generally do?",
    options: [
      { id: "A", text: "Moves or reapplies commits onto a new base commit" },
      { id: "B", text: "Creates a GitHub organization" },
      { id: "C", text: "Deletes all branches" },
      { id: "D", text: "Converts Git into SVN" }
    ],
    correctOptionId: "A",
    explanation: "Rebase replays commits from one line of development on top of another base, often producing a more linear history.",
    tags: ["rebase", "history"]
  },

  {
    id: "git-all-in-one-q-041",
    quizId: "quiz_git_all_in_one",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should you generally avoid rebasing commits that other developers have already based work on?",
    options: [
      { id: "A", text: "Rebase can rewrite commit identities, causing synchronization problems for collaborators" },
      { id: "B", text: "Rebase permanently disables Git" },
      { id: "C", text: "Rebase only works locally" },
      { id: "D", text: "Rebase automatically deletes GitHub" }
    ],
    correctOptionId: "A",
    explanation: "Rewriting shared history can cause collaborators to have divergent histories and require complicated recovery.",
    tags: ["rebase", "shared-history", "collaboration"]
  },

  {
    id: "git-all-in-one-q-042",
    quizId: "quiz_git_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `git reflog` help you inspect?",
    options: [
      { id: "A", text: "The history of reference movements such as HEAD and branch updates in the local repository" },
      { id: "B", text: "Only GitHub pull requests" },
      { id: "C", text: "Only remote repository names" },
      { id: "D", text: "Only untracked files" }
    ],
    correctOptionId: "A",
    explanation: "The reflog records local movements of references, which can be extremely useful for recovering commits after resets or rebases.",
    tags: ["reflog", "recovery", "advanced-git"]
  },

  {
    id: "git-all-in-one-q-043",
    quizId: "quiz_git_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of a .gitignore file?",
    options: [
      { id: "A", text: "Tell Git which untracked files or patterns should be ignored" },
      { id: "B", text: "Delete files from the filesystem" },
      { id: "C", text: "Hide commits from GitHub" },
      { id: "D", text: "Prevent all branch creation" }
    ],
    correctOptionId: "A",
    explanation: ".gitignore defines patterns for files that Git should not normally report as untracked.",
    tags: ["gitignore", "workflow"]
  },

  {
    id: "git-all-in-one-q-044",
    quizId: "quiz_git_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should .env files containing secrets generally be included in .gitignore?",
    options: [
      { id: "A", text: "To reduce the chance of accidentally committing sensitive credentials to the repository" },
      { id: "B", text: "Because Git cannot store text files" },
      { id: "C", text: "Because GitHub cannot display environment files" },
      { id: "D", text: "Because .env files automatically break Git" }
    ],
    correctOptionId: "A",
    explanation: "Secrets such as API keys and passwords should not normally be committed to source control.",
    tags: ["gitignore", "security", "environment-variables"]
  },

  {
    id: "git-all-in-one-q-045",
    quizId: "quiz_git_all_in_one",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Git tag commonly used for?",
    options: [
      { id: "A", text: "Marking a specific point in repository history, such as a release" },
      { id: "B", text: "Creating a temporary working directory" },
      { id: "C", text: "Staging files" },
      { id: "D", text: "Resolving merge conflicts automatically" }
    ],
    correctOptionId: "A",
    explanation: "Tags are commonly used to mark important commits, especially release versions such as v1.0.0.",
    tags: ["tags", "releases"]
  },

  {
    id: "git-all-in-one-q-046",
    quizId: "quiz_git_all_in_one",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is GitHub Actions primarily used for?",
    options: [
      { id: "A", text: "Automating workflows such as testing, building, and deployment" },
      { id: "B", text: "Replacing Git branches" },
      { id: "C", text: "Editing source files directly in Node.js" },
      { id: "D", text: "Creating local Git commits automatically without configuration" }
    ],
    correctOptionId: "A",
    explanation: "GitHub Actions provides automation workflows that can run in response to events such as pushes and pull requests.",
    tags: ["github-actions", "ci-cd", "automation"]
  },

  {
    id: "git-all-in-one-q-047",
    quizId: "quiz_git_all_in_one",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is continuous integration (CI) in a GitHub workflow?",
    options: [
      { id: "A", text: "Automatically building and testing changes as they are integrated into the project" },
      { id: "B", text: "Manually copying files between computers" },
      { id: "C", text: "Creating a new Git branch every hour" },
      { id: "D", text: "Uploading screenshots to GitHub" }
    ],
    correctOptionId: "A",
    explanation: "CI automates validation of changes, commonly through builds, tests, linting, and other checks.",
    tags: ["ci", "github-actions", "testing"]
  },

  {
    id: "git-all-in-one-q-048",
    quizId: "quiz_git_all_in_one",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer accidentally committed a secret API key, then deletes it in a later commit. Is the secret necessarily safe?",
    options: [
      { id: "A", text: "Yes, because Git only stores the latest version" },
      { id: "B", text: "Yes, because deleting the file removes its Git history" },
      { id: "C", text: "No. The secret may still exist in repository history and should be considered exposed" },
      { id: "D", text: "Yes, if the repository is public" }
    ],
    correctOptionId: "C",
    explanation: "Git preserves historical commits. Removing a secret in a later commit does not automatically remove it from earlier history, so exposed credentials should be revoked or rotated.",
    tags: ["security", "history", "secrets"]
  },

  {
    id: "git-all-in-one-q-049",
    quizId: "quiz_git_all_in_one",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which workflow is generally safest when collaborating on a feature in a shared repository?",
    options: [
      { id: "A", text: "Develop directly on main and force-push whenever conflicts occur" },
      { id: "B", text: "Create a feature branch, commit focused changes, push it, open a pull request, review/test it, then merge" },
      { id: "C", text: "Delete main after every feature" },
      { id: "D", text: "Commit secrets first and remove them later" }
    ],
    correctOptionId: "B",
    explanation: "Feature branches and pull requests provide isolation, review, automated checks, and controlled integration.",
    tags: ["workflow", "branches", "pull-request", "collaboration"]
  },

  {
    id: "git-all-in-one-q-050",
    quizId: "quiz_git_all_in_one",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production branch contains an accidental bug introduced by commit A. The commit is already pushed and other developers have based work on it. What is generally the safest way to undo the change without rewriting shared history?",
    options: [
      { id: "A", text: "git reset --hard A^ followed by a force push" },
      { id: "B", text: "Delete the production branch and recreate it" },
      { id: "C", text: "git revert A and push the resulting commit" },
      { id: "D", text: "git rebase -i and delete A from history, then force push" }
    ],
    correctOptionId: "C",
    explanation: "Because the commit is already part of shared history, git revert is generally safer. It creates a new commit that reverses A without rewriting the existing shared history.",
    tags: ["git-revert", "shared-history", "production", "best-practices"]
  }
];

export default gitAllInOneQuestions;