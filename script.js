const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Set default theme
body.setAttribute("dark-theme", "light");
themeBtn.textContent = "Dark Mode 🌙";

themeBtn.addEventListener("click", () => {
    const currentTheme = body.getAttribute("dark-theme");

    if (currentTheme === "light") {
        body.setAttribute("dark-theme", "dark");
        themeBtn.textContent = "Light Mode ☀️";
    } else {
        body.setAttribute("dark-theme", "light");
        themeBtn.textContent = "Dark Mode 🌙";
    }
});
