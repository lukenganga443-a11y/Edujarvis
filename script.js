function getStarted() {
  document.querySelector(".demo").scrollIntoView({ behavior: "smooth" });
}

function askQuestion() {
  let question = document.getElementById("question").value;

  if (question === "") {
    document.getElementById("response").innerHTML = "Please enter a question.";

    return;
  }

  document.getElementById("response").innerHTML =
    "<strong>Question:</strong> " +
    question +
    "<br><br><strong>EduJarvis:</strong> This is where the AI answer will appear.";
}

function explainSimple() {
  document.getElementById("response").innerHTML =
    "Imagine you're explaining the topic to a 10-year-old. Simple words, simple ideas.";
}

function giveExamples() {
  document.getElementById("response").innerHTML =
    "Example 1: Real-life example.<br><br>Example 2: Another practical example.";
}

function quizMe() {
  document.getElementById("response").innerHTML =
    "Quiz:<br><br>1. What is the main idea of this topic?<br>2. Can you explain it in your own words?";
}
