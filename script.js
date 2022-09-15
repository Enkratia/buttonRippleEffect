const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {
  button.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripple = document.createElement("span");
    this.appendChild(ripple);
    ripple.style.left = x + "px";
    ripple.style.top = `${y}px`;
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
})