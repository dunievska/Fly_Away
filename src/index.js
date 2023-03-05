const sumPlik = require("./sum")
import * as wsb from "./sum2"
import style from './css/index.scss'
console.log(wsb.sum2(1,2))
console.log(wsb.zmienna2)
console.log("Hello world");
console.log("suma wynosi " + sumPlik.sum(2,4))
console.log("zmienna wynosi " + sumPlik.zmienna)

let heading = document.querySelector("#demo"),
    sumValue = sumPlik.sum(4554645,10)

heading.innerText = `0+11110 = ${sumValue}`;