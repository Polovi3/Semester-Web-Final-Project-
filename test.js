// TAB SWITCHING
function switchTab(tab) {
    const buttons = document.querySelectorAll(".tab");
    buttons.forEach(btn => btn.classList.remove("active"));

    if (tab === "rent") {
        buttons[0].classList.add("active");
    } else {
        buttons[1].classList.add("active");
    }
}

// DARK / LIGHT MODE
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList = "dark";
    toggleBtn.textContent = "☀️";
} else {
    body.classList = "light";
    toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.replace("dark", "light");
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.querySelector(`.tab[onclick="switchTab('${tab}')"]`);
    activeBtn.classList.add('active');
}

function startSearch() {
    const hood = document.getElementById("neighborhoodSelect").value;
    const min = document.getElementById("minPrice").value;
    const max = document.getElementById("maxPrice").value;

    // Redirect to rent.html with selected values
    window.location.href = `rent.html?hood=${encodeURIComponent(hood)}&min=${min}&max=${max}`;
}
// Replace with your Google Client ID
const CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com";

window.onload = function() {
    const loginBtn = document.querySelectorAll(".login-btn");

    loginBtn.forEach(button => {
        button.addEventListener("click", () => {
            google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: handleCredentialResponse
            });
            google.accounts.id.prompt(); // shows Google sign-in popup
        });
    });
};

// This function receives the Google JWT token
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // You can send this token to your backend to verify the user
    alert("Login successful! Check console for JWT token.");
}
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    alert("Verification code sent to: " + email);
});

