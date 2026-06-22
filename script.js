// Lista de curiosidades aleatórias
const curiosidades = [
    "Os dentes da lapa (um molusco) são o material biológico mais forte conhecido na Terra, superando a teia de aranha.",
    "O mel é o único alimento que não estraga. Potes de mel com mais de 3.000 anos foram encontrados em túmulos egípcios e ainda estavam próprios para consumo.",
    "As bananas são radioativas porque contêm potássio, mas você precisaria comer 10 milhões delas de uma vez para ter envenenamento por radiação.",
    "O coração de uma baleia-azul é do tamanho de um carro pequeno (como um Fusca) e suas artérias são tão grandes que um humano poderia nadar por elas.",
    "O ano de 2026 é um ano comum que começa em uma quinta-feira no calendário gregoriano.",
    "As vacas têm melhores amigas e ficam estressadas quando são separadas delas.",
    "O Monte Everest não é a montanha mais alta do mundo se medirmos da base ao topo; esse título pertence ao Mauna Kea, no Havaí, que tem a maior parte submersa."
];

// Seleção dos elementos do HTML
const factText = document.getElementById('fact-text');
const nextFactBtn = document.getElementById('next-fact');
const toggleThemeBtn = document.getElementById('toggle-theme');

// Função para pegar uma curiosidade aleatória
nextFactBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    factText.textContent = curiosidades[randomIndex];
});

// Função para alternar o Tema Escuro
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão de tema
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.textContent = 'Tema Claro';
    } else {
        toggleThemeBtn.textContent = 'Tema Escuro';
    }
});