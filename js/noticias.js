document.addEventListener("DOMContentLoaded", () => {
    const formNoticia = document.getElementById("formNoticia");
    const containerNoticias = document.getElementById("containerNoticias");
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");



    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

    function renderNoticias() {
        containerNoticias.innerHTML = "";
        if (noticias.length === 0) {
            containerNoticias.innerHTML = "<p style='text-align:center;'>Nenhuma notícia cadastrada.</p>";
            return;
        }
        noticias.forEach(noticia => {
            const div = document.createElement("div");
            div.className = "noticia-item";
            div.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>${noticia.resumo}</p>
                <small style="color: gray;">Postado em: ${noticia.data}</small>
            `;
            containerNoticias.prepend(div); 
        });
    }

    formNoticia.addEventListener("submit", (e) => {
        e.preventDefault();
        const titulo = document.getElementById("tituloNoticia").value.trim();
        const resumo = document.getElementById("resumoNoticia").value.trim();

        if (titulo && resumo) {
            const novaNoticia = {
                titulo,
                resumo,
                data: new Date().toLocaleDateString('pt-BR')
            };

            noticias.push(novaNoticia);
            localStorage.setItem("noticias", JSON.stringify(noticias));
            renderNoticias();
            formNoticia.reset();
        }
    });

    renderNoticias();
});