const gitRemoteCollaborationQuestions = [
  {
    id: "git-remote-collaboration-q-001",
    quizId: "quiz_git_remote_collaboration",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a Git remote?",
    options: [
      { id: "A", text: "A commit stored in the staging area" },
      { id: "B", text: "A reference to another repository used for exchanging Git data" },
      { id: "C", text: "A special type of local branch" },
      { id: "D", text: "A Git configuration file" }
    ],
    correctOptionId: "B",
    explanation: "A remote represents another repository, commonly hosted on a service such as GitHub, that your local repository can fetch from or push to.",
    tags: ["remote", "git-basics"]
  },

  {
    id: "git-remote-collaboration-q-002",
    quizId: "quiz_git_remote_collaboration",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which remote name is commonly created automatically when cloning a repository?",
    options: [
      { id: "A", text: "origin" },
      { id: "B", text: "main" },
      { id: "C", text: "remote" },
      { id: "D", text: "github" }
    ],
    correctOptionId: "A",
    explanation: "When a repository is cloned, Git normally names the source remote `origin`.",
    tags: ["origin", "remote", "clone"]
  },

  {
    id: "git-remote-collaboration-q-003",
    quizId: "quiz_git_remote_collaboration",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command shows the configured remote repositories?",
    options: [
      { id: "A", text: "git remote" },
      { id: "B", text: "git repositories" },
      { id: "C", text: "git show-remotes-only" },
      { id: "D", text: "git server" }
    ],
    correctOptionId: "A",
    explanation: "`git remote` lists the names of configured remotes, such as `origin`.",
    tags: ["git-remote", "remotes"]
  },

  {
    id: "git-remote-collaboration-q-004",
    quizId: "quiz_git_remote_collaboration",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git remote -v` provide in addition to remote names?",
    options: [
      { id: "A", text: "The repository's commit history" },
      { id: "B", text: "The current branch's files" },
      { id: "C", text: "The fetch and push URLs for the remotes" },
      { id: "D", text: "The GitHub issue list" }
    ],
    correctOptionId: "C",
    explanation: "`git remote -v` displays each remote along with its fetch and push URLs.",
    tags: ["git-remote", "remote-url"]
  },

  {
    id: "git-remote-collaboration-q-005",
    quizId: "quiz_git_remote_collaboration",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command connects an existing local repository to a remote URL named `origin`?",
    options: [
      { id: "A", text: "git connect origin URL" },
      { id: "B", text: "git remote add origin URL" },
      { id: "C", text: "git origin add URL" },
      { id: "D", text: "git remote create origin URL" }
    ],
    correctOptionId: "B",
    explanation: "`git remote add origin URL` creates a remote named `origin` pointing to the specified repository URL.",
    tags: ["git-remote", "remote-add"]
  },

  {
    id: "git-remote-collaboration-q-006",
    quizId: "quiz_git_remote_collaboration",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git clone` generally do?",
    options: [
      { id: "A", text: "Deletes the remote repository after copying it" },
      { id: "B", text: "Creates a local copy of a repository and configures its source remote" },
      { id: "C", text: "Only downloads the latest file without Git history" },
      { id: "D", text: "Creates a GitHub pull request" }
    ],
    correctOptionId: "B",
    explanation: "Cloning creates a local Git repository containing the repository's history and normally configures the source repository as `origin`.",
    tags: ["clone", "remote"]
  },

  {
    id: "git-remote-collaboration-q-007",
    quizId: "quiz_git_remote_collaboration",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "After cloning a repository, what is usually already configured?",
    options: [
      { id: "A", text: "A remote named origin pointing to the cloned repository" },
      { id: "B", text: "A GitHub pull request" },
      { id: "C", text: "A second Git installation" },
      { id: "D", text: "An automatically merged feature branch" }
    ],
    correctOptionId: "A",
    explanation: "Git normally configures the repository that was cloned as the `origin` remote.",
    tags: ["clone", "origin"]
  },

  {
    id: "git-remote-collaboration-q-008",
    quizId: "quiz_git_remote_collaboration",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git push` generally do?",
    options: [
      { id: "A", text: "Copies commits from a remote repository into the working tree" },
      { id: "B", text: "Sends local commits to a remote repository" },
      { id: "C", text: "Creates a new local repository" },
      { id: "D", text: "Deletes all local commits" }
    ],
    correctOptionId: "B",
    explanation: "`git push` transfers commits and related Git objects from your local repository to a remote repository and updates the appropriate remote branch reference.",
    tags: ["push", "remote"]
  },

  {
    id: "git-remote-collaboration-q-009",
    quizId: "quiz_git_remote_collaboration",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `git fetch` do?",
    options: [
      { id: "A", text: "Downloads changes from a remote without merging them into your current branch" },
      { id: "B", text: "Automatically merges remote changes into main" },
      { id: "C", text: "Uploads local commits" },
      { id: "D", text: "Deletes remote-tracking branches" }
    ],
    correctOptionId: "A",
    explanation: "`git fetch` retrieves new commits and updates remote-tracking references without changing your current branch's working tree.",
    tags: ["fetch", "remote"]
  },

  {
    id: "git-remote-collaboration-q-010",
    quizId: "quiz_git_remote_collaboration",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the key difference between `git fetch` and `git pull`?",
    options: [
      { id: "A", text: "fetch downloads nothing, while pull uploads commits" },
      { id: "B", text: "fetch changes GitHub settings, while pull changes Git configuration" },
      { id: "C", text: "fetch retrieves remote changes without integrating them into the current branch, while pull also integrates them" },
      { id: "D", text: "There is no difference" }
    ],
    correctOptionId: "C",
    explanation: "`git fetch` retrieves remote updates without integrating them into the current branch. `git pull` typically performs a fetch followed by an integration step such as merge or rebase.",
    tags: ["fetch", "pull", "remote"]
  },

  {
    id: "git-remote-collaboration-q-011",
    quizId: "quiz_git_remote_collaboration",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command is commonly used to fetch changes from `origin` and integrate the tracked branch into the current branch?",
    options: [
      { id: "A", text: "git pull origin" },
      { id: "B", text: "git clone origin" },
      { id: "C", text: "git upload origin" },
      { id: "D", text: "git sync origin-only" }
    ],
    correctOptionId: "A",
    explanation: "`git pull origin` fetches from the `origin` remote and then integrates the fetched changes according to the configured pull behavior.",
    tags: ["pull", "origin"]
  },

  {
    id: "git-remote-collaboration-q-012",
    quizId: "quiz_git_remote_collaboration",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a remote-tracking branch such as `origin/main` represent?",
    options: [
      { id: "A", text: "The local main branch itself" },
      { id: "B", text: "A local reference to the last known state of main on origin" },
      { id: "C", text: "A GitHub issue named main" },
      { id: "D", text: "A branch that exists only inside GitHub and nowhere locally" }
    ],
    correctOptionId: "B",
    explanation: "`origin/main` is a local remote-tracking reference showing the state of the remote's main branch as last observed by your local repository.",
    tags: ["remote-tracking", "origin", "branches"]
  },

  {
    id: "git-remote-collaboration-q-013",
    quizId: "quiz_git_remote_collaboration",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "You run `git fetch origin`. Which statement is correct?",
    options: [
      { id: "A", text: "Your current branch is automatically rebased" },
      { id: "B", text: "Your local commits are deleted" },
      { id: "C", text: "Remote-tracking references may be updated with newly fetched commits" },
      { id: "D", text: "A pull request is automatically opened" }
    ],
    correctOptionId: "C",
    explanation: "Fetching retrieves objects from the remote and updates relevant remote-tracking references such as `origin/main`.",
    tags: ["fetch", "remote-tracking"]
  },

  {
    id: "git-remote-collaboration-q-014",
    quizId: "quiz_git_remote_collaboration",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a developer prefer `git fetch` before deciding how to integrate remote changes?",
    options: [
      { id: "A", text: "It lets them inspect remote updates before changing their current branch" },
      { id: "B", text: "It prevents all future conflicts" },
      { id: "C", text: "It permanently disables pulling" },
      { id: "D", text: "It deletes uncommitted changes automatically" }
    ],
    correctOptionId: "A",
    explanation: "Fetching separates retrieval from integration, allowing developers to inspect differences and choose an appropriate merge or rebase strategy.",
    tags: ["fetch", "workflow", "remote"]
  },

  {
    id: "git-remote-collaboration-q-015",
    quizId: "quiz_git_remote_collaboration",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command pushes the local `main` branch to the remote named `origin`?",
    options: [
      { id: "A", text: "git upload main origin" },
      { id: "B", text: "git push main origin" },
      { id: "C", text: "git push origin main" },
      { id: "D", text: "git send origin/main" }
    ],
    correctOptionId: "C",
    explanation: "The standard syntax is `git push <remote> <branch>`, so `git push origin main` pushes local main to origin's main branch.",
    tags: ["push", "origin", "branches"]
  },

  {
    id: "git-remote-collaboration-q-016",
    quizId: "quiz_git_remote_collaboration",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an upstream branch in Git?",
    options: [
      { id: "A", text: "A branch that contains only old commits" },
      { id: "B", text: "A remote-tracking branch associated with a local branch for operations such as pull and push" },
      { id: "C", text: "The first branch ever created" },
      { id: "D", text: "A branch that can never be deleted" }
    ],
    correctOptionId: "B",
    explanation: "A local branch can track an upstream branch, allowing Git to know the default remote branch for operations such as `git pull` and certain forms of `git push`.",
    tags: ["upstream", "tracking", "branches"]
  },

  {
    id: "git-remote-collaboration-q-017",
    quizId: "quiz_git_remote_collaboration",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git push -u origin feature` do when the local feature branch is being published for the first time?",
    options: [
      { id: "A", text: "Deletes the remote feature branch" },
      { id: "B", text: "Pushes feature and sets its upstream tracking relationship" },
      { id: "C", text: "Merges feature into origin/main" },
      { id: "D", text: "Creates a fork automatically" }
    ],
    correctOptionId: "B",
    explanation: "The `-u` option sets the upstream tracking relationship while pushing the branch to the specified remote.",
    tags: ["push", "upstream", "tracking"]
  },

  {
    id: "git-remote-collaboration-q-018",
    quizId: "quiz_git_remote_collaboration",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can a plain `git push` work after a branch's upstream has been configured?",
    options: [
      { id: "A", text: "Git knows which remote branch the local branch tracks" },
      { id: "B", text: "Git always pushes to every remote" },
      { id: "C", text: "GitHub automatically modifies your local Git configuration every time" },
      { id: "D", text: "Branches no longer need names" }
    ],
    correctOptionId: "A",
    explanation: "Once an upstream is configured, Git knows the default remote and branch associated with the current local branch.",
    tags: ["upstream", "push", "tracking"]
  },

  {
    id: "git-remote-collaboration-q-019",
    quizId: "quiz_git_remote_collaboration",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a fork on GitHub?",
    options: [
      { id: "A", text: "A temporary Git branch" },
      { id: "B", text: "A separate copy of a repository under another GitHub account or organization" },
      { id: "C", text: "A local commit created during merge" },
      { id: "D", text: "A special merge strategy" }
    ],
    correctOptionId: "B",
    explanation: "A GitHub fork creates a separate repository under another account or organization, commonly used when contributing to a project you do not directly control.",
    tags: ["github", "fork", "collaboration"]
  },

  {
    id: "git-remote-collaboration-q-020",
    quizId: "quiz_git_remote_collaboration",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a developer fork a public GitHub repository?",
    options: [
      { id: "A", text: "To create their own repository where they can develop changes without direct write access to the original" },
      { id: "B", text: "To erase the original repository's history" },
      { id: "C", text: "To convert Git into SVN" },
      { id: "D", text: "To prevent pull requests" }
    ],
    correctOptionId: "A",
    explanation: "Forks allow contributors to work in their own repository when they do not have direct write access to the upstream project.",
    tags: ["fork", "github", "collaboration"]
  },

  {
    id: "git-remote-collaboration-q-021",
    quizId: "quiz_git_remote_collaboration",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In a common fork-based workflow, what does `upstream` usually refer to?",
    options: [
      { id: "A", text: "The contributor's fork" },
      { id: "B", text: "The original repository from which the fork was created" },
      { id: "C", text: "The local staging area" },
      { id: "D", text: "The GitHub Actions runner" }
    ],
    correctOptionId: "B",
    explanation: "Many developers name the original project repository `upstream` and their personal fork `origin`, although these names are conventions rather than requirements.",
    tags: ["upstream", "fork", "github"]
  },

  {
    id: "git-remote-collaboration-q-022",
    quizId: "quiz_git_remote_collaboration",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of a GitHub pull request?",
    options: [
      { id: "A", text: "To request that changes from one branch or repository be reviewed and potentially integrated into another" },
      { id: "B", text: "To download Git itself" },
      { id: "C", text: "To create a local commit" },
      { id: "D", text: "To replace all branches with main" }
    ],
    correctOptionId: "A",
    explanation: "A pull request provides a collaboration and review mechanism for proposing changes before they are integrated into the target branch.",
    tags: ["pull-request", "github", "code-review"]
  },

  {
    id: "git-remote-collaboration-q-023",
    quizId: "quiz_git_remote_collaboration",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is typically reviewed during a pull request?",
    options: [
      { id: "A", text: "Only the repository name" },
      { id: "B", text: "The proposed changes, commits, discussion, and automated checks" },
      { id: "C", text: "Only the developer's Git installation" },
      { id: "D", text: "Only files unrelated to the change" }
    ],
    correctOptionId: "B",
    explanation: "Pull requests commonly provide a place to inspect the diff and commits, discuss implementation, and review automated checks.",
    tags: ["pull-request", "code-review", "github"]
  },

  {
    id: "git-remote-collaboration-q-024",
    quizId: "quiz_git_remote_collaboration",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Does opening a pull request automatically merge the proposed changes?",
    options: [
      { id: "A", text: "Yes, always" },
      { id: "B", text: "Only for private repositories" },
      { id: "C", text: "No, the pull request normally requires an explicit merge or configured automation" },
      { id: "D", text: "Only if the branch is named feature" }
    ],
    correctOptionId: "C",
    explanation: "Opening a pull request proposes changes for review. The changes are not automatically merged merely because the pull request exists.",
    tags: ["pull-request", "github", "merge"]
  },

  {
    id: "git-remote-collaboration-q-025",
    quizId: "quiz_git_remote_collaboration",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which workflow is most appropriate when contributing to an open-source repository where you do not have write access?",
    options: [
      { id: "A", text: "Fork → clone fork → create branch → make changes → push → open pull request" },
      { id: "B", text: "Delete the original repository → create main" },
      { id: "C", text: "Push directly to the original repository without permission" },
      { id: "D", text: "Create a local branch and never push it" }
    ],
    correctOptionId: "A",
    explanation: "A fork-based contribution workflow gives the contributor their own remote repository and provides a pull request path back to the original project.",
    tags: ["fork", "pull-request", "open-source"]
  },

  {
    id: "git-remote-collaboration-q-026",
    quizId: "quiz_git_remote_collaboration",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `git remote add upstream URL` in a fork-based workflow?",
    options: [
      { id: "A", text: "It makes upstream the user's personal fork" },
      { id: "B", text: "It records the original repository as another remote" },
      { id: "C", text: "It creates a new GitHub organization" },
      { id: "D", text: "It merges the fork into the original repository" }
    ],
    correctOptionId: "B",
    explanation: "Adding an `upstream` remote lets the local repository fetch changes from the original project separately from the contributor's fork.",
    tags: ["upstream", "fork", "remote"]
  },

  {
    id: "git-remote-collaboration-q-027",
    quizId: "quiz_git_remote_collaboration",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a contributor periodically fetch from `upstream`?",
    options: [
      { id: "A", text: "To keep their local knowledge of the original project up to date" },
      { id: "B", text: "To automatically delete their fork" },
      { id: "C", text: "To disable pull requests" },
      { id: "D", text: "To remove all local branches" }
    ],
    correctOptionId: "A",
    explanation: "Fetching from upstream allows contributors to see new commits and updates from the original repository.",
    tags: ["upstream", "fetch", "fork"]
  },

  {
    id: "git-remote-collaboration-q-028",
    quizId: "quiz_git_remote_collaboration",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main risk of running `git push --force` on a shared branch?",
    options: [
      { id: "A", text: "It can overwrite remote history and make other contributors' commits harder to reach" },
      { id: "B", text: "It only changes local files" },
      { id: "C", text: "It creates an automatic backup branch" },
      { id: "D", text: "It prevents all future commits" }
    ],
    correctOptionId: "A",
    explanation: "Force pushing can replace the remote branch reference with a rewritten history, potentially discarding or obscuring commits others have based work on.",
    tags: ["push", "force-push", "collaboration"]
  },

  {
    id: "git-remote-collaboration-q-029",
    quizId: "quiz_git_remote_collaboration",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is `git push --force-with-lease` generally safer than `git push --force`?",
    options: [
      { id: "A", text: "It never rewrites history" },
      { id: "B", text: "It checks that the remote branch is still at the expected state before forcing the update" },
      { id: "C", text: "It prevents all merge conflicts" },
      { id: "D", text: "It pushes to every remote simultaneously" }
    ],
    correctOptionId: "B",
    explanation: "`--force-with-lease` adds a safety check intended to prevent overwriting remote changes that appeared after your last known state.",
    tags: ["force-push", "force-with-lease", "collaboration"]
  },

  {
    id: "git-remote-collaboration-q-030",
    quizId: "quiz_git_remote_collaboration",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a non-fast-forward push rejection usually indicate?",
    options: [
      { id: "A", text: "The remote branch contains commits that are not included in the local branch being pushed" },
      { id: "B", text: "Git cannot create commits locally" },
      { id: "C", text: "The repository has no remote" },
      { id: "D", text: "The local branch is empty" }
    ],
    correctOptionId: "A",
    explanation: "Git rejects a normal push when updating the remote branch would discard remote commits that the local branch does not contain.",
    tags: ["push", "non-fast-forward", "remote"]
  },

  {
    id: "git-remote-collaboration-q-031",
    quizId: "quiz_git_remote_collaboration",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "You receive a non-fast-forward rejection while pushing `main`. What is a reasonable first step?",
    options: [
      { id: "A", text: "Delete the remote repository" },
      { id: "B", text: "Force push immediately without checking anything" },
      { id: "C", text: "Fetch the remote changes and inspect how the histories differ" },
      { id: "D", text: "Remove the `.git` directory" }
    ],
    correctOptionId: "C",
    explanation: "Fetching and inspecting the remote changes lets you understand what changed before choosing merge, rebase, or another appropriate strategy.",
    tags: ["push", "fetch", "non-fast-forward"]
  },

  {
    id: "git-remote-collaboration-q-032",
    quizId: "quiz_git_remote_collaboration",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `git push origin feature:main` mean?",
    options: [
      { id: "A", text: "Push local main to remote feature" },
      { id: "B", text: "Push local feature to the remote branch main" },
      { id: "C", text: "Rename feature to main locally" },
      { id: "D", text: "Merge main into feature locally" }
    ],
    correctOptionId: "B",
    explanation: "The refspec `feature:main` means the local branch `feature` is used to update the remote branch named `main` on `origin`.",
    tags: ["push", "refspec", "remote"]
  },

  {
    id: "git-remote-collaboration-q-033",
    quizId: "quiz_git_remote_collaboration",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `git remote set-url origin NEW_URL`?",
    options: [
      { id: "A", text: "It changes the URL associated with the origin remote" },
      { id: "B", text: "It renames the main branch" },
      { id: "C", text: "It changes the current commit" },
      { id: "D", text: "It deletes all remote branches" }
    ],
    correctOptionId: "A",
    explanation: "`git remote set-url` updates the URL stored for a configured remote.",
    tags: ["git-remote", "remote-url"]
  },

  {
    id: "git-remote-collaboration-q-034",
    quizId: "quiz_git_remote_collaboration",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when you run `git pull --rebase`?",
    options: [
      { id: "A", text: "Remote commits are deleted" },
      { id: "B", text: "Fetched changes are integrated by rebasing local commits on top of them" },
      { id: "C", text: "A fork is created automatically" },
      { id: "D", text: "The remote branch is renamed" }
    ],
    correctOptionId: "B",
    explanation: "`git pull --rebase` fetches remote changes and then rebases the local commits that are not on the remote onto the updated remote history.",
    tags: ["pull", "rebase", "remote"]
  },

  {
    id: "git-remote-collaboration-q-035",
    quizId: "quiz_git_remote_collaboration",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can rebasing local commits before pushing be useful?",
    options: [
      { id: "A", text: "It can create a linear history by replaying local commits on top of updated remote history" },
      { id: "B", text: "It prevents all conflicts permanently" },
      { id: "C", text: "It deletes the remote repository" },
      { id: "D", text: "It converts commits into GitHub issues" }
    ],
    correctOptionId: "A",
    explanation: "Rebasing can integrate the latest base changes while keeping the local commits in a linear sequence, although conflicts may still need to be resolved.",
    tags: ["rebase", "pull", "history"]
  },

  {
    id: "git-remote-collaboration-q-036",
    quizId: "quiz_git_remote_collaboration",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between `origin` and `upstream` in many fork workflows?",
    options: [
      { id: "A", text: "origin usually refers to the contributor's fork, while upstream commonly refers to the original repository" },
      { id: "B", text: "origin is always local and upstream is always a branch" },
      { id: "C", text: "upstream is always GitHub's default branch" },
      { id: "D", text: "They are required Git keywords with fixed meanings" }
    ],
    correctOptionId: "A",
    explanation: "These are conventional remote names. In a common fork workflow, origin points to the contributor's fork and upstream points to the original project.",
    tags: ["origin", "upstream", "fork"]
  },

  {
    id: "git-remote-collaboration-q-037",
    quizId: "quiz_git_remote_collaboration",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a pull request review?",
    options: [
      { id: "A", text: "To inspect and discuss proposed changes before integration" },
      { id: "B", text: "To create the local `.git` directory" },
      { id: "C", text: "To replace Git commits with files" },
      { id: "D", text: "To make all contributors administrators" }
    ],
    correctOptionId: "A",
    explanation: "Code review gives collaborators an opportunity to examine the proposed implementation, identify issues, and discuss improvements before merging.",
    tags: ["pull-request", "code-review"]
  },

  {
    id: "git-remote-collaboration-q-038",
    quizId: "quiz_git_remote_collaboration",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common reason to protect a main branch on GitHub?",
    options: [
      { id: "A", text: "To prevent Git from creating local branches" },
      { id: "B", text: "To require review or status checks before changes reach an important branch" },
      { id: "C", text: "To disable all commits in the repository" },
      { id: "D", text: "To prevent repository cloning" }
    ],
    correctOptionId: "B",
    explanation: "Branch protection rules can require reviews, passing checks, or other conditions before changes are merged into important branches.",
    tags: ["github", "branch-protection", "pull-request"]
  },

  {
    id: "git-remote-collaboration-q-039",
    quizId: "quiz_git_remote_collaboration",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A teammate pushes new commits to `origin/main` while you are working locally. What does your local `main` contain before fetching?",
    options: [
      { id: "A", text: "The teammate's commits automatically" },
      { id: "B", text: "Only the commits already present in your local repository; the remote-tracking reference may still be stale" },
      { id: "C", text: "No commits at all" },
      { id: "D", text: "The teammate's working directory" }
    ],
    correctOptionId: "B",
    explanation: "Git does not automatically update your local repository's remote-tracking references whenever someone pushes. Fetching retrieves those changes.",
    tags: ["fetch", "remote-tracking", "collaboration"]
  },

  {
    id: "git-remote-collaboration-q-040",
    quizId: "quiz_git_remote_collaboration",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command lets you inspect commits that exist on `origin/main` but not on your local main after fetching?",
    options: [
      { id: "A", text: "git log main..origin/main" },
      { id: "B", text: "git delete origin/main" },
      { id: "C", text: "git clone main..origin/main" },
      { id: "D", text: "git push main..origin/main" }
    ],
    correctOptionId: "A",
    explanation: "The range `main..origin/main` identifies commits reachable from origin/main that are not reachable from local main.",
    tags: ["git-log", "remote-tracking", "comparison"]
  },

  {
    id: "git-remote-collaboration-q-041",
    quizId: "quiz_git_remote_collaboration",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is it useful to create a separate branch before making a feature change?",
    options: [
      { id: "A", text: "It allows the feature to be developed independently and reviewed before integration" },
      { id: "B", text: "It makes commits unnecessary" },
      { id: "C", text: "It automatically deploys the feature" },
      { id: "D", text: "It prevents the repository from having remotes" }
    ],
    correctOptionId: "A",
    explanation: "Separate branches isolate work and make it easier to review, test, and integrate changes without directly modifying the main development line.",
    tags: ["branches", "collaboration", "workflow"]
  },

  {
    id: "git-remote-collaboration-q-042",
    quizId: "quiz_git_remote_collaboration",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if you clone a repository and then create a new local branch?",
    options: [
      { id: "A", text: "The original remote is automatically deleted" },
      { id: "B", text: "The branch exists locally until it is pushed to a remote" },
      { id: "C", text: "GitHub automatically opens a pull request" },
      { id: "D", text: "The branch becomes a fork" }
    ],
    correctOptionId: "B",
    explanation: "Creating a local branch does not publish it remotely. You must push it if you want a corresponding remote branch.",
    tags: ["branches", "push", "remote"]
  },

  {
    id: "git-remote-collaboration-q-043",
    quizId: "quiz_git_remote_collaboration",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which sequence is appropriate for publishing a new local feature branch?",
    options: [
      { id: "A", text: "git delete feature → git push" },
      { id: "B", text: "git fetch feature → git clone feature" },
      { id: "C", text: "git push -u origin feature" },
      { id: "D", text: "git pull -u origin feature" }
    ],
    correctOptionId: "C",
    explanation: "`git push -u origin feature` publishes the feature branch to origin and establishes its upstream relationship.",
    tags: ["push", "upstream", "feature-branches"]
  },

  {
    id: "git-remote-collaboration-q-044",
    quizId: "quiz_git_remote_collaboration",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between a Git remote and a GitHub repository?",
    options: [
      { id: "A", text: "A remote is a Git concept referring to another repository; GitHub is a platform that can host repositories" },
      { id: "B", text: "They are technically identical concepts" },
      { id: "C", text: "A remote can only exist on GitHub" },
      { id: "D", text: "GitHub repositories cannot have remotes" }
    ],
    correctOptionId: "A",
    explanation: "Git's remote concept is platform-independent. GitHub is one service that can host a repository referenced by a Git remote.",
    tags: ["remote", "github", "git-basics"]
  },

  {
    id: "git-remote-collaboration-q-045",
    quizId: "quiz_git_remote_collaboration",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Can a Git repository have more than one remote?",
    options: [
      { id: "A", text: "No, Git supports exactly one remote" },
      { id: "B", text: "Only if the repository has no branches" },
      { id: "C", text: "Yes, a repository can have multiple remotes with different names" },
      { id: "D", text: "Only GitHub Enterprise supports multiple remotes" }
    ],
    correctOptionId: "C",
    explanation: "Git repositories can configure multiple remotes, such as `origin`, `upstream`, or other custom names.",
    tags: ["remotes", "origin", "upstream"]
  },

  {
    id: "git-remote-collaboration-q-046",
    quizId: "quiz_git_remote_collaboration",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if you run `git fetch upstream` in a repository where `upstream` is configured?",
    options: [
      { id: "A", text: "Git retrieves updates from the upstream remote and updates relevant remote-tracking references" },
      { id: "B", text: "Git merges upstream/main into every local branch" },
      { id: "C", text: "Git deletes the origin remote" },
      { id: "D", text: "Git opens a pull request automatically" }
    ],
    correctOptionId: "A",
    explanation: "Fetching from a named remote retrieves its updates without automatically merging those updates into your current branch.",
    tags: ["fetch", "upstream", "remote-tracking"]
  },

  {
    id: "git-remote-collaboration-q-047",
    quizId: "quiz_git_remote_collaboration",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A contributor has a fork with `origin` pointing to their fork and `upstream` pointing to the original project. Where would they normally push their feature branch?",
    options: [
      { id: "A", text: "Directly to upstream without permission" },
      { id: "B", text: "To origin, their own fork" },
      { id: "C", text: "Only to the local main branch" },
      { id: "D", text: "To both remotes automatically" }
    ],
    correctOptionId: "B",
    explanation: "The contributor normally pushes their feature branch to their own fork (`origin`) and then opens a pull request targeting the original project.",
    tags: ["fork", "origin", "upstream", "pull-request"]
  },

  {
    id: "git-remote-collaboration-q-048",
    quizId: "quiz_git_remote_collaboration",
    order: 48,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about pull requests is most accurate?",
    options: [
      { id: "A", text: "A pull request is the same thing as `git pull`" },
      { id: "B", text: "A pull request is primarily a collaboration and review mechanism provided by platforms such as GitHub" },
      { id: "C", text: "A pull request can only contain one commit" },
      { id: "D", text: "A pull request exists entirely inside the local Git repository" }
    ],
    correctOptionId: "B",
    explanation: "A GitHub pull request is a platform-level collaboration mechanism for proposing, reviewing, discussing, and integrating changes.",
    tags: ["pull-request", "github", "collaboration"]
  },

  {
    id: "git-remote-collaboration-q-049",
    quizId: "quiz_git_remote_collaboration",
    order: 49,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A developer runs `git pull` and encounters conflicts. What is the correct interpretation?",
    options: [
      { id: "A", text: "Git failed to contact the remote" },
      { id: "B", text: "Git has successfully integrated everything automatically" },
      { id: "C", text: "The fetched remote changes could not be integrated automatically with the local changes" },
      { id: "D", text: "The local repository has been deleted" }
    ],
    correctOptionId: "C",
    explanation: "A conflict means Git could not automatically reconcile changes from the integration with local changes and requires manual resolution.",
    tags: ["pull", "conflicts", "merge"]
  },

  {
    id: "git-remote-collaboration-q-050",
    quizId: "quiz_git_remote_collaboration",
    order: 50,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which workflow best represents a professional GitHub collaboration process for a feature?",
    options: [
      { id: "A", text: "Edit main directly, force-push repeatedly, and skip review" },
      { id: "B", text: "Create feature branch → commit changes → push branch → open pull request → review/checks → merge" },
      { id: "C", text: "Create a fork → delete the original project → merge locally" },
      { id: "D", text: "Clone → delete `.git` → upload files manually" }
    ],
    correctOptionId: "B",
    explanation: "A feature branch, focused commits, remote publication, pull request review, automated checks, and controlled merging form a common collaborative workflow.",
    tags: ["workflow", "pull-request", "branches", "github"]
  }
];

export default gitRemoteCollaborationQuestions;