---
title: Basic Windows CMD Commands
description: Collection of command line codes for windows
---
## Collection of command line codes for windows

* **CD** - Shows the name of or changes to a current directory  cd ../  cd/documents/subfolder
* **DIR** - Displays a list of files and sub-directories in a directory.
* **REN** - Renames a file or files. ren Folder NewFolderName
* **RMDIR /q /s/ foldername -** Removes a directory.  rmdir /q /s foldername
        /q -- Quiet mode, won't prompt for confirmation
        /S -- Run the operation on all folders of the selected path
        foldername -- The absolute path or relative folder name, e.g. o:/backup/test1 or test1
* **MOVE** - move a file or folder to the new destination folder. move file-to-move folder-to-be-moved-to


| Command        | Description           | Example  |
| ------------- |:-------------:| -----:|
| **CD**      | Shows the name of or changes to a current directory | cd/documents/subfolder |
| **DIR**      | Displays a list of files and sub-directories in a directory.      |    |
| **REN** | Renames a file or files.      |   ren Folder NewFolderName |
| **RMDIR /q /s/ foldername -**      | Removes a directory /q quiet mode /s run on all subfolders | rmdir /q /s foldername |
| **DELETE**      | removes a single file      |  delete file.js  |
| **xcopy** | copies and entire folder /E – This option makes sure that empty subfolders are copied to the destination.
/I – Avoids prompting if the destination is a folder or file. Not required if you are adding a trailing ‘\’ to the destination folder      |   Xcopy /E /I SourceFolder DestinationFolder |