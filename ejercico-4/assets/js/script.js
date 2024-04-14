/* Div 1 */

const elementodiv1 = document.getElementById("div1")
const pintardiv1 = (element) => element.style.backgroundColor = 'black'
elementodiv1.addEventListener("click", () => pintardiv1(elementodiv1))

/* Div 2 */
const elementodiv2 = document.getElementById("div2")
const pintardiv2 = (element) => element.style.backgroundColor = 'black'
elementodiv2.addEventListener("click", () => pintardiv2(elementodiv2))

/* Div 3 */
const elementodiv3 = document.getElementById("div3")
const pintardiv3 = (element) => element.style.backgroundColor = 'black'
elementodiv3.addEventListener("click", () => pintardiv3(elementodiv3))

/* Div 4 */
const elementodiv4 = document.getElementById("div4")
const pintardiv4 = (element) => element.style.backgroundColor = 'black'
elementodiv4.addEventListener("click", () => pintardiv4(elementodiv4))

/* Div 5 */

document.addEventListener('keydown', function (event) {
    elementodiv5 = document.getElementById("key")
    if (event.key === 'a') {elementodiv5.style.backgroundColor = 'pink'}
    else if (event.key === 's') {elementodiv5.style.backgroundColor = 'orange'} 
    else if (event.key === 'd') {elementodiv5.style.backgroundColor = 'skyblue'} 
})


/* Div 6 */

document.addEventListener('keydown', function (event) {
    elementodiv6 = document.getElementById("div6")
    if (event.key === 'q') {
        elementodiv6.style.backgroundColor = 'purple'
        elementodiv6.style.width = '200px'
        elementodiv6.style.height = '200px'
    }
    else if (event.key === 'w') {
        elementodiv6.style.backgroundColor = 'gray'
        elementodiv6.style.width = '200px'
        elementodiv6.style.height = '200px'
    }
    else if (event.key === 'e') {
        elementodiv6.style.backgroundColor = '#804000'
        elementodiv6.style.width = '200px'
        elementodiv6.style.height = '200px'
    }
})



















