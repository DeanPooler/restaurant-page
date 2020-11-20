const content = document.getElementById('content');

const pageload = () => {
   createBanner();
}

const createBanner = () => {
    const banner = document.createElement('img');
    banner.style.display = 'block';
    banner.style.marginLeft = 'auto';
    banner.style.marginRight = 'auto';
    banner.style.width = '80%';
    banner.setAttribute('src', '/dist/img/food-dishes-header.jpg');
    content.appendChild(banner);
}



export default pageload;