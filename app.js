function age_finder() {
    let currentYear = 2024;
    let birthYear = +prompt("enter your birth year :");
    let age = currentYear - birthYear;
    Swal.fire(`Your age is ${age}`);
}