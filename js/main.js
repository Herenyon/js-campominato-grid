'use strict'

// funzioni


function myCreateElement(htmlElement, coloreCelle, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;


    element.addEventListener('click', function () {
        element.classList.add(coloreCelle);

        console.log(htmlValue);


    }


    )

    return element;
}

function myAppendElement(containerElement, htmlElement) {

    containerElement.append(htmlElement);
}



function createGrid(cellNumber) {
    for (let i = 1; i <= cellNumber; i++) {

        const createElement = myCreateElement('div', 'colore-celle', 'celle-10', i);
        myAppendElement(containerBoard, createElement);

    }
}


// main 



const playButton = document.getElementById('play');

const containerBoard = document.querySelector('.board');

let buttonValue = false;

let cellNumber = 100;

playButton.addEventListener('click',
    function () {
        if (buttonValue) {
            location.reload();
            buttonValue = false;

        }
        else {

            createGrid(cellNumber);
            buttonValue = true;
            document.getElementById('play').value = "Rispristina";
        }
    }
)