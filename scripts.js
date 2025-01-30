function toggleAnswer(button) {
    let answer = button.nextElementSibling;
    answer.classList.toggle("visible");

    button.textContent = answer.classList.contains("visible") ? "Hide Answer" : "Reveal Answer";
}