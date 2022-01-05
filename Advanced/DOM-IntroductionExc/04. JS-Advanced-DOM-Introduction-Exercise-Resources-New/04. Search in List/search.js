function search() {
   //how to do without refreshing
  let towns = document.getElementsByTagName("li");
  let searchText = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let wordMatches = 0;

  for (let index = 0; index < towns.length; index++) {

    if (
      towns[index].innerText.toLowerCase().includes(searchText.toLowerCase())
    ) {
      wordMatches++;
      towns[index].style.fontWeight = "900";
      towns[index].style.textDecoration = "underline";
    }
  }
  result.textContent = `${wordMatches} matches found`;
}
