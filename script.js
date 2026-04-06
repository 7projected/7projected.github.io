const scrambledLetters = ['1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','[',']','|','{','}','X','O','.'];
//const scrambledLetters = ['0', '1'];
const elements = document.querySelectorAll("h1, p, li"); 
const finalTexts = [];

// Save original text
elements.forEach(el => {
    finalTexts.push(el.textContent);
})

let tickCount = 0;
const totalTicks = 10; // 20 ticks * 100ms = 2 seconds

function scrambleTick() {
    tickCount++;

    elements.forEach((el, index) => {
        const text = finalTexts[index];
        let scrambled = '';

        for (let i = 0; i < text.length; i++) {
            scrambled += scrambledLetters[Math.floor(Math.random() * scrambledLetters.length)];
        }

        el.textContent = scrambled;
    });

    if (tickCount >= totalTicks) {
        // final tick: restore the real text
        elements.forEach((el, index) => {
            el.textContent = finalTexts[index];
        });
    } else {
        setTimeout(scrambleTick, 100); // next tick in 100ms
    }
}

function main() {
    scrambleTick(); // start scrambling everything
}

main();