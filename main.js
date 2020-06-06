let num = Math.floor((Math.random() * 100) + 1);
let count = 0;
const msg = document.querySelector('.msg');
const again = document.querySelector('.again');
let restart = document.createElement("button");
restart.innerText = "Play again";
restart.classList.add('btn');
document.getElementById('num').addEventListener("click", check);
restart.addEventListener("click", play);
let table = document.getElementById('table')


function addRow(guess, msg) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerText = count;
    cell2.innerText = guess;
    cell3.innerText = msg;

}


function createTableHeader() {
    let header = table.createTHead();
    let row = header.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerText = "Guess";
    cell2.innerText = "Value";
    cell3.innerText = "Result";
}

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
        if (count === 1) {
            createTableHeader();
        }
        if (a > num){
            msg.innerText = `${a} is too high!`
            msg.classList.add('error');
            addRow(guess, "Too high");
        } else if (a < num){
            msg.innerText = `${a} is too low!`
            msg.classList.add('error');
            addRow(guess, "Too low");
        } else {
            msg.innerText = `Correct! The value was ${a} and you got it in ${count} guesses.`
            addRow(guess, "Correct");
            document.getElementById('num').disabled = true;
            msg.classList.add('correct');
            again.appendChild(restart);
        }
    }
}