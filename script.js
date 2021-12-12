imgSelector = document.querySelector('.hamburgerMenu');
ULSelector = document.querySelector('#hamburgerMenuUL')

colorRedSelector = document.querySelector('#redColor')
colorGreenSelector = document.querySelector('#greenColor')
colorPinkSelector = document.querySelector('#pinkColor')
colorWhiteSelector = document.querySelector('#whiteColor')

let changBackGroundColor = function (color) {
    document.body.className = "";
    document.body.classList.add(color);
    ULSelector.classList.remove('visible')
}

imgSelector.addEventListener("click", () => {
    ULSelector.classList.toggle('visible')
})

colorRedSelector.addEventListener("click", () => {
    changBackGroundColor("red")
})
colorGreenSelector.addEventListener("click", () => {
    changBackGroundColor("green")
})
colorPinkSelector.addEventListener("click", () => {
    changBackGroundColor("pink")
})
colorWhiteSelector.addEventListener("click", () => {
    changBackGroundColor("white")
})

let changeColorKey = function (e) {
    console.log(e.key)
    if (e.key == '1') {
        changBackGroundColor("white");
    }
    if (e.key == '2') {
        changBackGroundColor("red");
    }
    if (e.key == '3') {
        changBackGroundColor("green");
    }
    if (e.key == '4') {
        changBackGroundColor("pink");
    }
}

document.addEventListener('keydown', changeColorKey)