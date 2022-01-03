function sumTable(elements, display) {
let sum = 0;

  for (let index = 0; index < elements.length; index++) {
      let content = Number(elements[index].textContent); 
      if (!isNaN(content)) {
        sum += content;     
      }
  }
  
  display.textContent = sum;
}
