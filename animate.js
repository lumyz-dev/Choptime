// grade checker
let grade = 45;

if (grade < 50) {
  document.getElementById("pass").textcontent = "You fail";
} else {
  document.getElementById("pass").textcontent = "You pass";
}


// log-in checker
let info = {
  username: "pelumi",
  password: "elt",
};
let input = {
  username: "pelumi",
  password: "elt",
};
if (info.password === input.password && info.username === input.username) {
  document.getElementById("available").textContent = "logged-in";
} else {
  document.getElementById("available").textContent = "logged-out";
}
