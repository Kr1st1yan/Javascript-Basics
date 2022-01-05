function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  if (convention === "Camel Case") {
    document.getElementById("result").textContent = toCamelCase(text);
  } else if (convention === "Pascal Case") {
    document.getElementById("result").textContent = toPascalCase(text);
  } else {
    document.getElementById("result").textContent = "Error!";
  }
}

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function toPascalCase(string) {
  return `${string}`
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}
