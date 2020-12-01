// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function () {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function (event) {
      let isReady = confirm("Confirm that the shuttle is ready for takeoff.");
      if (isReady === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        document.getElementById("shuttleBackground").style.backgroundColor =
          "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000;
      }
    });
    