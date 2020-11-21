const main = document.getElementById('main');

function menu() {
  addContent();
}

function addContent() {
  const content = document.createElement('div')
  content.setAttribute('id', 'content');

  const imageDisplay = document.createElement('div');
  imageDisplay.setAttribute('id', 'image-display');

  displayImage(imageDisplay, '/dist/img/beeframen.png', 'Ramen with beef toppings');
  displayImage(imageDisplay, '/dist/img/beefstew.png', 'Stew with meat');
  displayImage(imageDisplay, '/dist/img/bentobox.png', 'Lunchbox with various items');
  displayImage(imageDisplay, '/dist/img/friedeel.jpg', 'Fried eel in tempura batter');
  displayImage(imageDisplay, '/dist/img/lambcutlet.jpg', 'Lamb cutlet with balsamic reduction');
  displayImage(imageDisplay, '/dist/img/tiramisu.png', 'Desert with vanilla ice and choclate')

  content.appendChild(imageDisplay);
  main.appendChild(content);

  function displayImage(container, img, desc) {
    console.log('adding image');
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'image-container');

    const image = document.createElement('img');
    image.setAttribute('src', img);

    const DescriptionContainer = document.createElement('div');
    DescriptionContainer.setAttribute('class', 'description-container');

    const DescriptionText = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = desc;
    DescriptionText.appendChild(span);
    DescriptionContainer.appendChild(DescriptionText);

    imageContainer.append(image, DescriptionContainer);
    container.appendChild(imageContainer);
    console.log('added image');
  }
}


function showDescription(div) {

}

export default menu;