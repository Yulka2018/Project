export default function today(){
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth() + 1;
    let currYear = d.getFullYear();
    return currYear + "-" + ((currMonth < 10) ? '0' + currMonth : currMonth) + "-" + ((currDate < 10) ? '0' + currDate : currDate).toLocaleString();
} 