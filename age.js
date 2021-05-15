let currentYear = new Date(); //khai báo
let year = currentYear.getFullYear();

let yearBirth = +prompt("Nhập vào năm sinh của bạn: ");

age = year - yearBirth;

alert("Tuổi của bạn là: " + age);