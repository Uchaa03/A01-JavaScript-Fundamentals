let password;

do {
    password = prompt("Enter a password");
    password !== '1234'? alert("Incorrect password, try again"): alert("You enter in the system");
}while (password !== '1234');

