chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.sendMessage(tabId, {text: 'show_blackout'});
    }
});
