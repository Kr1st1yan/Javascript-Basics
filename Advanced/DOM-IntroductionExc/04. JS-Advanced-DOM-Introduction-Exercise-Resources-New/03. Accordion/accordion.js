function toggle(element) {
  if (element.style.display == "" || element.style.display == "none") {
    element.style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "less";
  } else {
    element.style.display = "none";
    document.getElementsByClassName("button")[0].textContent = "more";
  }
}
