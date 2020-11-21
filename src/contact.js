const main = document.getElementById('main');

function contact() {
  addContent();
}

function addContent() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const phonesContainer = document.createElement('div');
  const phonesHeader = document.createElement('h1');
  const phonesText = document.createElement('p');
  phonesHeader.textContent = 'Phones';
  phonesText.textContent = '(+316) - 1234 1234'
  phonesContainer.appendChild(phonesHeader);
  phonesContainer.appendChild(phonesText);
  content.appendChild(phonesContainer)

  const adressContainer = document.createElement('div');
  const adressHeader = document.createElement('h1');
  const adressText = document.createElement('p');
  adressHeader.textContent = 'Adress';
  adressText.textContent = 'somestreet 123,\n1234 AB Somecity\nThe Netherlands';
  adressContainer.appendChild(adressHeader)
  adressContainer.appendChild(adressText);
  content.appendChild(adressContainer);

  main.appendChild(content);
}

export default contact;