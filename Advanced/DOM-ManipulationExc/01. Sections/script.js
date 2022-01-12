function create(words) {
   for (let index = 0; index < words.length; index++) {
      let element = `<div onClick = displayContent(${index})><p id = ${index}>${words[index]}</p></div>`;
      document.getElementById('content').innerHTML += element; 
   }
}

function displayContent(id){
   document.getElementById(id).style.display = 'block';
}