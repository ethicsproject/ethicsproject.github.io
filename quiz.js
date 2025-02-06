// Store Quiz Questions
const quizData = {
    "utilitarianism": [
        { // Question 1
            question: "Who was a key philosopher behind utilitarianism?",
            options: ["Immanuel Kant", "John Stuart Mill", "Ruth Benedict", "Karl Marx"],
            correct: 1
        },
        { // Question 2
            question: "Who can determine whether pleasures are of higher or lower nature?",
            options: ["Those who experienced both kinds of pleasure", "Those who have more money", "Those who are older", "An expert on the Soviet Onion"],
            correct: 0
        },
        { // Question 3
            question: "Fill in the blank: “Better _____ than a fool satisfied”",
            options: ["American", "Dead", "Socrates Dissatisfied", "Broke and Lost"],
            correct: 2
        }
    ],
    "paternalism": [
        { // Question 1
            question: "Which right does paternalism argue is sometimes less important than other concerns?",
            options: ["Freedom", "Property", "The right to wear socks with sandals", "Life"],
            correct: 0
        },
        { // Question 2
            question: "Where is paternalism commonly applied?",
            options: ["At Mile Market 45", "Friendship", "Petting a dog", "Government policies"],
            correct: 3
        },
        { // Question 3
            question: "Which philosopher is often associated with paternalism?",
            options: ["John Locke", "John Stuart Mill", "Thomas Hobbes", "A talking toaster giving life advice"],
            correct: 2
        }
    ],
    "moral-rights": [
        { // Question 1
            question: "What are the two main types of moral rights?",
            options: ["Positive and negative", "Left and right", "Given and taken", "The right to unlimited pizza and the right to complain about it"],
            correct: 0
        },
        { // Question 2
            question: "Which of these is least likely to be considered a moral right?",
            options: ["Right to life", "Right to free speech", "Right to truth", "The right to legally declare yourself correct in every debate"],
            correct: 3
        },
        { // Question 3
            question: "Which philosopher is most closely linked to moral rights?",
            options: ["Kant", "Descartes", "Marx", "An overconfident philosophy major at a party"],
            correct: 0
        }
    ]
};

// Get quiz category from URL
const quizCategory = window.location.pathname.split("/").slice(-2, -1)[0]; // Extracts folder name as category

// Store Quiz State
let currentQuestion = 0;
let score = 0;
const questions = quizData[quizCategory]; // Load quiz based on category
let userAnswers = new Array(questions.length).fill(null); // Stores selected answers
let feedbackMessages = new Array(questions.length).fill(null); // Stores feedback messages

// Select Elements
const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizScore = document.getElementById("quiz-score");
const submitBtn = document.getElementById("submit-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Load Initial Question
function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionNumber.textContent = `Question ${currentQuestion + 1}`;

    // Populate options
    quizOptions.innerHTML = "";
    q.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="quiz" value="${index}"> ${option}`;
        quizOptions.appendChild(label);
    });

    // Restore previous answer if selected
    if (userAnswers[currentQuestion] !== null) {
        let selectedInput = document.querySelector(`input[name="quiz"][value="${userAnswers[currentQuestion]}"]`);
        selectedInput.checked = true;
        submitBtn.disabled = true; // Prevent resubmitting
        document.querySelectorAll('input[name="quiz"]').forEach(input => input.disabled = true);
    } else {
        submitBtn.disabled = false;
    }

    // Restore previous feedback message if available
    if (feedbackMessages[currentQuestion]) {
        quizFeedback.textContent = feedbackMessages[currentQuestion];
        quizFeedback.style.color = feedbackMessages[currentQuestion].includes("✅") ? "green" : "red";
        quizFeedback.classList.remove("hidden");
    } else {
        quizFeedback.textContent = "";
        quizFeedback.classList.add("hidden");
    }

    // Hide/Show navigation buttons
    nextBtn.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
    prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
}

// Submit Answer
function submitAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        quizFeedback.textContent = "⚠️ Please select an answer!";
        quizFeedback.style.color = "red";
        quizFeedback.classList.remove("hidden");
        return;
    }

    const selectedValue = parseInt(selectedOption.value);
    userAnswers[currentQuestion] = selectedValue; // Store selected answer

    if (selectedValue === questions[currentQuestion].correct) {
        feedbackMessages[currentQuestion] = "✅ Correct!";
        quizFeedback.textContent = feedbackMessages[currentQuestion];
        quizFeedback.style.color = "green";
        score++;
    } else {
        let correctAnswerText = questions[currentQuestion].options[questions[currentQuestion].correct];
        feedbackMessages[currentQuestion] = `❌ Incorrect! Correct answer: ${correctAnswerText}`;
        quizFeedback.textContent = feedbackMessages[currentQuestion];
        quizFeedback.style.color = "red";
    }

    quizFeedback.classList.remove("hidden");
    quizScore.textContent = `Score: ${score}`;

    // Disable options after submission
    document.querySelectorAll('input[name="quiz"]').forEach(input => input.disabled = true);
    submitBtn.disabled = true;
}

// Navigate to Previous Question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Navigate to Next Question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// Initialize Quiz
loadQuestion();
