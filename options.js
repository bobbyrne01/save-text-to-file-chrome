'use strict';

/*******************************************************************************
 * Copyright IBM Corp. 2017

 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

// Saves option to chrome.storage
function saveOptions() {
  var fileNamePrefix = document.getElementById('fileNamePrefix').value;
  chrome.storage.sync.set({
    fileNamePrefix: fileNamePrefix
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}

// Restores fileNamePrefix state using the preferences stored in chrome.storage.
function restoreOptions() {
  // default fileNamePrefix value = 'save-text-to-file--'.
  chrome.storage.sync.get({
    fileNamePrefix: 'save-text-to-file--'
  }, function(items) {
    document.getElementById('fileNamePrefix').value = items.fileNamePrefix;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
