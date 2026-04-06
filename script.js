const scrambledLetters = ['1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','[',']','|','{','}','X','O','.'];
//const scrambledLetters = ['0', '1'];
const elements = document.querySelectorAll("h1, p, li"); 
const finalTexts = [];

// save txt
elements.forEach(el => {
    finalTexts.push(el.textContent);
})

let tickCount = 0;
const totalTicks = 4; // 10 * (100ms tick dur) = 1 sec
const tickDuration = 250;

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
        elements.forEach((el, index) => {
            el.textContent = finalTexts[index];
        });
    } else {
        setTimeout(scrambleTick, tickDuration); // 100ms per tikc
    }
}

function main() {
    scrambleTick();
}

main();