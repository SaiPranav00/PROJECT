// Sample credentials for testing
const SAMPLE_CREDENTIALS = {
    email: "admin@evmatch.com",
    password: "EVMatch2024!",
}

// DOM Elements
const signinForm = document.getElementById("signinForm")
const signupForm = document.getElementById("signupForm")
const forgotPasswordForm = document.getElementById("forgotPasswordForm")
const credentialsModal = document.getElementById("credentialsModal")

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners based on current page
    if (signinForm) {
        signinForm.addEventListener("submit", handleSignin)
    }

    if (signupForm) {
        signupForm.addEventListener("submit", handleSignup)

        // Password strength checker
        const passwordInput = document.getElementById("signupPassword")
        if (passwordInput) {
            passwordInput.addEventListener("input", checkPasswordStrength)
        }

        // Password confirmation checker
        const confirmPasswordInput = document.getElementById("confirmPassword")
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener("input", checkPasswordMatch)
        }
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", handleForgotPassword)
    }

    // Close modal when clicking outside
    if (credentialsModal) {
        credentialsModal.addEventListener("click", (e) => {
            if (e.target === credentialsModal) {
                closeModal()
            }
        })
    }
})

// Sign in handler
function handleSignin(e) {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // Check against sample credentials
    if (email === SAMPLE_CREDENTIALS.email && password === SAMPLE_CREDENTIALS.password) {
        showSuccessMessage("Sign in successful! Redirecting to dashboard...", () => {
            // Redirect to dashboard after successful login
            window.location.href = "dashboard.html"
        })
    } else {
        showErrorMessage("Invalid email or password. Please try the sample credentials.")
    }
}

// Sign up handler
function handleSignup(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const password = formData.get("password")
    const confirmPassword = formData.get("confirmPassword")

    if (password !== confirmPassword) {
        showErrorMessage("Passwords do not match.")
        return
    }

    if (!document.getElementById("terms").checked) {
        showErrorMessage("Please accept the Terms of Service and Privacy Policy.")
        return
    }

    showSuccessMessage("Account created successfully! Please check your email to verify your account.", () => {
        window.location.href = "index.html"
    })
}

// Forgot password handler
function handleForgotPassword(e) {
    e.preventDefault()

    const email = document.getElementById("resetEmail").value

    showSuccessMessage(`Password reset link sent to ${email}. Please check your inbox.`, () => {
        window.location.href = "index.html"
    })
}

// Password strength checker
function checkPasswordStrength(e) {
    const password = e.target.value
    const strengthBar = document.querySelector(".strength-fill")
    const strengthText = document.querySelector(".strength-text")

    let strength = 0
    let strengthLabel = "Weak"
    let color = "#e53e3e"

    // Check password criteria
    if (password.length >= 8) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    if (/[^A-Za-z0-9]/.test(password)) strength += 25

    // Determine strength level
    if (strength >= 100) {
        strengthLabel = "Very Strong"
        color = "#38a169"
    } else if (strength >= 75) {
        strengthLabel = "Strong"
        color = "#68d391"
    } else if (strength >= 50) {
        strengthLabel = "Medium"
        color = "#f6ad55"
    } else if (strength >= 25) {
        strengthLabel = "Fair"
        color = "#fc8181"
    }

    // Update UI
    strengthBar.style.width = `${Math.min(strength, 100)}%`
    strengthBar.style.background = color
    strengthText.textContent = `Password strength: ${strengthLabel}`
    strengthText.style.color = color
}

// Password match checker
function checkPasswordMatch(e) {
    const password = document.getElementById("signupPassword").value
    const confirmPassword = e.target.value
    const input = e.target

    if (confirmPassword && password !== confirmPassword) {
        input.style.borderColor = "#e53e3e"
        input.style.background = "#fed7d7"
    } else {
        input.style.borderColor = "#e2e8f0"
        input.style.background = "#f7fafc"
    }
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId)
    const button = input.parentElement.querySelector(".toggle-password i")

    if (input.type === "password") {
        input.type = "text"
        button.classList.remove("fa-eye")
        button.classList.add("fa-eye-slash")
    } else {
        input.type = "password"
        button.classList.remove("fa-eye-slash")
        button.classList.add("fa-eye")
    }
}

// Modal functions
function showModal() {
    if (credentialsModal) {
        credentialsModal.style.display = "block"
    }
}

function closeModal() {
    if (credentialsModal) {
        credentialsModal.style.display = "none"
    }
}

function fillCredentials() {
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")

    if (emailInput && passwordInput) {
        emailInput.value = SAMPLE_CREDENTIALS.email
        passwordInput.value = SAMPLE_CREDENTIALS.password
        closeModal()
    }
}

// Success message helper
function showSuccessMessage(message, callback) {
    const existingMessage = document.querySelector(".success-message")
    if (existingMessage) {
        existingMessage.remove()
    }

    const successDiv = document.createElement("div")
    successDiv.className = "success-message"
    successDiv.innerHTML = `
          <i class="fas fa-check-circle"></i>
          <span>${message}</span>
      `

    const form = document.querySelector(".auth-form")
    form.parentNode.insertBefore(successDiv, form)

    if (callback) {
        setTimeout(callback, 2000)
    }
}

// Error message helper
function showErrorMessage(message) {
    const existingMessage = document.querySelector(".error-message")
    if (existingMessage) {
        existingMessage.remove()
    }

    const errorDiv = document.createElement("div")
    errorDiv.className = "error-message"
    errorDiv.style.cssText = `
          background: #fed7d7;
          border: 1px solid #feb2b2;
          color: #c53030;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
      `
    errorDiv.innerHTML = `
          <i class="fas fa-exclamation-circle"></i>
          <span>${message}</span>
      `

    const form = document.querySelector(".auth-form")
    form.parentNode.insertBefore(errorDiv, form)

    setTimeout(() => {
        errorDiv.remove()
    }, 5000)
}

// Google sign in simulation
document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-google")) {
        e.preventDefault()
        alert("Google Sign-In would be integrated here with actual OAuth implementation.")
    }
})
  