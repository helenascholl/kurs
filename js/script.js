const defaultBgColor = 'white';
const selectedBgColor = 'gray';

document.getElementById('buttonLeft').addEventListener('click', moveToLeft);
document.getElementById('buttonRight').addEventListener('click', moveToRight);

function addPeople() {
    people.sort();
    for (let i in people) {
        let person = document.createElement('div');
        let rightList = document.getElementById('rightList');

        person.className = 'person';
        person.style.backgroundColor = defaultBgColor;
        person.innerText = people[i];

        rightList.appendChild(person);
        let node = rightList.childNodes[rightList.childNodes.length - 1];
        node.addEventListener('click', () => {
            if (node.style.backgroundColor != selectedBgColor) {
                node.style.backgroundColor = selectedBgColor;
            } else {
                node.style.backgroundColor = defaultBgColor;
            }
        });
    }
}

function moveToLeft() {
    let rightList = document.getElementById('rightList');

    for (let i = 0; i < rightList.childNodes.length; i++) {
        let node = rightList.childNodes[i];
        if (node.style.backgroundColor == selectedBgColor) {
            node.style.backgroundColor = defaultBgColor;
            
            document.getElementById('leftList').appendChild(rightList.childNodes[i]);
            i--;
        }
    }
}

function moveToRight() {
    let leftList = document.getElementById('leftList');

    for (let i = 0; i < leftList.childNodes.length; i++) {
        let node = leftList.childNodes[i];
        if (node.style.backgroundColor == selectedBgColor) {
            node.style.backgroundColor = defaultBgColor;
            
            document.getElementById('rightList').appendChild(leftList.childNodes[i]);
            i--;
        }
    }
}