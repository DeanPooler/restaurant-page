const content = document.getElementById('content');

const pageload = () => {
   createBanner();
   createHeader();
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


export default pageload;