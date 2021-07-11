function loadMonthlyGoal(goalsFile){
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open('GET', goalsFile, true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const type = request.getResponseHeader('Content-Type');
      if (type.indexOf("text") !== 1) {
        let goalNumber = request.responseText;
        goalNumber = Math.round(goalNumber*100)/100;
        goalNumber /= 2;
        document.getElementById("monthlyGoalProgress").style.width = Math.min(100,goalNumber)+"%"
        document.getElementById("monthlyGoalProgress").innerText = Math.round(goalNumber)+"%"
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", function(event) { 
  //Not using template literals for IE compatibility
  const currentDate = new Date()
  const goalsFile = "/store/goals/" + currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + ".txt"
  loadMonthlyGoal(goalsFile);
});