import { pwaInstallHandler } from "https://unpkg.com/pwa-install-handler@latest?module";

const $button = document.querySelector("#installButton");

pwaInstallHandler.addListener((canInstall) => {
  $button.style.display = canInstall ? "inline-block" : "none";
});

$button.addEventListener("click", () => {
  pwaInstallHandler.install();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

window.onload = function () {
  document.getElementById("installButton").click();
};
