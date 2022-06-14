let leadsAmount = 1
let users = []
let phoneNumbers = []
let zoomLink = ''
let isSetup = true
let instructorName = 'דניאל'
const elMenu = document.querySelector('.menu')
const elSetup = document.querySelector('.setup')
const elWp = document.querySelector('.dashboard-wp')
const elMail = document.querySelector('.dashboard-mail')


document.querySelector('.menu-btn-dash').addEventListener('click', () => switchView('.dashboard-mail'))
document.querySelector('.menu-btn-setup').addEventListener('click', () => switchView('.setup'))
document.querySelector('.btn-setup').addEventListener('click', () => onSetup())
document.querySelector('.copy-btn').addEventListener('click', () => copyToClipboard())

function oninit() {
    console.log('oninit')
}

let leadMsg = `היי,%0a
זו מוריה מקודינג אקדמי.%0a

היית איתנו בקשר בנוגע לקורס הבוטקאמפ שלנו - קורס תכנות פולסטאק.%0a
%0a
רצינו לעדכן שהקורס הקרוב יתחיל אוטוטו ב 3.7  וההרשמה בעיצומה.%0a
%0a
מזמינה אותך להצטרף למפגש הכרות שיערך הערב ב 18:00 דרך ה zoom.%0a
במפגש אפשר יהיה לשמוע פרטים על הקורס ולחוות שיעור תכנות קצר כדי להבין קצת יותר מה אנחנו עושים :)%0a

%0a
לינק למפגש הערב בשש:%0a
%0a
https://us02web.zoom.us/j/85455383547?pwd=RnZFcmdZZmF3U3U5dkhlek5SUkVtZz09 %0a
%0a

נשמח לראותך ולסייע בכל שאלה כאן בווצאפ או בשיחת טלפון,%0a
%0a
מוריה וצוות קודינג אקדמי`

console.log(leadMsg)


function createelPhoneInputs() {

    strHTML = '<form   onsubmit="onSendMsg(event)"> <h5>Lead Phone number:</h5>'
    for (let i = 0; i < leadsAmount; i++) {
        strHTML += `<input class="phone-number" placeholder="lead phone..."/>`
    }

    // strHTML += `<div class="leads-names"> <h5>Lead name:</h5>`
    // for (let i = 0; i < leadsAmount; i++) {
    //     strHTML += `<input class="lead-name" placeholder="lead name..."/>`
    // }
    // strHTML += `</div>`

    strHTML += `<button class="send-btn"><img class="img-send" src="./images/send.png"></button>`

    const elContainer = document.querySelector('.dashboard-wp');
    elContainer.innerHTML = strHTML;
}


function onSetup(event) {

    console.log('ho');
    leadsAmount = document.querySelector('.leads-number').value
    // zoomLink = document.querySelector('.zoom-link').value
    isSetup = false
    createelPhoneInputs()
    switchView('.dashboard-wp')
}

function toggleView() {
    document.querySelector('.dashboard').classList.remove('hide')
    document.querySelector('.setup').classList.add('hide')
    createelPhoneInputs()
}

function onSendMsg(ev) {
    ev.preventDefault()
    const elPhoneInputs = document.querySelectorAll('.phone-number');
    const elLeadsInputs = document.querySelectorAll('.lead-name')
    phoneNumbers = Array.from(elPhoneInputs).map(input => input.value)
    users = Array.from(elLeadsInputs).map(input => input.value)

    sendWp(phoneNumbers, users)


}

function switchView(cls) {
    hideAll()
    document.querySelector(`${cls}`).hidden = false
}

function sendWp(phoneNumbers, leadsName) {
    for (let i = 0; i < phoneNumbers.length; i++) {
        console.log('leadMsg', leadMsg)
        const correctPhoneNum = phoneNumbers[i].split('-').join('').slice(1, phoneNumbers[i].length)
        window.open(`https://wa.me/+972${correctPhoneNum}?text=${leadMsg}`, "_blank")
    }
    switchView('.copy-container')
}

document.querySelector('.phone-number')?.addEventListener('submit', (ev) => {
    const { value } = ev.target

    if (!value) return
    const correctPhoneNum = value.split('-').join('').slice(1, value.length)
    window.open(`http://wa.me/+972${correctPhoneNum}`, "_blank")
        `https://wa.me/972?text=urlencodedtext`
})

document.querySelector('.send-first-gmail')?.addEventListener('submit', (ev) => {
    const { value } = ev.target[0]
    if (!value) return
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=codingacademy@misterbit.co.il&su=${value} הרשמה לערב פתוח&tf=1`, "_blank")
})

function hideAll() {
    elMail.hidden = true
    elMenu.hidden = true
    elSetup.hidden = true
    elWp.hidden = true
}


function copyToClipboard() {
    var copyText = document.getElementById("content").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
}