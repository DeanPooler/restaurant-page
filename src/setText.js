function setText(file, element) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            element.textContent = rawFile.responseText;
        }
    }
    rawFile.send();
}

export default setText