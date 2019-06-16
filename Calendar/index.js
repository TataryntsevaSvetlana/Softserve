const currentMonth = new Date();
let activeDay = new Date();

const today = new Date();
today.setHours(0);
today.setMinutes(0);
const yyyy = today.toLocaleString('ru', {year: 'numeric'});
const mm = today.toLocaleString('ru', {month: 'long'});
const dd = today.toLocaleString('ru', {day: 'numeric'});


const calendar = document.getElementById('calendar');

init();

function init() {
    const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    renderClock();
    renderCurrentDate(dd, mm, yyyy);
    renderCalendar(firstDayCurrentMonth, today);
    calendar.addEventListener('click', onCalendarClick);
}

function onCalendarClick(event) {
    if (event.target.classList.contains('button-left')) {
        if (document.querySelector('.activeDay').previousSibling === null ){
            const firstDayPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
            currentMonth.setMonth(currentMonth.getMonth() - 1);
            renderCalendar(firstDayPrevMonth,  activeDay);
        }
        selectDay('prev');
    }
    if (event.target.classList.contains('button-right')) {
        if ( document.querySelector('.activeDay').nextSibling === null ){
            const firstDayNextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
            currentMonth.setMonth(currentMonth.getMonth() + 1);
            renderCalendar(firstDayNextMonth, activeDay);
        }
        selectDay('next');
    }
    if (event.target.classList.contains('button-up')) {
        const firstDayPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        renderCalendar(firstDayPrevMonth, firstDayPrevMonth);
    }
    if (event.target.classList.contains('button-down')) {
        const firstDayNextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        renderCalendar(firstDayNextMonth, firstDayNextMonth);
    }
}

function selectDay(position) {
    const currentActiveDay = document.querySelector('.activeDay');
    let day;

    if (position === 'next') {
        day = currentActiveDay.nextElementSibling;
        activeDay.setDate(activeDay.getDate() + 1);
        // console.log('activeDay', activeDay);
    } else {
        day = currentActiveDay.previousSibling;
        activeDay.setDate(activeDay.getDate() - 1);
        // console.log('activeDay', activeDay);
    }

    document.querySelector('.activeDay').classList.remove('activeDay');
    day.classList.add('activeDay');

}


function renderClock() {
    const clockEl = document.getElementById('clock');

    let timer = setTimeout(function tick() {
        const date = new Date;
        const h = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        min = checkTime(min);
        sec = checkTime(sec);
        clockEl.innerHTML = `${h}:${min}:${sec}`;

        timer = setTimeout(tick, 500);
    }, 500);
}

function checkTime(num) {
    return num < 10 ? '0' + num : num;
}

function renderCurrentDate(dd, mm, yyyy) {
    const currentDateEl = document.getElementById('currentDate');
    currentDateEl.innerHTML = `${dd} ${mm} ${yyyy} г.`;
}

function renderCalendar(firstDayOfMonth, selectedDay) {
    const QUANTITY_OF_CELLS_WITH_DATES_IN_CALENDAR = 42;

    let dayInWeekNumber = firstDayOfMonth.getDay();
    if (dayInWeekNumber === 0) {
        dayInWeekNumber = 6;
    } else {
        dayInWeekNumber -= 1;
    }

    const div = document.createElement('div');
    div.classList.add('calendarBox');
    for (let i = 0; i < QUANTITY_OF_CELLS_WITH_DATES_IN_CALENDAR; i++) {
        const currentCellDate = new Date(firstDayOfMonth); // 1 июня
        currentCellDate.setDate(firstDayOfMonth.getDate() - dayInWeekNumber + i); // 27 мая
        const currentCell = document.createElement('div'); // создали див

        currentCell.innerText = currentCellDate.getDate();// впсали 27 мая
        currentCell.classList.add('day');

        if (currentCellDate.getMonth() === firstDayOfMonth.getMonth()) {
            currentCell.classList.add('activeMonth');

            if (currentCellDate.getDate() === selectedDay.getDate()) {
                currentCell.classList.add('activeDay');
            }
        }

        const sameDay = today.getDate() === currentCellDate.getDate();
        const sameMonth = today.getMonth() === currentCellDate.getMonth();
        const sameYear = today.getFullYear() === currentCellDate.getFullYear();

        if (sameDay && sameMonth && sameYear) {
            currentCell.classList.add('currentDay');
        }

        div.appendChild(currentCell);
    }
    const currentCalendar = document.querySelector('.calendarBox');
    if (currentCalendar) {
        currentCalendar.parentNode.removeChild(currentCalendar);
    }

    document.querySelector('.main').appendChild(div);
    const yyyy = currentMonth.toLocaleString('ru', {year: 'numeric'});
    const mm = currentMonth.toLocaleString('ru', {month: 'long'});
    renderCurrentMonth(mm, yyyy);
}

function renderCurrentMonth(mm, yyyy) {
    const currentMonthEl = document.getElementById('currentMonth');
    currentMonthEl.innerHTML = `${mm} ${yyyy}`;
}
