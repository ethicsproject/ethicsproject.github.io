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
        },
        { // Question 4
            question: "Scenario: The Stranded Hikers and the Last Bottle of Water",
            isScenario: true,
            video: "../videos/hikingScenario.mp4",
            scenarioText: ["Mahika, a seasoned hiking guide, leads a group of two people on a remote mountain trail when disaster strikes. A sudden rockslide blocks their path back, leaving them stranded miles from help with no cell service. They have limited supplies—just a few protein bars and a single bottle of water. Rescuers might arrive in a few hours, or it could take days.", "Among the hikers is Pratty, a young woman who is severely hurt and struggling to stay conscious. There’s also Arjun, a 70-year-old retired teacher who has been mentoring kids for decades and really needs water. Mahika knows that if she gives the water to Pratty, it might be enough to sustain her until help arrives, but that means denying it to the rest of the group which could lead to the old man dying and if she was to give it to the old man the young woman would die. If he rations it among all, it might not be enough to save anyone."],
            instructions: "Choose the best action under the idea of utilitarianism.",
            options: ["Giving all the water to Pratty would likely be the utilitarian choice—it prevents total loss and ensures at least one person benefits fully, rather than everyone suffering and likely perishing.", "Mahika should make the decision herself if she believes it will save more lives, even if it overrides the group’s choice. If maximizing survival is the priority, paternalism is justified. However, if fairness and autonomy matter more, she should let them vote, even if it leads to a worse outcome.", "All members have an equal right to the water, but if Pratty is the weakest, she might have a stronger moral claim. Mahika doesn’t have absolute moral authority to decide who lives or dies, but as a leader, she may have to make the tough choice for the group’s survival.", "Mahika could lead the group in a highly improvised \"Emergency Rain Ritual\" combining synchronized stomping, hopeful sky-gazing, and dramatic chants of \"Water, water, everywhere—except right here!\" If the ritual succeeds, problem solved. If not, at least they burned some calories."],
            correct: 0
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
        },
        { // Question 4
            question: "Scenario: The Stranded Hikers and the Last Bottle of Water",
            isScenario: true,
            video: "../videos/hikingScenario.mp4",
            scenarioText: ["Mahika, a seasoned hiking guide, leads a group of two people on a remote mountain trail when disaster strikes. A sudden rockslide blocks their path back, leaving them stranded miles from help with no cell service. They have limited supplies—just a few protein bars and a single bottle of water. Rescuers might arrive in a few hours, or it could take days.", "Among the hikers is Pratty, a young woman who is severely hurt and struggling to stay conscious. There’s also Arjun, a 70-year-old retired teacher who has been mentoring kids for decades and really needs water. Mahika knows that if she gives the water to Pratty, it might be enough to sustain her until help arrives, but that means denying it to the rest of the group which could lead to the old man dying and if she was to give it to the old man the young woman would die. If he rations it among all, it might not be enough to save anyone."],
            instructions: "Choose the best action under the idea of utilitarianism.",
            options: ["Giving all the water to Pratty would likely be the utilitarian choice—it prevents total loss and ensures at least one person benefits fully, rather than everyone suffering and likely perishing.", "Mahika should make the decision herself if she believes it will save more lives, even if it overrides the group’s choice. If maximizing survival is the priority, paternalism is justified. However, if fairness and autonomy matter more, she should let them vote, even if it leads to a worse outcome.", "All members have an equal right to the water, but if Pratty is the weakest, she might have a stronger moral claim. Mahika doesn’t have absolute moral authority to decide who lives or dies, but as a leader, she may have to make the tough choice for the group’s survival.", "Mahika could lead the group in a highly improvised \"Emergency Rain Ritual\" combining synchronized stomping, hopeful sky-gazing, and dramatic chants of \"Water, water, everywhere—except right here!\" If the ritual succeeds, problem solved. If not, at least they burned some calories."],
            correct: 1
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
        },
        { // Question 4
            question: "Scenario: The Stranded Hikers and the Last Bottle of Water",
            isScenario: true,
            video: "../videos/hikingScenario.mp4",
            scenarioText: ["Mahika, a seasoned hiking guide, leads a group of two people on a remote mountain trail when disaster strikes. A sudden rockslide blocks their path back, leaving them stranded miles from help with no cell service. They have limited supplies—just a few protein bars and a single bottle of water. Rescuers might arrive in a few hours, or it could take days.", "Among the hikers is Pratty, a young woman who is severely hurt and struggling to stay conscious. There’s also Arjun, a 70-year-old retired teacher who has been mentoring kids for decades and really needs water. Mahika knows that if she gives the water to Pratty, it might be enough to sustain her until help arrives, but that means denying it to the rest of the group which could lead to the old man dying and if she was to give it to the old man the young woman would die. If he rations it among all, it might not be enough to save anyone."],
            instructions: "Choose the best action under the idea of utilitarianism.",
            options: ["Giving all the water to Pratty would likely be the utilitarian choice—it prevents total loss and ensures at least one person benefits fully, rather than everyone suffering and likely perishing.", "Mahika should make the decision herself if she believes it will save more lives, even if it overrides the group’s choice. If maximizing survival is the priority, paternalism is justified. However, if fairness and autonomy matter more, she should let them vote, even if it leads to a worse outcome.", "All members have an equal right to the water, but if Pratty is the weakest, she might have a stronger moral claim. Mahika doesn’t have absolute moral authority to decide who lives or dies, but as a leader, she may have to make the tough choice for the group’s survival.", "Mahika could lead the group in a highly improvised \"Emergency Rain Ritual\" combining synchronized stomping, hopeful sky-gazing, and dramatic chants of \"Water, water, everywhere—except right here!\" If the ritual succeeds, problem solved. If not, at least they burned some calories."],
            correct: 2
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

    quizOptions.innerHTML = "";

    if (q.isScenario) {
        quizOptions.innerHTML = `
            <div class="quiz-scenario-container">
                <h3 class="quiz-scenario-title">${q.question}</h3>
                <video class="quiz-scenario-video" controls>
                    <source src="${q.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p class="quiz-scenario-text">${q.scenarioText.join("<br><br>")}</p>
                <p class="quiz-scenario-instructions">${q.instructions}</p>
            </div>
        `;
    }

    q.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="quiz" value="${index}"> ${option}`;
        quizOptions.appendChild(label);
    });
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
