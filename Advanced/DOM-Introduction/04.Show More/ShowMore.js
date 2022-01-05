function showText(element,text) {
    console.log(window.getComputedStyle(element, null).display);
    element.style.display = 'block';
    text.textContent = '';
}