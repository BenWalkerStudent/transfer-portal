//selectors
let month = document.querySelector('#month')

let dayOfMonth = document.querySelector('#dayOfMonth')

let day = document.querySelector('#day')

let year = document.querySelector('#year')

let time = document.querySelector('#time')

//date pullers

let currentMonth = new Date().getMonth();

let currentDay = new Date().getDay();

let dayOfMonthSelector = new Date().getDate()

let lastDigit = dayOfMonthSelector % 10

let currentYear = new Date().getFullYear()

let currentTime = new Date().getTime


//change innerHTML


//changes day of the month
switch (lastDigit) {

    case 1:

        dayOfMonth.innerHTML = `${dayOfMonthSelector}st`

            ;

    case 2:

        dayOfMonth.innerHTML = `${dayOfMonthSelector}nd`

            ;

    case 3:

        dayOfMonth.innerHTML = `${dayOfMonthSelector}rd`

            ;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
        dayOfMonth.innerHTML = `${dayOfMonthSelector}th`

            ;







}


//changes the day of the week on the calendar
switch (currentDay) {

    case 1:

        document.querySelector('#day').textContent = 'Mon'

        break;

    case 2:

        document.querySelector('#day').textContent = 'Tue'

        break;

    case 3:

        document.querySelector('#day').textContent = 'Wed'

        break;

    case 4:

        document.querySelector('#day').textContent = 'Thur'

        break;

    case 5:

        document.querySelector('#day').textContent = 'Fri'

        break;

    case 6:

        document.querySelector('#day').textContent = 'Sat'

        break;

    case 7:

        document.querySelector('#day').textContent = 'Sun'

        break;

}


//changes month on the calander
switch (currentMonth) {

    case 0:

        month.textContent = 'January'

        break;

    case 1:

        month.textContent = 'Febuary'

        break;

    case 2:

        month.textContent = 'March'

        break;

    case 3:

        month.textContent = 'April'

        break;

    case 4:

        month.textContent = 'May'

        break;

    case 5:

        month.textContent = 'June'

        break;

    case 6:

        month.textContent = 'July'

        break;

    case 7:

        month.textContent = 'August'

        break;

    case 8:

        month.textContent = 'September'

        break;

    case 9:

        month.textContent = 'October'

        break;

    case 10:

        month.textContent = 'November'

        break

    case 11:

        month.textContent = 'December'

        break;

}

//card work 
let cardList = document.querySelector('.cards')
let cards = []

cards.map((cardList) => {

cardsList+=`${card.title}`

})