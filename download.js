function GetPDFName() {
    if (localStorage.getItem('theme') === 'dark') {
        return "cv-black.pdf";
    }
    else if (localStorage.getItem('theme') === 'day') {
        return "cv.pdf";
    }
}

function triggerDownload() {
    let element = document.createElement('a');
    element.setAttribute('href', '/' + GetPDFName());
    element.setAttribute('download', GetPDFName());
    element.style.display = 'none';

    document.body.appendChild(element);
    
    element.click();

    document.body.removeChild(element);
}