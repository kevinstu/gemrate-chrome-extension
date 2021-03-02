
chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
      if(/^https:\/\/myslabs.com/.test(current_tab_info.url)) {
        chrome.tabs.insertCSS(null, {file: './mystyles.css'})
        chrome.tabs.executeScript(null, {file: './foreground.js'})
      }
  });
});


