document.addEventListener("DOMContentLoaded", () => {
    const formContato = document.getElementById("formContato");

    let containerCards = document.getElementById("contatosGerados");
    if (!containerCards && formContato) {
        containerCards = document.createElement("div");
        containerCards.id = "contatosGerados";
        containerCards.className = "grid-container";
        containerCards.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; padding: 10px;";
        formContato.parentElement.appendChild(containerCards);
    }

    if (!formContato) return;

    formContato.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const fields = [
            { id: 'nome', errId: 'erroNome', msg: 'O campo Nome é obrigatório.' },
            { id: 'email', errId: 'erroEmail', msg: 'Insira um e-mail válido.', isEmail: true },
            { id: 'assunto', errId: 'erroAssunto', msg: 'O campo Assunto é obrigatório.' },
            { id: 'mensagem', errId: 'erroMensagem', msg: 'A mensagem não pode ficar vazia.' }
        ];

        const dadosCard = {};

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorSpan = document.getElementById(field.errId);
            
            if (input && errorSpan) {
                errorSpan.innerHTML = "";
                dadosCard[field.id] = input.value.trim(); // Salva o valor

                if (!input.value.trim()) {
                    errorSpan.innerHTML = `<span style="color: #e63946; font-size: 0.85rem;">⚠️ ${field.msg}</span>`;
                    isValid = false;
                } else if (field.isEmail && !validarEmail(input.value)) {
                    errorSpan.innerHTML = `<span style="color: #e63946; font-size: 0.85rem;">⚠️ Formato de e-mail inválido.</span>`;
                    isValid = false;
                }
            }
        });

        if (isValid) {
            const novoCard = document.createElement("div");
            novoCard.className = "curso-card card-contato-gerado"; 
            
            novoCard.style.cssText = "background: var(--bg-card, #ffffff); border-left: 5px solid #28a745; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 15px; text-align: left; color: var(--text-color, #333);";

            novoCard.innerHTML = `
                <h3 style="margin-top: 0; color: #28a745; display: flex; align-items: center; gap: 8px;">
                    <span class="material-symbols-outlined" style="font-size: 20px;">account_circle</span> 
                    ${dadosCard.nome}
                </h3>
                <p style="margin: 5px 0; font-size: 0.9rem; opacity: 0.8;">
                    <strong>✉️ E-mail:</strong> ${dadosCard.email}
                </p>
                <p style="margin: 5px 0; font-size: 0.9rem;">
                    <strong>📌 Assunto:</strong> ${dadosCard.assunto}
                </p>
                <hr style="border: 0; border-top: 1px solid rgba(0,0,0,0.1); margin: 10px 0;">
                <p style="margin: 0; font-style: italic; white-space: pre-wrap;">
                    "${dadosCard.mensagem}"
                </p>
            `;

            containerCards.appendChild(novoCard);

            alert("Mensagem recebida! Card gerado logo abaixo.");
            formContato.reset();
        }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});