let svetofor = prompt("Which color?")
switch (svetofor) {
    case "red":
        document.getElementsByClassName('red')[0].style.background = "red";
        alert("STOP!");
    break;
    case "yellow":
        document.getElementsByClassName('yellow')[0].style.background = "yellow";
        alert("Get ready");
    break;
    case "grean":
        document.getElementsByClassName('green')[0].style.background = "green";
        alert("Go");
    break;
    default:
        alert('error')
}