// Your code goes here
const signUpButtons = document.querySelectorAll('.btn')

// event type 1 'click' on all of the sign up buttons
Array.from(signUpButtons).forEach((el) => el.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    alert('Glad you would like to sign up!')
}))

// event type 2 'mouseover' on all of the nav items
const navLinks = document.querySelectorAll('.nav-link')
Array.from(navLinks).forEach((el) => el.addEventListener('mouseover', (e) => {
    e.target.style.color = 'red'
}))
Array.from(navLinks).forEach((el) => el.addEventListener('click', (e) => {
    // preventing nav items from refreshing the page
    e.preventDefault()
}))

// event type 3 'mouseout' on all of the nav items
Array.from(navLinks).forEach((el) => el.addEventListener('mouseout', (e) => {
    e.target.style.color = 'black'
}))

// event type 4 'dblclick' on all of the imgs
// double click img to make it small then again to make it its original size
const imgs = document.querySelectorAll('img')
Array.from(imgs).forEach((el) => el.addEventListener('dblclick', (e) => {
    if (e.target.width === 90){
        e.target.setAttribute('width', null)
    } else {
        e.target.setAttribute('width', 90)
    }
}))

// event type 5 'scroll' on the document to change to dark mode
document.addEventListener('scroll', e => {
    e.target.body.style.backgroundColor = '#000'
    e.target.body.style.color = '#fff'
})

// event type 6 'keydown' on the document object for key all keys
document.addEventListener('keydown', e => {
    alert(`you pressed ${e.key}`)
})

// event type 7 'select' on all h2s
const h2s = document.querySelectorAll('h2')
Array.from(h2s).forEach(el => el.addEventListener('select', e => {
    alert(e.target)
}))

// event type 8 'wheel' on all imgs - flip images with scroll wheel
Array.from(imgs).forEach(el => el.addEventListener('wheel', e => {
    e.preventDefault()
    let scale = 0
    scale += e.deltaY * -0.01;

    // Apply scale transform
    e.target.style.transform = `scale(${scale})`;
}))

// event type 9 'load' on the window
window.addEventListener('load', (e) => {
    alert('Welcome!')
})

// event type 10 'contextmenu' on all divs
const divs = document.querySelectorAll('div')
Array.from(divs).forEach(el => el.addEventListener('contextmenu', e => {
    alert('you just right clicked')
}))

// event will not be fired when sign up buttons are clicked, prevented propagation on line 6 
Array.from(divs).forEach(el => el.addEventListener('click', e => { 
    alert('you just clicked on a div')
}))

