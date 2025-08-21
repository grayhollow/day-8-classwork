const name = prompt("Enter your name here:");
const age = prompt("Enter your age here");

const age1 = parseInt(age)


function checkage(age) {
if (age >= 18){
    return alert("Hello, " + name + ". You can drive.");
} else if (age < 18){
    return alert("Hello, " + name + ". You cannot drive.")
}
}

checkage(age);