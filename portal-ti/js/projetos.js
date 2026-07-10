const carregarProjetos = async () => {
    const containerProjetos = document.getElementById('containerProjetos');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    
    if (!containerProjetos) return;

    try {
        const response = await fetch("./dados/projetos.json");
        const projetos = await response.json();
        
        containerProjetos.innerHTML = ""; 

        projetos.forEach(projeto => {
            containerProjetos.innerHTML += `
            <div class="projeto-card">
                <div class="projeto-img-wrapper">
                    <img src="${projeto.imagem}" alt="Imagem do projeto ${projeto.titulo}" class="projeto-img">
                    <span class="projeto-badge">${projeto.categoria}</span>
                </div>
                <div class="projeto-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
            </div>
            `;
        });

        if (btnPrev && btnNext) {
            btnNext.addEventListener("click", () => {
                const card = containerProjetos.querySelector('.projeto-card');
                if (card) {
                    const cardWidth = card.offsetWidth;
                    containerProjetos.scrollLeft += (cardWidth + 24); 
                }
            });

            btnPrev.addEventListener("click", () => {
                const card = containerProjetos.querySelector('.projeto-card');
                if (card) {
                    const cardWidth = card.offsetWidth;
                    containerProjetos.scrollLeft -= (cardWidth + 24);
                }
            });
        }

    } catch (erro) {
        console.error("Erro ao carregar os projetos:", erro);
        containerProjetos.innerHTML = "<p style='text-align:center;'>Não foi possível carregar a galeria de projetos.</p>";
    }
};

document.addEventListener("DOMContentLoaded", carregarProjetos);