function deleteByEmail() {
  let container = document.getElementsByTagName("tbody")[0];
  let allNames = document.getElementsByTagName("tr");
  let input = document.getElementsByName("email")[0].value;
  let checker = false;

  for (let index = 1; index < allNames.length; index++) {

    if (allNames[index].innerText.toLowerCase().includes(input.toLowerCase())) {
      checker = true;
      container.removeChild(allNames[index]);
      document.getElementById("result").textContent = "Deleted.";

      break;
    }
  }

  if (checker === false) {
    document.getElementById("result").textContent = "Not found.";
  }
}
