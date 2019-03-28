const months = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
  'MAY', 'JUNE', 'JULY', 'AUGUST',
  'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

const startOfMonth2019 = [ 2, 5, 5, 1, 3, 1, 1, 4, 0, 2, 5, 0 ];
const daysInMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

let now = new Date();
let month = now.getMonth();
const today = now.getDate();


const highlightTodaysDate = () => {
    let days = [...document.querySelectorAll('.day')];
    document.querySelector('.month-text').innerHTML = months[month];
    for (let i = 0; i < days.length; i++) {
        if (i === today) {
           document.querySelectorAll('.day')[i+startOfMonth2019[month]-1].style.backgroundColor = '#50C4FE';
        }
    }
}


(() => {
    let num = -Math.abs(startOfMonth2019[month]);
    // let blank = startOfMonth2019[month];
    let days = [...document.querySelectorAll('.day p')];
    days = days.map(e => {
        num += 1;
        if (num > 0 && num < daysInMonth[month]+1) {
            return e.innerHTML = num;
        }
    });
    highlightTodaysDate();
})();


const displayNext = () => {
    month += 1;
    if (month > 11) {
        month = 11;
    }
    document.querySelector('.month-text').innerHTML = months[month];
}

const displayPrevious = () => {
    month -= 1;
    if (month < 0) {
       month = 0;
    }
    document.querySelector('.month-text').innerHTML = months[month];
}


const setDarkTheme = () => {
    const arrow = document.querySelectorAll('.arrow.left, .arrow.right');
    for (let i = 0; i < 2; i++) {
        arrow[i].style.color = '#FFFFFF';
    }
    document.querySelector('body').style.backgroundColor = '#232323';
    document.querySelector('body').style.color = '#FFFFFF';
    let weekends = document.getElementsByClassName('weekend');
    for (let i = 0; i < weekends.length; i++) {
        weekends[i].style.backgroundColor = '#454545';
    }
    highlightTodaysDate();
}


const setLightTheme = () => {
    const arrow = document.querySelectorAll('.arrow.left, .arrow.right');
    for (let i = 0; i < 2; i++) {
        arrow[i].style.color = '#111111';
    }
    document.querySelector('body').style.backgroundColor = '#FFFEEE';
    document.querySelector('body').style.color = '#111111';
    let weekends = document.getElementsByClassName('weekend');
    for (let i = 0; i < weekends.length; i++) {
        weekends[i].style.backgroundColor = '#ECECEC';
    }
    highlightTodaysDate();
}
