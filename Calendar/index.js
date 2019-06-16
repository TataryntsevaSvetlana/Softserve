const currentMonth = new Date();
currentMonth.setDate(1);
const activeDay = new Date();

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
    renderCalendar(firstDayCurrentMonth);
    calendar.addEventListener('click', onCalendarClick);
}

function onCalendarClick(event) {
    if (event.target.classList.contains('button-left')) {
        activeDay.setDate(activeDay.getDate() - 1);
        if (document.querySelector('.activeDay').previousSibling === null){
            currentMonth.setMonth(currentMonth.getMonth() - 1);
            const firstDayPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);

            renderCalendar(firstDayPrevMonth);
        } else {
            selectDay('prev');
        }
    }
    if (event.target.classList.contains('button-right')) {
        activeDay.setDate(activeDay.getDate() + 1);
        if (document.querySelector('.activeDay').nextSibling === null ){
            currentMonth.setMonth(currentMonth.getMonth() + 1);
            const firstDayNextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);

            renderCalendar(firstDayNextMonth);
        } else {
            selectDay('next');
        }
    }
    if (event.target.classList.contains('button-up')) {
        const firstDayPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        activeDay.setMonth(currentMonth.getMonth() - 1);
        activeDay.setDate(1);
        renderCalendar(firstDayPrevMonth);
    }
    if (event.target.classList.contains('button-down')) {
        const firstDayNextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        activeDay.setMonth(currentMonth.getMonth() + 1);
        activeDay.setDate(1);

        renderCalendar(firstDayNextMonth);
    }
}

function selectDay(position) {
    const currentActiveDayEl = document.querySelector('.activeDay');
    let day;

    if (position === 'next') {
        day = currentActiveDayEl.nextElementSibling;
    } else {
        day = currentActiveDayEl.previousSibling;
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

function renderCalendar(firstDayOfMonth) {
    const QUANTITY_OF_CELLS_WITH_DATES_IN_CALENDAR = 42;

    let dayInWeekNumber = firstDayOfMonth.getDay();
    if (dayInWeekNumber === 0) {
        dayInWeekNumber = 6;
    } else {
        dayInWeekNumber -= 1;
    }

    const calendarBox = document.createElement('div');
    calendarBox.classList.add('calendarBox');

    for (let i = 0; i < QUANTITY_OF_CELLS_WITH_DATES_IN_CALENDAR; i++) {
        const currentCellDate = new Date(firstDayOfMonth); // 1 июня

        currentCellDate.setDate(firstDayOfMonth.getDate() - dayInWeekNumber + i); // 27 мая
        const currentCell = document.createElement('div'); // создали див

        currentCell.innerText = currentCellDate.getDate();// впсали 27 мая
        currentCell.classList.add('day');

        if (currentCellDate.getMonth() === firstDayOfMonth.getMonth()) {
            currentCell.classList.add('activeMonth');

            if (currentCellDate.getDate() === activeDay.getDate()) {
                currentCell.classList.add('activeDay');
            }
        }

        const sameDay = today.getDate() === currentCellDate.getDate();
        const sameMonth = today.getMonth() === currentCellDate.getMonth();
        const sameYear = today.getFullYear() === currentCellDate.getFullYear();

        if (sameDay && sameMonth && sameYear) {
            currentCell.classList.add('currentDay');
        }

        calendarBox.appendChild(currentCell);
    }
    const currentCalendar = document.querySelector('.calendarBox');
    if (currentCalendar) {
        currentCalendar.parentNode.removeChild(currentCalendar);
    }

    document.querySelector('.main').appendChild(calendarBox);
    const yyyy = currentMonth.toLocaleString('ru', {year: 'numeric'});
    const mm = currentMonth.toLocaleString('ru', {month: 'long'});
    renderCurrentMonth(mm, yyyy);
}

function renderCurrentMonth(mm, yyyy) {
    const currentMonthEl = document.getElementById('currentMonth');
    currentMonthEl.innerHTML = `${mm} ${yyyy}`;
}
