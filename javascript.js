document.addEventListener('DOMContentLoaded', createDivs(16));

const buttomDiv = document.getElementById('buttomDiv').addEventListener('click', quantidadeDivsCriar);

function quantidadeDivsCriar() {
    let quantidade = prompt('how many squares you want?');
    if (quantidade > 100) return alert("less than 100 please!");

    createDivs(quantidade);
}

function cleanPreviousDivs() {
        const divs = document.querySelectorAll('div');
        divs.forEach(div => {
          div.style.backgroundColor = 'white';
        });
      }
      

function createDivs(number) {

    number *= number;
    cleanPreviousDivs();

    const container = document.getElementById('container');
    for (let i = 0; i < number; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    }
    roverDiv();
}

function roverDiv() {
    const divElements = document.querySelectorAll('#container > div');

    divElements.forEach(function (divElement) {
        divElement.addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = 'red';
            // Add your code to perform an action when the mouse enters the div element
        });

        divElement.addEventListener('mouseleave', function (event) {
            //event.target.style.backgroundColor = '#ddd';
            // Add your code to perform an action when the mouse leaves the div element
        });
    });
}
