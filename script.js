let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);


//----------------------------------------------------------
function nextPg() {
	var answer1 = document.getElementById("answer1").value;
	if (answer1.toLowerCase() == "joker") {
		window.location.assign("level2.html");
		alert("Correct!");
	} else {
		alert("Incorrect!");
		return;
	}
}

//----------------------------------------------------------
function finalPg() {
  var password = document.getElementById("password").value;
  if (password.toLowerCase() == "password") {
    window.location.assign("congrats.html");
  } else {
    alert("Incorrect!");
    window.location.assign("level2.html");
    return;
  }
}