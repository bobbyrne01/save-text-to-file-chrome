'use strict';
const MENU_ITEM_ID = 'save-text-to-file-menu-item';
const EXTENSION_TITLE = 'Save text to file';
var fileNamePrefix;

function saveTextToFile(info) {
  var blob = new Blob([info.selectionText], {type: 'text/plain'});
  var url = URL.createObjectURL(blob);
  var fileName = createFileName();
  startDownloadOfTextToFile(url, fileName);
}

function createFileName() {
  var fileName = fileNamePrefix + new Date().getTime() + '.txt';
  return fileName;
}

function startDownloadOfTextToFile(url, fileName) {
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

chrome.contextMenus.create({
  id: MENU_ITEM_ID,
  title: EXTENSION_TITLE,
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(function(info) {
  if (info.menuItemId === MENU_ITEM_ID) {
    saveTextToFile(info);
  }
});

chrome.storage.sync.get({
  fileNamePrefix: 'save-text-to-file--',
}, function(items) {
  fileNamePrefix = items.fileNamePrefix;
});

chrome.storage.onChanged.addListener(function(changes) {
  if (changes.fileNamePrefix.newValue !== changes.fileNamePrefix.oldValue) {
    fileNamePrefix = changes.fileNamePrefix.newValue;
  }
});
