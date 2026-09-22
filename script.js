const button = document.getElementById("changeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Button clicked! JavaScript is working 🎉";
  message.style.color = "green";
});
