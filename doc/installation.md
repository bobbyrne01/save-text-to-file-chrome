# Installation

The recommended setup is to install both the:

1. [Browser extension](https://chrome.google.com/webstore/detail/save-text-to-file/mkepenkbhepjelljcfiooignmpfgochi), and
2. Host application.

Installing the browser extension alone can save text files to the `Downloads` folder.

While installing both the browser extension and host application, text files can be saved anywhere on the computer.

[![Video demo of installation](https://img.youtube.com/vi/o0kgMorHmdc/0.jpg)](https://www.youtube.com/watch?v=o0kgMorHmdc)


## Table of Contents

* [Prerequisites](#prerequisites)
* [Download the Host Application](#download-the-host-application)
* [Install Host Application](#install-host-application)
  * [Windows](#windows)
  * [Mac](#mac)
  * [Linux](#linux)


## Prerequisites

Ensurue Python is installed and available on `PATH`.

* [Python](https://www.python.org/downloads/)

## Download the Host Application

Download this repository as a `.zip` file, from [here](https://github.com/bobbyrne01/save-text-to-file-chrome/archive/master.zip).

Copy `app/` directory and paste it to your computer, example: `C:\app\` or `/Users/Robert/app/`.

Then rename it to `savetexttofile`, example: `C:\savetexttofile\` or `/Users/Robert/savetexttofile/`.

## Install Host Application

Finally, follow the platform specific steps below.

### Windows

Assuming you saved [app](app) as `C:\savetexttofile\` on your computer.

* Navigate to `C:\savetexttofile\`
* Right click on `install_host.bat`
* Select `Run as administrator`, confirm prompt.

The host application should now be installed.

Restart Chrome, and check the browser extension's options.

Save Text to File's options page should indicate the host application has been successfully configured.


### Mac

Modify `savetexttofile.json`, changing the `path` value to the location used previously:
```
"path": "/path/to/savetexttofile.py"
```
->
```
"path": "/Users/Robert/savetexttofile/savetexttofile.py"
```
Then copy the manifest to this location under the user's home directory:
```
~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts/savetexttofile.json
```

Restart browser, and check the browser extension's options.

Save Text to File's options page should indicate the host application has been successfully configured.


### Linux

Modify `savetexttofile.json`, changing the `path` value to the location used previously:
```
"path": "/path/to/savetexttofile.py"
```
->
```
"path": "/home/Robert/savetexttofile/savetexttofile.py"
```
Then copy the manifest to these locations under the user's home directory:
```
~/.config/google-chrome/NativeMessagingHosts/savetexttofile.json
```

Ensure `/Users/Robert/savetexttofile/savetexttofile.py` is executable:
```
chmod +x /Users/Robert/savetexttofile/savetexttofile.py
```

Restart browser, and check the browser extension's options.

Save Text to File's options page should indicate the host application has been successfully configured.
