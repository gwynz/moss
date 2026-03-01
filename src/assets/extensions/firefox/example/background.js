console.log("Moss Example Extension (Firefox): Background script initialized.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Moss Example Extension (Firefox): Installed.");
  chrome.storage.local.set({ installationTime: Date.now() });
});
