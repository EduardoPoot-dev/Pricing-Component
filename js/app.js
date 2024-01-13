const toggle = document.querySelector('.toggle__circle')

toggle.addEventListener('click', e => {
    toggle.classList.toggle('toggle__active')

    if(!toggle.classList.value.includes('toggle__active')) {
        anuallyHTML() 
        return
    }

    monthHTML()
})

function calcAnually() {
    const basicPrice = (19.999 * 10).toFixed(2)
    const professionalPrice = (24.999 * 10).toFixed(2)
    const masterPrice = (39.999 * 10).toFixed(2)

    return {
        basicPrice,
        professionalPrice,
        masterPrice
    }
}

const basic = document.querySelector('#basic')
const professional = document.querySelector('#professional')
const master = document.querySelector('#master')

function anuallyHTML() {
    const {basicPrice, professionalPrice, masterPrice} = calcAnually()

    basic.innerHTML = `&dollar;${basicPrice}`
    professional.innerHTML = `&dollar;${professionalPrice}`
    master.innerHTML = `&dollar;${masterPrice}`
}

function monthHTML() {
    basic.innerHTML = `&dollar;19.99`
    professional.innerHTML = `&dollar;24.99`
    master.innerHTML = `&dollar;39.99`
}
