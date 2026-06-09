function askQuestion() {
  let question = document.getElementById("question").value;

  if (question === "") {
    document.getElementById("response").innerHTML = "Please enter a question.";

    return;
  }

  document.getElementById("response").innerHTML =
    "Question: " + question + "<br><br>EduJarvis: AI integration coming soon.";
}

function explainSimple() {
  document.getElementById("response").innerHTML =
    "Simple explanation mode activated.";
}

function giveExamples() {
  document.getElementById("response").innerHTML =
    "Example 1...<br><br>Example 2...";
}

function quizMe() {
  document.getElementById("response").innerHTML =
    "Quiz:<br><br>1. What did you learn?<br>2. Explain it in your own words.";
}
