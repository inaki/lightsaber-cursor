function lightsaverCursor() {
  chrome.tabs.executeScript({
    file: 'lightsaver.js'
  });
}

document.getElementById('clickme').addEventListener('click', lightsaverCursor);
