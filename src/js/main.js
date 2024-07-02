"use strict";

const inputsRadioArr = document.querySelectorAll("input[type=radio]")
const progressBarLoc = document.querySelector(".progress-bar")
const progressTextLoc = document.querySelector(".progress-text")
const tag1Loc = document.querySelector("#tag1")
const tag1inputsArr = document.querySelectorAll("#tag1 input[type=radio]")
const tag1overlayLoc = document.querySelector("a[href='#tag1'] .overlay")
const tag2Loc = document.querySelector("#tag2")
const tag2inputsArr = document.querySelectorAll("#tag2 input[type=radio]")
const tag2overlayLoc = document.querySelector("a[href='#tag2'] .overlay")
const tag3Loc = document.querySelector("#tag3")
const tag3inputsArr = document.querySelectorAll("#tag3 input[type=radio]")
const tag3overlayLoc = document.querySelector("a[href='#tag3'] .overlay")
const tag4Loc = document.querySelector("#tag4")
const tag4inputsArr = document.querySelectorAll("#tag4 input[type=radio]")
const tag4overlayLoc = document.querySelector("a[href='#tag4'] .overlay")
const tag5Loc = document.querySelector("#tag5")
const tag5inputsArr = document.querySelectorAll("#tag4 input[type=radio]")
const tag5overlayLoc = document.querySelector("a[href='#tag5'] .overlay")
const tag6Loc = document.querySelector("#tag6")
const tag6inputsArr = document.querySelectorAll("#tag6 input[type=radio]")
const tag6overlayLoc = document.querySelector("a[href='#tag6'] .overlay")
const tag7Loc = document.querySelector("#tag7")
const tag7inputsArr = document.querySelectorAll("#tag7 input[type=radio]")
const tag7overlayLoc = document.querySelector("a[href='#tag7'] .overlay")
const tag8Loc = document.querySelector("#tag8")
const tag8inputsArr = document.querySelectorAll("#tag8 input[type=radio]")
const tag8overlayLoc = document.querySelector("a[href='#tag8'] .overlay")
const tag9Loc = document.querySelector("#tag9")
const tag9inputsArr = document.querySelectorAll("#tag9 input[type=radio]")
const tag9overlayLoc = document.querySelector("a[href='#tag9'] .overlay")
const tag10Loc = document.querySelector("#tag10")
const tag10inputsArr = document.querySelectorAll("#tag10 input[type=radio]")
const tag10overlayLoc = document.querySelector("a[href='#tag10'] .overlay")
const tag11Loc = document.querySelector("#tag11")
const tag11inputsArr = document.querySelectorAll("#tag11 input[type=radio]")
const tag11overlayLoc = document.querySelector("a[href='#tag11'] .overlay")
const tag12Loc = document.querySelector("#tag12")
const tag12inputsArr = document.querySelectorAll("#tag12 input[type=radio]")
const tag12overlayLoc = document.querySelector("a[href='#tag12'] .overlay")

const calculateRealisation = ()=> {
    let percent = 
        Number((document.querySelectorAll("input:checked").length / 
        (inputsRadioArr.length / 4) * 100).toFixed(1))

    progressBarLoc.style.width = percent + "%"
    progressTextLoc.innerText = percent + "%"
}


const calculateRealisationTag1 = ()=> {
    let percent = 
        Number((tag1Loc.querySelectorAll("input:checked").length / 
        (tag1inputsArr.length / 4) * 100).toFixed(1))

        tag1overlayLoc.style.width = percent + "%"
}

const calculateRealisationTag2 = ()=> {
    let percent = 
        Number((tag2Loc.querySelectorAll("input:checked").length / 
        (tag2inputsArr.length / 4) * 100).toFixed(1))

        tag2overlayLoc.style.width = percent + "%"
}

const calculateRealisationTag3 = ()=> {
    let percent = 
        Number((tag3Loc.querySelectorAll("input:checked").length / 
        (tag3inputsArr.length / 4) * 100).toFixed(1))

        tag3overlayLoc.style.width = percent + "%"
}

const calculateRealisationTag4 = ()=> {
    let percent = 
        Number((tag4Loc.querySelectorAll("input:checked").length / 
        (tag4inputsArr.length / 4) * 100).toFixed(1))

        tag4overlayLoc.style.width = percent + "%"
}

const calculateRealisationTag5 = ()=> {
    let percent = 
        Number((tag5Loc.querySelectorAll("input:checked").length / 
        (tag5inputsArr.length / 4) * 100).toFixed(1))

        tag5overlayLoc.style.width = percent + "%"
}


const calculateRealisationTag6 = ()=> {
    let percent = 
        Number((tag6Loc.querySelectorAll("input:checked").length / 
        (tag6inputsArr.length / 4) * 100).toFixed(1))

        tag6overlayLoc.style.width = percent + "%"
}


const calculateRealisationTag7 = ()=> {
    let percent = 
        Number((tag7Loc.querySelectorAll("input:checked").length / 
        (tag7inputsArr.length / 4) * 100).toFixed(1))

        tag7overlayLoc.style.width = percent + "%"
}


const calculateRealisationTag8 = ()=> {
    let percent = 
        Number((tag8Loc.querySelectorAll("input:checked").length / 
        (tag8inputsArr.length / 4) * 100).toFixed(1))

        tag8overlayLoc.style.width = percent + "%"
}


const calculateRealisationTag9 = ()=> {
    let percent = 
        Number((tag9Loc.querySelectorAll("input:checked").length / 
        (tag9inputsArr.length / 4) * 100).toFixed(1))

        tag9overlayLoc.style.width = percent + "%"
}


const calculateRealisationTag10 = ()=> {
    let percent = 
        Number((tag10Loc.querySelectorAll("input:checked").length / 
        (tag10inputsArr.length / 4) * 100).toFixed(1))

        tag10overlayLoc.style.width = percent + "%"
}

const calculateRealisationTag11 = ()=> {
    let percent = 
        Number((tag11Loc.querySelectorAll("input:checked").length / 
        (tag11inputsArr.length / 4) * 100).toFixed(1))

        tag11overlayLoc.style.width = percent + "%"
}

const calculateRealisationTag12 = ()=> {
    let percent = 
        Number((tag12Loc.querySelectorAll("input:checked").length / 
        (tag12inputsArr.length / 4) * 100).toFixed(1))

        tag12overlayLoc.style.width = percent + "%"
}

inputsRadioArr.forEach((elem)=>{
    elem.addEventListener("change", ()=> {
        calculateRealisation()
        calculateRealisationTag1()
        calculateRealisationTag2()
        calculateRealisationTag3()
        calculateRealisationTag4()
        calculateRealisationTag5()
        calculateRealisationTag6()
        calculateRealisationTag7()
        calculateRealisationTag8()
        calculateRealisationTag9()
        calculateRealisationTag10()
        calculateRealisationTag11()
        calculateRealisationTag12()
    })
})

const validateEmpty = (value) => {
    if (!value) return [false, "Błąd: Pole adres e-mail nie może być puste!"]
    return [true, ""]
}

const buttonSendLoc = document.querySelector(".btn.send-form")
const form = document.querySelector(".questions-container")
const sendingLoc = document.querySelector(".sending-box")
const successLoc = document.querySelector(".success-box")
const errorLoc = document.querySelector(".error-box")
const inprogressLoc = document.querySelector(".inprogress-box")
const fullnameInputLoc = document.querySelector("#fullname")

const validateAll = (e) => {
    e.preventDefault()

    const validatePass = validateEmpty(fullnameInputLoc.value)

    console.log("Wysyłam...")
    displayMessageAfterSending(inprogressLoc, "Wysyłam...")

    if (validatePass[0]) {
        grecaptcha.ready(function() {
            grecaptcha.execute("6Lf2hcIpAAAAAO1sgP7bkMbS_dHflAHZV8bG8eFO", {action: "contact"})
            .then(async function(token){
                let recaptchaResponse = document.getElementById("recaptchaResponse")
                recaptchaResponse.value = token
                let response
                response = await fetch("./php/mail.php", {method: "POST", body: new FormData(form)})
                    if (response.ok) {
                        const indexEqual = response.url.indexOf("=")
                        const status = (response.url).substr(indexEqual + 1, response.url.length - indexEqual);

                        if (status === "sent") {
                            console.log("status === 'sent'. E-mail został wysłany")
                            displayMessageAfterSending(successLoc, "Dziękujemy. E-mail wysłany.")
                        } else {
                            console.log("status !== 'sent'. E-mail nie został wysłany")
                            displayMessageAfterSending(errorLoc, "Błąd serwera. E-mail nie został wysłany. Spróbuj ponownie za chwilę!")
                        }
                    } else {
                        console.log("response nie jest ok. E-mail nie został wysłany")
                        displayMessageAfterSending(errorLoc, "Błąd serwera. E-mail nie został wysłany!")

                    }
            }) 
        })

    } else {
        displayMessageAfterSending(errorLoc, "Walidacja nieprawidłowa!")
        console.log("Walidacja nieprawidłowa!")
    }
}

const displayMessageAfterSending = (container, text) => {
    sendingLoc.style.opacity = 0
    const timer1 = setTimeout(()=>{
            sendingLoc.style.display = "none"
            container.style.display = "flex"
            
    },500)
   
    const timer2 = setTimeout(()=>{
        container.style.opacity = 1
    },600)

    container.innerText = text

}

buttonSendLoc.addEventListener("click", validateAll)