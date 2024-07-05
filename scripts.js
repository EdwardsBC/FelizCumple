document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Te amo",
        "Te quiero",
        "Eres todo para mi",
        "Lof u",
        "Eres la mejor!",
        "Quiero verte",
        "Eres sexy 7u7r",
        "Me calientas ajsdajsd",
        "Eres perfecta",
        "Una flor para otra flor uwu",
        "OwO?"
    ];

    let currentIndex = 0;
    const noteTarget = document.getElementById('noteTarget');
    const rightArrow = document.getElementById('rightArrow');

    const updatePhrase = (index) => {
        noteTarget.textContent = phrases[index];
    };

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % phrases.length;
        updatePhrase(currentIndex);
    });

    updatePhrase(currentIndex);
});
