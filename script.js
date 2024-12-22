//Questions
const questions = [
    {
      question: "What is the capital of USA?",
      options: ["Washington DC", "London", "Berlin", "Madrid"],
      correct: 0, 
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Earth", "Mercury", "Jupiter", "Saturn"],
      correct: 1, 
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3, 
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to load the current question
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    
    //Generate the options
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';
    questionData.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.textContent = option;
      li.onclick = () => selectOption(index);
      optionsList.appendChild(li);
    });
  }
  
  // option selection
  function selectOption(index) {
    const options = document.querySelectorAll('#options li');
    options.forEach(option => option.classList.remove('selected')); 
    options[index].classList.add('selected'); 
  
    // Enable the "Next Question" button after selection of option
    document.getElementById('next-button').disabled = false;
  
    // Check if the selected option is correct
    if (index === questions[currentQuestionIndex].correct) {
      score++;
    }
  }
  
  // Go to next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      document.getElementById('next-button').disabled = true; 
    } else {
      showScore();
    }
  }
  
  // score page
  function showScore() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').textContent = score + ' / ' + questions.length;
  }
  
  // Restart button
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'inline-block';
    document.getElementById('score-container').style.display = 'none';
    loadQuestion();
    document.getElementById('next-button').disabled = true; 
  }
  
  
  loadQuestion();
  