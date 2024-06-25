"use strict";

const inputsRadioArr = document.querySelectorAll("input[type=radio]")
const progressBarLoc = document.querySelector(".progress-bar")
const progressTextLoc = document.querySelector(".progress-text")

const calculateRealisation = ()=> {
    let percent = 
        Number((document.querySelectorAll("input:checked").length / 
        document.querySelectorAll("input[type=radio").length * 100).toFixed(1))

    progressBarLoc.style.width = percent + "%"
    progressTextLoc.innerText = percent + "%"
}

inputsRadioArr.forEach((elem)=>{
    elem.addEventListener("change", calculateRealisation)
})
//# sourceMappingURL=main.js.map
