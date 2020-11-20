import setText from './setText';
const main = document.getElementById('main');

const pageload = () => {
    configureStyle();
    createHeader();
    createMenu();
    createParagraph('/dist/lang/homeparagraph.txt');
    createFooter();
}

const createMenu = () => {
    const container = document.createElement('div');
    const menuList = document.createElement('ul');
    container.setAttribute('id', 'nav')
    const contact = document.createElement('li');
    const home = document.createElement('li');
    const menu = document.createElement('li');

    const menuItemGroup = {
        contact: contact, divider1: document.createElement('li'),
        home: home, divider2: document.createElement('li'), menu: menu
    };

    for (const key in menuItemGroup) {
        if (key == 'divider1' || key == 'divider2') {
            const div = document.createElement('div');
            const rule = document.createElement('div');
            div.setAttribute('class', 'vr-container');
            rule.setAttribute('class', 'vr');
            div.appendChild(rule);
            menuItemGroup[key].appendChild(div);
            menuList.appendChild(menuItemGroup[key]);
        } else {
            const a = document.createElement('a');
            a.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            menuItemGroup[key].appendChild(a);
            menuList.appendChild(menuItemGroup[key]);
        }
    }

    container.appendChild(menuList);
    main.appendChild(container);
}

const createHeader = () => {
    const container = document.createElement('div');
    const header = document.createElement('h1');
    container.setAttribute('id', 'header');
    header.textContent = 'Soma\'s Kitchen';
    container.appendChild(header);
    main.appendChild(container);
}

const createFooter = () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'footer');
    container.textContent = 'Made by Dean Pooler';
    main.appendChild(container)
}

const createHorizontalRule = () => {
    const hr = document.createElement('hr');
    hr.setAttribute('class', 'hr');
    main.appendChild(hr);
}

const createParagraph = (file) => {
    const content = document.createElement('div');
    const p = document.createElement('p');
    content.setAttribute('id', 'content');
    setText(file, p);
    content.appendChild(p)
    main.appendChild(content);
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