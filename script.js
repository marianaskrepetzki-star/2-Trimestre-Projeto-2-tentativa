// Funcionalidade para Alternar Tema (Claro / Escuro)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Funcionalidade para os botões de Like e Dislike
const likeButtons = document.querySelectorAll('.like-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const countSpan = button.querySelector('.count');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
    });
});

dislikeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const countSpan = button.querySelector('.count');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
    });
});