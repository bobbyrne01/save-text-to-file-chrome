save-text-to-file-chrome
==

Save Text to File simplifies saving snippets of text from a web browser to a file on the local computer.

# Installation

The recommended setup is to install both the:
* Web extension
* Host application

## Install web-extension

Download and install from [Chrome Web Store](https://chrome.google.com/webstore/detail/save-text-to-file/mkepenkbhepjelljcfiooignmpfgochi).

## Install host application

**Note:** If installing the host application, ensure [Python](https://www.python.org/downloads/) is installed beforehand.

Download the script and manifest files:
 - `savetexttofile.py`
 - `savetexttofile.bat` (Only needed for Windows)
 - `savetexttofile.json`

from [Github](https://github.com/bobbyrne01/save-text-to-file-chrome/tree/master/app).

Move `savetexttofile.py` (and `savetexttofile.bat` on Windows) to a directory e.g:
 - Windows: `C:\Users\Robert\ExtensionNativeHosts\`
 - Mac: `/Users/Robert/ExtensionNativeHosts/`
 - Linux: `/home/Robert/ExtensionNativeHosts/`

Then follow the steps specific to each platform listed below ..


### Windows

Modify the manifest `savetexttofile.json`, changing the `path` value to the location used previously. And change the `.py` extension to `.bat`:
```
"path": "/path/to/savetexttofile.py"
```
->
```
"path": "C:\Users\Robert\ExtensionNativeHosts\savetexttofile.bat"
```
Then copy the manifest to:
```
C:\Users\Robert\ExtensionNativeHosts\
```

Modify `savetexttofile.bat`, changing the path to the location used previously:
```
call python C:\path\to\savetexttofile.py
```
->
```
call python C:\Users\Robert\ExtensionNativeHosts\savetexttofile.py
```

Open the `Registry Editor` application from the start menu and add the appropriate keys outlined for your system from [Chrome](https://developer.chrome.com/apps/nativeMessaging#native-messaging-host-location)


### Mac

Modify `savetexttofile.json`, changing the `path` value to the location used previously:
```
"path": "/path/to/savetexttofile.py"
```
->
```
"path": "/Users/Robert/ExtensionNativeHosts/savetexttofile.py"
```
Then copy the manifest to this location under the user's home directory:
```
~/.config/google-chrome/NativeMessagingHosts/savetexttofile.json
```


### Linux

Modify `savetexttofile.json`, changing the `path` value to the location used previously:
```
"path": "/path/to/savetexttofile.py"
```
->
```
"path": "/home/Robert/ExtensionNativeHosts/savetexttofile.py"
```
Then copy the manifest to these locations under the user's home directory:
```
~/.mozilla/native-messaging-hosts/savetexttofile.json
~/.mozilla/managed-storage/savetexttofile.json
~/.mozilla/pkcs11-modules/savetexttofile.json
```
