function extract(content) {
    //question
let a = content.textContent.trim()
console.log(a);
let matcher = new RegExp("(?<name>\([\w/\s]+\))","g");

let result = [...a.matchAll(matcher)];

console.log(result);

}