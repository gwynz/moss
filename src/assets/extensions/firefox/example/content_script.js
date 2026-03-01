console.log("Moss Example Extension (Firefox): Content script injected.");

// Add a subtle blue border to the top of the body to indicate the extension is active
const indicator = document.createElement("div");
indicator.style.position = "fixed";
indicator.style.top = "0";
indicator.style.left = "0";
indicator.style.width = "100%";
indicator.style.height = "4px";
indicator.style.backgroundColor = "#2196F3";
indicator.style.zIndex = "999999";
indicator.id = "moss-extension-indicator";
indicator.title = "Moss Example Extension is active";

document.body.appendChild(indicator);
