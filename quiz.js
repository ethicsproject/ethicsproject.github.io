// Store Quiz Questions
const quizData = {
    "utilitarianism": [
        { question: "What is the key principle of utilitarianism?", options: ["Maximizing personal benefit", "Following moral duties", "Maximizing overall happiness", "Acting based on emotions"], correct: 2 },
        { question: "Who is a major philosopher behind utilitarianism?", options: ["Immanuel Kant", "John Stuart Mill", "Aristotle", "Karl Marx"], correct: 1 },
        { question: "What is the 'greatest happiness principle'?", options: ["Do whatever makes you happiest", "The action that produces the most happiness is best", "Happiness is subjective", "Moral duties matter more than happiness"], correct: 1 }
    ],
    "paternalism": [
        { question: "What is paternalism in ethics?", options: ["Giving people total freedom", "Interfering with a person’s freedom for their own good", "Forcing moral decisions", "A democratic system"], correct: 1 },
        { question: "Which is an example of paternalism?", options: ["Banning smoking in public places", "Letting everyone make their own choices", "Following cultural traditions", "Making all laws optional"], correct: 0 },
        { question: "Which philosopher is often associated with paternalism?", options: ["John Locke", "John Stuart Mill", "Thomas Hobbes", "Karl Popper"], correct: 2 }
    ],
    "moral-rights": [
        { question: "What is moral rights in ethics?", options: ["Giving people total freedom", "Interfering with a person’s freedom for their own good", "Forcing moral decisions", "A democratic system"], correct: 1 },
        { question: "Which is an example of moral rights?", options: ["Banning smoking in public places", "Letting everyone make their own choices", "Following cultural traditions", "Making all laws optional"], correct: 0 },
        { question: "Which philosopher is often associated with moral rights?", options: ["John Locke", "John Stuart Mill", "Thomas Hobbes", "Karl Popper"], correct: 2 }
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
