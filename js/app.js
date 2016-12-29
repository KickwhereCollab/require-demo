define(function (require) {
  var button = document.createElement("button");
  button.onclick = function () {
    var alerter = require(["alerter"], function (alerter) {
      alerter("from inside app");

    });
  };
  button.textContent = "Click to load the alert";

  document.body.appendChild(button);
});
