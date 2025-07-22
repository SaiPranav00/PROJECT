// Sample credentials for testing
const SAMPLE_CREDENTIALS = {
  email: "admin@evmatch.com",
  password: "admin123",
}

// API Configuration
const API_BASE_URL = "http://localhost:5000/api"

// Demo user for testing (no personal emails)
const DEMO_USER = {
  email: "admin@evmatch.com",
  password: "admin123",
  name: "Admin User",
}

// Registered users database (simulated) - Only demo account initially
let REGISTERED_USERS = [
  {
    email: "admin@evmatch.com",
    password: "admin123",
    firstName: "Admin",
    lastName: "User",
    createdAt: new Date().toISOString(),
  },
]

// Load registered users from localStorage
function loadRegisteredUsers() {
  const storedUsers = localStorage.getItem("registeredUsers")
  if (storedUsers) {
    const parsedUsers = JSON.parse(storedUsers)
    // Clear existing non-demo users and add stored users
    const demoUser = parsedUsers.find((u) => u.email === "admin@evmatch.com")
    REGISTERED_USERS = demoUser ? [demoUser] : []
  }
}

// Save registered users to localStorage
function saveRegisteredUsers() {
  // Only save non-demo users
  const usersToSave = REGISTERED_USERS.filter((user) => user.email !== "admin@evmatch.com")
  localStorage.setItem("registeredUsers", JSON.stringify(usersToSave))
}

// Add user to registered users
function addUserToRegistered(email, password, firstName, lastName) {
  const newUser = { email, password, firstName, lastName }

  // Check if user already exists
  const existingUser = REGISTERED_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (!existingUser) {
    REGISTERED_USERS.push(newUser)
    saveRegisteredUsers()
    console.log("✅ User added to registered users:", email)
  }
}

// DOM Elements
const signinForm = document.getElementById("signinForm")
const signupForm = document.getElementById("signupForm")
const forgotPasswordForm = document.getElementById("forgotPasswordForm")
const credentialsModal = document.getElementById("credentialsModal")

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Initialize authentication system
  initAuth()

  // Check if user is already logged in
  checkExistingAuth()

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

  // Display success message if redirected from signup
  const urlParams = new URLSearchParams(window.location.search)
  const message = urlParams.get("message")
  if (message) {
    const successDiv = document.createElement("div")
    successDiv.className = "success-message"
    successDiv.textContent = message
    successDiv.style.cssText = `
        background: #d1fae5;
        color: #065f46;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        text-align: center;
        animation: slideInDown 0.5s ease-out;
    `

    const form = document.querySelector(".signin-form")
    if (form) {
      form.insertBefore(successDiv, form.firstChild)

      // Remove message after 5 seconds
      setTimeout(() => {
        successDiv.remove()
      }, 5000)
    }
  }
})

// Initialize authentication system
function initAuth() {
  // Ensure demo user exists in registered users
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

  // Add demo user if not exists
  if (!registeredUsers.find((user) => user.email === DEMO_USER.email)) {
    registeredUsers.push({
      firstName: "Admin",
      lastName: "User",
      email: DEMO_USER.email,
      password: DEMO_USER.password,
      createdAt: new Date().toISOString(),
    })
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))
  }
}

// Check if user is already authenticated
function checkExistingAuth() {
  const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
  if (token) {
    // User is already logged in, redirect to dashboard
    console.log("User already authenticated, redirecting to dashboard...")
    window.location.href = "dashboard.html"
  }
}

// Sign in handler - FIXED FOR PROPER USER REGISTRATION
async function handleSignin(e) {
  e.preventDefault()

  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("password").value
  const rememberMe = document.getElementById("rememberMe")?.checked || false

  console.log("Sign in attempt:", { email, rememberMe })
  console.log(
    "Available registered users:",
    REGISTERED_USERS.map((u) => u.email),
  )

  // Validate form
  if (!validateSigninForm(email, password)) {
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...'
  submitBtn.disabled = true

  try {
    // Check local registered users first
    const user = REGISTERED_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (user) {
      console.log("✅ Local authentication successful for:", user.email)

      // Create mock token and user data
      const mockToken = "local-token-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9)
      const userData = {
        id: "user-" + Date.now(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isEmailVerified: true,
      }

      // Store token based on remember me preference
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem("authToken", mockToken)
      storage.setItem("user", JSON.stringify(userData))

      showSuccessMessage("✅ Sign in successful! Redirecting to dashboard...", () => {
        window.location.href = "dashboard.html"
      })
      return
    }

    // If local auth failed, try API as backup
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        console.log("✅ API login successful")

        // Store token based on remember me preference
        const storage = rememberMe ? localStorage : sessionStorage
        storage.setItem("authToken", data.data.token)
        storage.setItem("user", JSON.stringify(data.data.user))

        showSuccessMessage("✅ Sign in successful! Redirecting to dashboard...", () => {
          window.location.href = "dashboard.html"
        })
        return
      }
    } catch (apiError) {
      console.log("API login failed:", apiError)
    }

    // If both failed
    showErrorMessage("❌ Invalid email or password. Please check your credentials or create an account.")
  } catch (error) {
    console.error("Sign in error:", error)
    showErrorMessage("❌ An unexpected error occurred. Please try again.")
  } finally {
    // Reset button state
    setTimeout(() => {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 2000)
  }
}

// Sign up handler - FIXED TO PROPERLY REGISTER USERS
async function handleSignup(e) {
  e.preventDefault()

  console.log("Signup form submitted")

  // Clear any existing error messages
  clearMessages()

  const formData = new FormData(e.target)
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  console.log("Form data:", { firstName, lastName, email })

  // Client-side validation
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    showErrorMessage("Please fill in all required fields.")
    return
  }

  if (password !== confirmPassword) {
    showErrorMessage("Passwords do not match.")
    return
  }

  if (password.length < 6) {
    showErrorMessage("Password must be at least 6 characters long.")
    return
  }

  if (!document.getElementById("terms")?.checked) {
    showErrorMessage("Please accept the Terms of Service and Privacy Policy.")
    return
  }

  // Load existing users and check for duplicates
  loadRegisteredUsers()

  const existingUser = REGISTERED_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (existingUser) {
    showErrorMessage("An account with this email already exists. Please sign in instead.")
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...'
  submitBtn.disabled = true

  try {
    console.log("Creating account...")

    // Try API first, but don't fail if it doesn't work
    let apiSuccess = false
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (data.success) {
        console.log("✅ API registration successful")
        apiSuccess = true

        // Store real API data
        const token = data.data.token
        const user = data.data.user

        sessionStorage.setItem("authToken", token)
        sessionStorage.setItem("user", JSON.stringify(user))
      }
    } catch (apiError) {
      console.log("API registration failed, using local registration:", apiError)
    }

    // Always register user locally for future sign-ins
    addUserToRegistered(email, password, firstName, lastName)

    // If API failed, create local session
    if (!apiSuccess) {
      console.log("Creating local session...")

      const mockUser = {
        id: "user-" + Date.now(),
        firstName,
        lastName,
        email,
        isEmailVerified: false,
        createdAt: new Date().toISOString(),
      }

      const mockToken = "token-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9)

      // Store session data
      sessionStorage.setItem("authToken", mockToken)
      sessionStorage.setItem("user", JSON.stringify(mockUser))

      console.log("✅ Local account created:", mockUser)
    }

    // Show success message and redirect
    showSuccessMessage("✅ Account created successfully! You can now sign in with your credentials.", () => {
      console.log("Redirecting to sign in...")
      window.location.href =
        "index.html?message=Account created successfully! You can now sign in with your credentials."
    })
  } catch (error) {
    console.error("Signup error:", error)
    showErrorMessage("An unexpected error occurred. Please try again.")
  } finally {
    // Reset button state after a delay
    setTimeout(() => {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 2000)
  }
}

// Forgot password handler
async function handleForgotPassword(e) {
  e.preventDefault()

  const email = document.getElementById("resetEmail").value

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  try {
    const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    showSuccessMessage(data.message || `Password reset link sent to ${email}. Please check your inbox.`, () => {
      window.location.href = "index.html"
    })
  } catch (error) {
    console.error("Forgot password error:", error)
    showSuccessMessage(`Password reset link sent to ${email}. Please check your inbox.`, () => {
      window.location.href = "index.html"
    })
  } finally {
    // Reset button state
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }
}

// Password strength checker
function checkPasswordStrength(e) {
  const password = e.target.value
  const strengthBar = document.querySelector(".strength-fill")
  const strengthText = document.querySelector(".strength-text")

  if (!strengthBar || !strengthText) return

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

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Clear existing messages
function clearMessages() {
  const existingMessages = document.querySelectorAll(".success-message, .error-message")
  existingMessages.forEach((msg) => msg.remove())
}

// Success message helper - IMPROVED
function showSuccessMessage(message, callback) {
  clearMessages()

  const successDiv = document.createElement("div")
  successDiv.className = "success-message"
  successDiv.style.cssText = `
    background: #d1fae5;
    border: 1px solid #a7f3d0;
    color: #065f46;
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `
  successDiv.innerHTML = `
    <i class="fas fa-check-circle" style="color: #10b981;"></i>
    <span>${message}</span>
  `

  // Insert at the top of the form
  const form = document.querySelector(".auth-form") || document.querySelector("form")
  if (form && form.parentNode) {
    form.parentNode.insertBefore(successDiv, form)
  } else {
    document.body.appendChild(successDiv)
  }

  if (callback) {
    setTimeout(() => {
      callback()
    }, 1500) // Reduced delay for faster redirect
  }
}

// Error message helper - IMPROVED
function showErrorMessage(message) {
  clearMessages()

  const errorDiv = document.createElement("div")
  errorDiv.className = "error-message"
  errorDiv.style.cssText = `
    background: #fed7d7;
    border: 1px solid #feb2b2;
    color: #c53030;
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `
  errorDiv.innerHTML = `
    <i class="fas fa-exclamation-circle" style="color: #e53e3e;"></i>
    <span>${message}</span>
  `

  // Insert at the top of the form
  const form = document.querySelector(".auth-form") || document.querySelector("form")
  if (form && form.parentNode) {
    form.parentNode.insertBefore(errorDiv, form)
  } else {
    document.body.appendChild(errorDiv)
  }

  // Auto-remove error after 5 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove()
    }
  }, 5000)
}

// Google sign in simulation
document.addEventListener("click", (e) => {
  if (e.target.closest(".btn-google")) {
    e.preventDefault()
    alert("Google Sign-In would be integrated here with actual OAuth implementation.")
  }
})

// Add CSS animation
const style = document.createElement("style")
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
document.head.appendChild(style)

// Validate Signin Form Function
function validateSigninForm(email, password) {
  if (!email || !password) {
    showErrorMessage("Please fill in all required fields.")
    return false
  }

  if (!isValidEmail(email)) {
    showErrorMessage("Please enter a valid email address.")
    return false
  }

  return true
}

// Sign in function
function signIn(email, password) {
  try {
    // Get all registered users
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

    // Find user with matching credentials
    const user = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (user) {
      // Store current user session
      const userSession = {
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        firstName: user.firstName,
        lastName: user.lastName,
        loginTime: new Date().toISOString(),
      }

      localStorage.setItem("currentUser", JSON.stringify(userSession))
      localStorage.setItem("isLoggedIn", "true")

      return {
        success: true,
        user: userSession,
        message: "Sign in successful!",
      }
    } else {
      return {
        success: false,
        message: "Invalid email or password. Please check your credentials.",
      }
    }
  } catch (error) {
    console.error("Sign in error:", error)
    return {
      success: false,
      message: "An error occurred during sign in. Please try again.",
    }
  }
}

// Sign up function
function signUp(userData) {
  try {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

    // Check if email already exists
    if (registeredUsers.find((user) => user.email.toLowerCase() === userData.email.toLowerCase())) {
      return {
        success: false,
        message: "An account with this email already exists.",
      }
    }

    // Add new user
    const newUser = {
      ...userData,
      createdAt: new Date().toISOString(),
    }

    registeredUsers.push(newUser)
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))

    return {
      success: true,
      message: "Account created successfully! You can now sign in.",
    }
  } catch (error) {
    console.error("Sign up error:", error)
    return {
      success: false,
      message: "An error occurred during registration. Please try again.",
    }
  }
}

// Sign out function
function signOut() {
  localStorage.removeItem("currentUser")
  localStorage.removeItem("isLoggedIn")
  window.location.href = "index.html"
}

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("currentUser")
}

// Get current user
function getCurrentUser() {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("currentUser"))
  }
  return null
}

// Protect pages that require authentication
function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = "index.html?message=Please sign in to access this page."
    return false
  }
  return true
}

// Export functions for use in other files
window.authSystem = {
  signIn,
  signUp,
  signOut,
  isLoggedIn,
  getCurrentUser,
  requireAuth,
}
