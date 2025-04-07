document
  .getElementById("cacheCleanForm")
  .addEventListener("submit", function () {
    event.preventDefault();
    const clearCache = document.querySelector(
      'input[name="clearCache"]'
    ).checked;
    const clearCookies = document.querySelector(
      'input[name="clearCookies"]'
    ).checked;
    const clearHistory = document.querySelector(
      'input[name="clearHistory"]'
    ).checked;

    console.log('Clear Cache:', clearCache);
    console.log('Clear Cookies:', clearCookies);
    console.log('Clear History:', clearHistory);
    console.log(chrome, chrome.browsingData);
    
    if (clearCache) {
      chrome.browsingData.removeCache({});
    }

    if (clearHistory) {
      chrome.browsingData.removeHistory({});
    }

    if (clearCookies) {
      const removalOptions = {
        since: 0,
      };

      const dataTypes = {
        cookies: true,
        localStorage: true,
        indexedDB: true,
        pluginData: true,
        webSQL: true,
      };

      chrome.browsingData.remove(removalOptions, dataTypes);
    }

    function displayMessage() {
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = "Success! The data has been erased.";
      setTimeout(() => {
        messageDiv.textContent = "";
      }, 5000);
    }
    displayMessage();
  });
