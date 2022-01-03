function extractText(textFrom,textTo) {
    //question
   let a = textFrom.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
   textTo.value = a;
}