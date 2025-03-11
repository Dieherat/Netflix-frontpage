function toggleAnswer(element) {
            const answer = element.nextElementSibling;
            answer.style.display = (answer.style.display === "none" || !answer.style.display) ? "block" : "none";
        }

        function getStarted() {
    const email = document.getElementById("email").value || document.getElementById("footer-email").value;
    if (email) {
        alert(`Thank you for signing up, ${email}! Redirecting to login page...`);
        
        window.location.href = "login.html";
    } else {
        alert("Please enter a valid email.");
    }
}

        function signIn() {
            alert("Redirecting to sign-in page.");
        }
