const GetSwitch = document.querySelector(".switch-mode");

function Switch() {
  if (GetSwitch.checked) {
    document.documentElement.style.setProperty("--bg-color-light", "#333333");
    document.documentElement.style.setProperty("--text-color-light", "#ffffff");
    document.documentElement.style.setProperty("--bg-color-dark", "#ffffff");
    document.documentElement.style.setProperty("--text-color-dark", "#333333");
  } else {
    document.documentElement.style.setProperty("--bg-color-light", "#ffffff");
    document.documentElement.style.setProperty("--text-color-light", "#333333");
    document.documentElement.style.setProperty("--bg-color-dark", "#333333");
    document.documentElement.style.setProperty("--text-color-dark", "#ffffff");
  }
}
GetSwitch.addEventListener('change', Switch);