function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchText = document.getElementById("searchField").value;
    let info = document.getElementsByTagName("tr");

    for (let index = 2; index < info.length; index++) {
      if (
        info[index].innerText.toLowerCase().includes(searchText.toLowerCase())
      ) {
        info[index].style.backgroundColor = "#FFF842";
      }
    }
  }
}
