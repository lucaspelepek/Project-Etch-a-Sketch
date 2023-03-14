document.addEventListener('DOMContentLoaded', createDivs);

function createDivs() {
    const container = document.getElementById('container');
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.textContent = 'this is a test';
        container.appendChild(div);
    }
    roverDiv();
}

function roverDiv() {
    const divElements = document.querySelectorAll('#container > div');
    
    divElements.forEach(function(divElement) {
      divElement.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = 'red';
        // Add your code to perform an action when the mouse enters the div element
      });
      
      divElement.addEventListener('mouseleave', function(event) {
        //event.target.style.backgroundColor = '#ddd';
        // Add your code to perform an action when the mouse leaves the div element
      });
    });
}
