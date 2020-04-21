---
title: Basic Git Commands
description: Collection of basic git commands
---
## Collection of basic git commands


**git init** create a new repository
**git add** add files to branch "git add ." adds all files
**git commit -m "note describing commit** commits files to branch. Best to use good description of work done
**git push** pushes to remote repository
**git status** show staus of all branches in ropository
**git branch** lists all branches

### make a new branch
**git checkout -b new branch name** creates a new branch and switches to using it

### merge branch
**git checkout master** switch to branch the you want to merge into
**git merge branch name** merges branch name into master
**git push** push to remote repository


| Command        | Description           | Example  |
|:------------- |:------------- | -----:|
| **CD**      | Shows the name of or changes to a current directory | cd/documents/subfolder |
| **DIR**      | Displays a list of files and sub-directories in a directory.      |    |
| **MKDIR** | Createsa a new folder or directory      |   mkdir NewFolderName |
| **type NUL >** | Creates a new file      |   type NUL > filename.txt |
| **REN** | Renames a file or files.      |   ren Folder NewFolderName |
| **RMDIR /q /s/ foldername -**      | Removes a directory /q quiet mode /s run on all subfolders | rmdir /q /s foldername |
| **DEL**      | removes a single file      |  del file.js  |
| **xcopy** | copies and entire folder /E – This option makes sure that empty subfolders are copied to the destination. /I – Avoids prompting if the destination is a folder or file. Not required if you are adding a trailing ‘\’ to the destination folder      |   xcopy /e /i SourceFolder DestinationFolder |
| **MOVE** | move a file or folder to the new destination folder.      |   move file-to-move folder-to-be-moved-to |