import setText from './setText';
const content = document.getElementById('content');

const pageload = () => {
    configureStyle();
    createHeader();
    createHorizontalRule();
    createParagraph('/dist/lang/homeparagraph.txt');
}

const createHeader = () => {
    const container = document.createElement('div');
    const header = document.createElement('h1');
    container.setAttribute('id', 'header');
    header.textContent = 'Soma\'s Kitchen';
    container.appendChild(header);
    content.appendChild(container);
}

const createHorizontalRule = () => {
    const hr = document.createElement('hr');
    hr.setAttribute('class', 'hr');
    content.appendChild(hr);
}

const createParagraph = (file) => {
    const p = document.createElement('p');
    p.setAttribute('class', 'text-content')
    setText(file, p);
    content.appendChild(p);
}

const configureStyle = () => {
    var link = document.createElement('link');
    var stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', '/dist/style/style.css')
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap');
    document.head.appendChild(link);
    document.head.appendChild(stylesheet);
}
export default pageload;