function submitQuiz() {
    // Initialize score
    let score = 0;
    let totalQuestions = 4;
    let results = document.getElementById('results');
    
    // Check answers for Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'b') {
      score++;
    }
  
    // Check answer for Question 2
    let q2 = document.getElementById('q2').value.trim();
    if (q2.toLowerCase() === 'secure') {
      score++;
    }
  
    // Check answers for Question 3
    let q3 = document.querySelectorAll('input[name="q3"]:checked');
    let correctQ3Answers = ['a', 'b', 'd']; // Correct options for Q3
    let q3Score = Array.from(q3).every(input => correctQ3Answers.includes(input.value));
    if (q3Score && q3.length === correctQ3Answers.length) {
      score++;
    }
  
    // Check answer for Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'a') {
      score++;
    }
  
    // Display results
    results.innerHTML = `
      <h3>Your Score: ${score} / ${totalQuestions}</h3>
      <p>${score >= 3 ? "You passed the quiz!" : "You failed the quiz. Try again!"}</p>
      <h4>Answers:</h4>
      <ul>
        <li>Q1: Correct answer is B.</li>
        <li>Q2: Correct answer is "secure".</li>
        <li>Q3: Correct answers are A, B, and D.</li>
        <li>Q4: Correct answer is A.</li>
      </ul>
    `;
  }
  
  function restartQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('results').innerHTML = '';
  }