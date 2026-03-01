console.log("Moss Example Extension: Background service worker initialized.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Moss Example Extension: Installed.");
  chrome.storage.local.set({ installationTime: Date.now() });
});
