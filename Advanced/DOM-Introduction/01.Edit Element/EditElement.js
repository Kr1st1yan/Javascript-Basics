function editElement(element, replaceElement, replaceWith) {
  let textToModify = element.textContent;
  let finalValue = textToModify.replace(replaceElement, replaceWith);
  
  return (element.textContent = finalValue);
}
