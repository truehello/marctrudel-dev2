---
title: Basic Git Commands
description: Collection of basic git commands
featuredImgURL: https://source.unsplash.com/featured/?space,astronomy
featuredImgAlt: basic git comands image
slug: basic-git
keywords: git
---
## Collection of basic git commands

**git init** create a new repository

**git add** add files to branch "git add ." adds all files

**git commit -m "note describing commit** commits files to branch. Best to use good description of work done

**git push** pushes to remote repository

**git status** show status of all branches in ropository

**git branch** lists all branches

### make a new branch
**git checkout -b <new branch name>** creates a new branch and switches to using it


### merge branch
**git checkout master** switch to branch the you want to merge into

**git merge branch name** merges branch name into master

**git push** push to remote repository

### delete a branch
**git branch -d <branch>** The -d option will delete the branch only if it has already been pushed and merged with the remote branch. local branch only

**git branch -D <branch>** Use -D instead if you want to force the branch to be deleted, even if it hasn't been pushed or merged yet. local branch only

**git push origin --delete remoteBranchName** delete the remote branch

### Synchronize branch list
**git fetch -p** The -p flag means "prune". After fetching, branches which no longer exist on the remote will be deleted.


### Rebase
**git rebase <branch>** rebasing is changing the base of your branch from one commit to another making it appear as if you'd created your branch from a different commit. Internally, Git accomplishes this by creating new commits and applying them to the specified base.

### Magic Time Machine
fixing screwups. git superpower is it gives you the ability to go back in time when life was good and your code actually worked. to do this you need to go back to a time when you know your code worked. 

**git reset --hard <SHA>**  use this to go back to the SHA (Secure Hash Algorithm) that is given to each of your git commits. 

### How do I find the <SHA> to roll back to? 
usually you need to go back to a point in time where you remembered life being good and the code functioning as expected. 
**git log** By default, with no arguments, git log lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.

**git log -p -2**  -p or --patch, shows the difference (the patch output) introduced in each commit. You can also limit the number of log entries displayed, such as using -2 to show only the last two entries.

**git log --since=2.weeks** limits the log output to last 2 weeks

**git log --no-merges** avoids showing merges in the log hisotry

### How to fix conflicts after a rebase
pretty sure I'll never need to worry about this

### How to fix a merge conflict
coming soon

## Change a commit message
coming soon






