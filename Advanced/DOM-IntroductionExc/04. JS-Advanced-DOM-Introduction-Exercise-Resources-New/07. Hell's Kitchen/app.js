function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementsByTagName("textarea")[0].value;
    let infoMap = new Map();
    let reg = new RegExp('"(.*?)"', "g");
    let info = [...input.matchAll(reg)];

    console.log(info);

    for (let index = 0; index < info.length; index++) {
      let element = info[index][1].split(' - ');
      let restaurant = element[0];
      let workers = element[1];
      
      if (!infoMap.has(restaurant)) {
         infoMap.set(restaurant,workers);     
      }else{
         let arr = [];
       arr = infoMap.get(restaurant);
         console.log(arr);
      }
    }
    console.log(infoMap);
  }
}
