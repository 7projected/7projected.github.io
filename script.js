const birthYear = 2008;
const birthMonth = 6;
const birthDay = 25;

const ageItem = document.getElementById("age");
const birthdayItem = document.getElementById("bday");

// Shoutout chatgpt for random math functions
function getAge() {
    const today = new Date();

    let age = today.getFullYear() - birthYear;

    if (
        today.getMonth() + 1 < birthMonth ||
        (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)
    ) {
        age--;
    }

    return age;
}


function main(){
    birthdayItem.textContent = `Birthday: ${birthMonth}/${birthDay}/${birthYear}`;
    ageItem.textContent = `Age: ${getAge()}`
}

main();