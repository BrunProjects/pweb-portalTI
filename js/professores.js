const carregarProfessores = async () => {
    const cardsProfessores = document.getElementById('cards');
    if (!cardsProfessores) return;

    try {
        const response = await fetch("./dados/professores.json");
        const professores = await response.json();
        
        cardsProfessores.innerHTML = ""; 
        professores.forEach(element => {
            cardsProfessores.innerHTML += `
            <div class="card">
                <div class="card-img-container">
                    <img src="${element.foto}" alt="Foto do Prof. ${element.nome}" class="prof-foto">
                </div>
                <h3>Prof. ${element.nome}</h3>
                <p><strong>Formação:</strong> ${element.formacao}</p>
                <p><strong>Disciplinas:</strong> ${element.disciplinas}</p>
                <a href="${element.lattes}" target="_blank" class="link-lattes">Currículo Lattes</a>
            </div>
            `;
        });
    } catch (erro) {
        throw new Error("dados não existentes");
    }

}

carregarProfessores();
