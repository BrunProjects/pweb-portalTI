document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuLogo = document.querySelector(".logo"); 

    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    function atualizarIconeTema(tema) {
        if (tema === "dark") {
            themeToggle.innerHTML = `
            <span class="material-symbols-outlined"> dark_mode </span>  
            `;
            if (menuLogo) {
                menuLogo.innerHTML = `
                <img src="imagens/Marca_IF_dark.png" alt="IF Sertão PE Campus Salgueiro">
                `;
            }
        } else {
            themeToggle.innerHTML = `
            <span class="material-symbols-outlined"> light_mode </span>
            `;
            if (menuLogo) {
                menuLogo.innerHTML = `
                <img src="imagens/Marca_IF_light.png" alt="IF Sertão PE Campus Salgueiro">
                `;
            }
        }
    }

    atualizarIconeTema(currentTheme);

    themeToggle.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        let newTheme = theme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        
        atualizarIconeTema(newTheme);
    });

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});