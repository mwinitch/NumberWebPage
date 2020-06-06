let num = Math.floor((Math.random() * 100) + 1);
let count = 0;
const msg = document.querySelector('.msg');
const again = document.querySelector('.again');
let restart = document.createElement("button");
restart.innerText = "Play again";
restart.classList.add('btn');
document.getElementById('num').addEventListener("click", check);
restart.addEventListener("click", play);

function play(e) {
    e.preventDefault();
    location.reload();
}

function check(e) {
    e.preventDefault();
    const guess = document.querySelector('#guess').value;
    if (guess === '' || isNaN(guess)){
        msg.innerText = 'Please enter a valid number!';
        msg.classList.add('error');
    } else {
        const a = parseInt(guess);
        count++;
        if (a > num){
            msg.innerText = `${a} is too high!`
            msg.classList.add('error');
        } else if (a < num){
            msg.innerText = `${a} is too low!`
            msg.classList.add('error');
        } else {
            msg.innerText = `Correct! The value was ${a} and you got it in ${count} guesses.`
            document.getElementById('num').disabled = true;
            msg.classList.add('correct');
            again.appendChild(restart);
        }
    }
}