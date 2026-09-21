What did the rejected push error message tell you, and why did it happen?

The error warns that the push was rejected because the remote repository contains commits that clone-b does not have. This happens when you did not perform pull or fetch and merge or rebase because the repository on clone-b's end was not updated to the current version of the origin. 



What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

It was the difference in resolving conflicts. When I encountered a merge conflict with git merge, I modified the file, staged it with git add, commit, and then push to complete the merging. Meanwhile, in rebasing, I resolve the conflict by modifying the file, stage it with git add, and then use git rebase --continue. 

The reason why git merge was mentioned once was because the original merge is already in process. Compared to git rebase where I use git rebase --continue to apply the commits from my branch to the branch I was rebasing to. 



What one habit would have avoided both rejected pushes in this lab?

If you keep your branch updated by using git pull or git fetch and git merge or rebase. 



Which approach - merge or rebase - would you default to on a shared team branch, and why?

In my opinion, I would use merge on a shared team branch because it is commonly used, safer, and easier for the team to use consistently. Merge creates a new commit that preserves the existing history, while rebase rewrites the commits on the branch being rebased, which can cause problems for teammates who already have those commits.

