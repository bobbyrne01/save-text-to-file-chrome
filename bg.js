function saveTextToFile(info) {
  console.log('STTF: saveTextToFile start');
  var blob = new Blob([info.selectionText], {type: 'text/plain'});
  var url = URL.createObjectURL(blob);
  chrome.downloads.download({
    url: url
  }, function(id) {
    console.log('STTF: download callback: id: ' + id);
  });
}

chrome.contextMenus.create({
  id: 'save-text-to-file-chrome-extension',
  title: 'Save text to file',
  contexts:['selection']
});

chrome.contextMenus.onClicked.addListener(function(info) {
  if (info.menuItemId === 'save-text-to-file-chrome-extension') {
    saveTextToFile(info);
  }
});
