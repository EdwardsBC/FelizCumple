const messages = [
    "Te amo", "Te quiero", "Eres todo para mí", "Lof u", "Eres la mejor!",
    "Quiero verte", "Eres sexy 7u7r", "Me calientas ajsdajsd", "Eres perfecta",
    "Una flor para otra flor uwu", "OwO?"
];

let currentIndex = 0;
const noteTarget = document.getElementById('noteTarget');
const rightArrow = document.getElementById('rightArrow');

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % messages.length;
    noteTarget.textContent = messages[currentIndex];
});
