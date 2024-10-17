

const btn =document.querySelector('#change-color-btn')
const colorBox =document.querySelector('#color-box')
const display =document.querySelector('#display')





btn.addEventListener('click', ()=>{
    colorBox.style.backgroundColor = getRandomColor()
    display.innerHTML = getRandomColor()
})




const getRandomColor =()=>{
    let r = Math.floor(Math.random() * 255) +1
    let g = Math.floor(Math.random() * 255) +1
    let b = Math.floor(Math.random() * 255) +1

    return `rgb(${r}, ${g}, ${b})`

}
