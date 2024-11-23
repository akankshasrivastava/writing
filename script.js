// Save this as script.js
const poems = [
    {
        text: "Echoes of Pilani\n\nFrom flicker to fire, with heedless fervour\nToying with fate, their first autumn in Pilani\nThey sparred and squabbled in playful skirmish\nUnmoored by the gentle rawness of Pilani\n\nShe threaded tenderness into the skin of his back\nSuturing the rips in the quiet of Pilani\nHe braided poetry into her wind-kissed hair\nTo the rhythm of the warbling bulbuls of Pilani\n\nThey found faith in the yellowing Gulmohar leaves\nAs hawkers cried hoarse in Nutan bazaars of Pilani\nTheir hands embraced through rain and ruin\nHolding steady through the raging sandstorms of Pilani\n\nCarving promises in sand, burying memories in water\nRewriting the wistful farewells of Pilani.\n\nThere let us meet one day, across unravelling distances,\nby the peeling grey paint, of a tattered old bench,\nOn an unreturning January morning in Pilani.",
        date: "undated"
    }
];

let currentPoemIndex = -1;

function showRandomPoem() {
    const poemDisplay = document.getElementById('poemDisplay');
    poemDisplay.style.opacity = 0;
    poemDisplay.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * poems.length);
        } while (newIndex === currentPoemIndex && poems.length > 1);
        
        currentPoemIndex = newIndex;
        const poem = poems[currentPoemIndex];
        
        poemDisplay.innerHTML = poem.text.replace(/\n/g, '<br>') +
            `<div class="date">${poem.date}</div>`;
        
        poemDisplay.style.opacity = 1;
        poemDisplay.style.transform = 'translateY(0)';
    }, 1000);
}

// Show first poem on load
showRandomPoem();

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' || e.code === 'ArrowRight') {
        showRandomPoem();
    }
});
