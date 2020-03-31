let today = new Date(),
    currentDate = today.getDate(),
    currentMonth = today.getMonth(),
    currentYear = today.getFullYear();
let k3 = [20, 22, 23, 28, 29, 30],
    k10 = [10, 12, 13, 14, 15, 16, 17, 18, 19, 31],
    k13 = [11];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let firstDay = new Date(currentYear, currentMonth, 1).getDay();
let firstDayWeekday = firstDay == 0 ? 7 : firstDay;
let monthLength = 32 - new Date(currentYear, currentMonth, 32).getDate();
let html = '<h2 class="year">' + currentYear + '</h2>';
html += '<h2 class="month">' + months[currentMonth] + '</h2>';
html += '<table><thead><tr>';
for (let i = 0; i <= 6; i++) html += '<td>' + days[i].substring(0, 1) + '</td>';
html += '</tr></thead>';
let day = 1;
html += '<tbody><tr>';
for (let i = 0; i < 7; i++) {                                           // weeks loop (rows)
    for (let j = 1; j < 8; j++) {                                       // weekdays loop (cells)
        if (day <= monthLength && (i > 0 || j >= firstDayWeekday)) {    // day in current month
            if (k3.includes(day)) {
                if (day == currentDate) html += '<td class="today k3">';
                else html += '<td class="k3">';
            }
            else if (k10.includes(day)) {
                if (day == currentDate) html += '<td class="today k10">';
                else html += '<td class="k10">';
            }
            else if (k13.includes(day)) {
                if (day == currentDate) html += '<td class="today k13">';
                else html += '<td class="k13">';
            }
            else {
                if (day == currentDate) html += '<td class="today">';
                else html += '<td>';
            }
            html += day++ + '</td>';
        }
        else html += '<td></td>';                                       // day in previous/next month
    }
    if (day > monthLength) {
        html += '</tr>';
        break;
    }
    else html += '</tr><tr>';
}
html += '</tbody></table>';
document.getElementById('calendar').innerHTML = html;
document.title = days[(today.getDay() + 1) % 7];
window.addEventListener('load', (event) => {
    document.body.classList.add('ready');
});
