const defaultBgColor = 'green';
const selectedBgColor = 'blue';

document.getElementById('body').addEventListener('load', addPeople());
document.getElementById('buttonLeft').addEventListener('click', moveToLeft());
document.getElementById('buttonRight').addEventListener('click', moveToRight());
//document.getElementsByClassName('person').addEventListener('click', changeBgColor());

function addPeople() {
    for (let i in people) {
        let person = document.createElement('div');
        let rightList = document.getElementById('rightList');

        person.className = 'person';
        person.style.backgroundColor = defaultBgColor;
        person.innerText = people[i];

        rightList.appendChild(person);
        rightList.childNodes[rightList.childNodes.length].addEventListener('click', changeBgColor());

    }
}

function moveToLeft() {

}

function moveToRight() {
    
}

function changeBgColor() {

}