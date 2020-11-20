import setText from './setText';
const content = document.getElementById('content');

const pageload = () => {
    createBanner();
    createHeader();
    createHorizontalRule();
    createParagraph('/dist/lang/homeparagraph.txt');
}

const createBanner = () => {
    const banner = document.createElement('img');
    banner.style.display = 'block';
    banner.style.marginLeft = 'auto';
    banner.style.marginRight = 'auto';
    banner.style.width = '60%';
    banner.setAttribute('src', '/dist/img/food-dishes-header.jpg');
    content.appendChild(banner);
}

const createHeader = () => {
    const header = document.createElement('h1');
    header.textContent = 'Soma Kitchens';
    header.style.textAlign = 'center';
    content.appendChild(header);
}

const createHorizontalRule = () => {
    const hr = document.createElement('hr');
    hr.style.border = '0';
    hr.style.width = '60%'
    hr.style.height = '1px';
    hr.style.background = '#333';
    hr.style.backgroundImage = 'linear-gradient(to right, #ccc, #333, #ccc';
    content.appendChild(hr);
}

const createParagraph = (file) => {
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.textContent = '';
    setText(file, p);
    content.appendChild(p);
}

export default pageload;