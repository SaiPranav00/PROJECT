// Eco-Friendly Auth JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
});

function initializeAuth() {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('signupPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    // Initialize password strength checker
    initPasswordStrength();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize eco-friendly animations
    initEcoAnimations();
    
    // Handle form submission
    signupForm.addEventListener('submit', handleSignup);
    
    // Real-time validation
    setupRealTimeValidation();
}

// Password visibility toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const toggleButton = input.nextElementSibling;
    const icon = toggleButton.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
    
    // Add eco-friendly ripple effect
    createRippleEffect(toggleButton);
}

// Password strength checker
function initPasswordStrength() {
    const passwordInput = document.getElementById('signupPassword');
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        
        updatePasswordStrength(strength, strengthBar, strengthText);
    });
}

function calculatePasswordStrength(password) {
    let score = 0;
    let feedback = [];
    
    // Length check
    if (password.length >= 8) score += 25;
    else feedback.push('At least 8 characters');
    
    // Uppercase check
    if (/[A-Z]/.test(password)) score += 25;
    else feedback.push('One uppercase letter');
    
    // Lowercase check
    if (/[a-z]/.test(password)) score += 25;
    else feedback.push('One lowercase letter');
    
    // Number or special character check
    if (/[\d\W]/.test(password)) score += 25;
    else feedback.push('One number or special character');
    
    return {
        score: score,
        feedback: feedback,
        level: getStrengthLevel(score)
    };
}

function getStrengthLevel(score) {
    if (score < 25) return 'Very Weak';
    if (score < 50) return 'Weak';
    if (score < 75) return 'Good';
    if (score < 100) return 'Strong';
    return 'Very Strong';
}

function updatePasswordStrength(strength, strengthBar, strengthText) {
    strengthBar.style.width = strength.score + '%';
    strengthText.textContent = `Password strength: ${strength.level}`;
    
    // Update color based on strength
    if (strength.score < 25) {
        strengthBar.style.background = '#d32f2f';
    } else if (strength.score < 50) {
        strengthBar.style.background = '#f57c00';
    } else if (strength.score < 75) {
        strengthBar.style.background = '#fbc02d';
    } else {
        strengthBar.style.background = '#388e3c';
    }
    
    // Add eco-friendly glow effect for strong passwords
    if (strength.score >= 75) {
        strengthBar.style.boxShadow = '0 0 10px rgba(56, 142, 60, 0.5)';
    } else {
        strengthBar.style.boxShadow = 'none';
    }
}

// Form validation
function initFormValidation() {
    const inputs = document.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    const fieldGroup = field.closest('.form-group');
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    
    clearFieldError(field);
    
    // Required field validation
    if (!fieldValue) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Specific field validations
    switch (fieldName) {
        case 'email':
            if (!isValidEmail(fieldValue)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
            break;
            
        case 'password':
            const strength = calculatePasswordStrength(fieldValue);
            if (strength.score < 50) {
                showFieldError(field, 'Password is too weak');
                return false;
            }
            break;
            
        case 'confirmPassword':
            const password = document.getElementById('signupPassword').value;
            if (fieldValue !== password) {
                showFieldError(field, 'Passwords do not match');
                return false;
            }
            break;
    }
    
    showFieldSuccess(field);
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.add('error');
    fieldGroup.classList.remove('success');
    
    // Remove existing error message
    const existingError = fieldGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    fieldGroup.appendChild(errorDiv);
    
    // Add shake animation
    field.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        field.style.animation = '';
    }, 500);
}

function showFieldSuccess(field) {
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.add('success');
    fieldGroup.classList.remove('error');
    
    // Remove existing messages
    const existingMessage = fieldGroup.querySelector('.error-message, .success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add eco-friendly success indicator
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = '<i class="fas fa-leaf"></i> Great!';
    fieldGroup.appendChild(successDiv);
    
    // Add gentle glow effect
    field.style.boxShadow = '0 0 5px rgba(56, 142, 60, 0.3)';
    setTimeout(() => {
        field.style.boxShadow = '';
    }, 2000);
}

function clearFieldError(field) {
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.remove('error');
    
    const errorMessage = fieldGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Real-time validation setup
function setupRealTimeValidation() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('signupPassword');
    
    // Real-time password confirmation
    confirmPasswordInput.addEventListener('input', function() {
        if (this.value && passwordInput.value) {
            if (this.value === passwordInput.value) {
                showFieldSuccess(this);
            } else {
                showFieldError(this, 'Passwords do not match');
            }
        }
    });
    
    // Update confirmation when password changes
    passwordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value) {
            if (confirmPasswordInput.value === this.value) {
                showFieldSuccess(confirmPasswordInput);
            } else {
                showFieldError(confirmPasswordInput, 'Passwords do not match');
            }
        }
    });
}

// Form submission handler
function handleSignup(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate all fields
    const isValid = validateAllFields();
    
    if (!isValid) {
        showNotification('Please fix the errors above', 'error');
        return;
    }
    
    // Check terms acceptance
    if (!document.getElementById('terms').checked) {
        showNotification('Please accept the Terms of Service', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    showLoadingState(submitButton);
    
    // Simulate API call
    setTimeout(() => {
        hideLoadingState(submitButton);
        showNotification('Account created successfully! 🌱', 'success');
        
        // Optional: Redirect or show success state
        // window.location.href = 'dashboard.html';
    }, 2000);
}

function validateAllFields() {
    const inputs = document.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function showLoadingState(button) {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    button.style.opacity = '0.7';
}

function hideLoadingState(button) {
    button.disabled = false;
    button.innerHTML = '<span>Create Account</span><i class="fas fa-arrow-right"></i>';
    button.style.opacity = '1';
}

// Eco-friendly animations
function initEcoAnimations() {
    // Add floating leaf animation to features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Add gentle hover effects to inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add eco-friendly button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            createParticleEffect(this);
        });
    });
}

function createRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(124, 179, 66, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.marginLeft = '-10px';
    ripple.style.marginTop = '-10px';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createParticleEffect(element) {
    const particle = document.createElement('div');
    particle.innerHTML = '🌱';
    particle.style.position = 'absolute';
    particle.style.pointerEvents = 'none';
    particle.style.fontSize = '12px';
    particle.style.zIndex = '1000';
    particle.style.opacity = '0';
    
    const rect = element.getBoundingClientRect();
    particle.style.left = rect.left + rect.width / 2 + 'px';
    particle.style.top = rect.top + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle
    particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(-20px)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type]}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="closeNotification(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 1000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
        font-family: var(--font-family);
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Google Sign-in handler
document.addEventListener('DOMContentLoaded', function() {
    const googleButton = document.querySelector('.btn-google');
    if (googleButton) {
        googleButton.addEventListener('click', function() {
            // Simulate Google OAuth flow
            showLoadingState(this);
            
            setTimeout(() => {
                hideLoadingState(this);
                showNotification('Google Sign-in would be implemented here 🌿', 'info');
            }, 1500);
        });
    }
});

// Eco-friendly form enhancements
function addEcoFriendlyTouches() {
    // Add plant emoji to success messages
    const successMessages = document.querySelectorAll('.success-message');
    successMessages.forEach(msg => {
        if (!msg.innerHTML.includes('🌱')) {
            msg.innerHTML = msg.innerHTML.replace('Great!', 'Great! 🌱');
        }
    });
    
    // Add seasonal theme changes
    const now = new Date();
    const month = now.getMonth();
    
    // Spring theme (March-May)
    if (month >= 2 && month <= 4) {
        document.documentElement.style.setProperty('--accent-green', '#8bc34a');
        addFloatingElements('🌸', 3);
    }
    // Summer theme (June-August)
    else if (month >= 5 && month <= 7) {
        document.documentElement.style.setProperty('--accent-green', '#4caf50');
        addFloatingElements('☀️', 2);
    }
    // Autumn theme (September-November)
    else if (month >= 8 && month <= 10) {
        document.documentElement.style.setProperty('--accent-green', '#8d6e63');
        addFloatingElements('🍂', 4);
    }
    // Winter theme (December-February)
    else {
        document.documentElement.style.setProperty('--accent-green', '#607d8b');
        addFloatingElements('❄️', 2);
    }
}

function addFloatingElements(emoji, count) {
    for (let i = 0; i < count; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.innerHTML = emoji;
        floatingElement.style.cssText = `
            position: fixed;
            font-size: 20px;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
            animation: float 10s infinite ease-in-out;
            animation-delay: ${i * 2}s;
        `;
        
        floatingElement.style.left = Math.random() * 100 + '%';
        floatingElement.style.top = Math.random() * 100 + '%';
        
        document.body.appendChild(floatingElement);
    }
}

// Accessibility enhancements
function initAccessibility() {
    // Add ARIA labels
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.getAttribute('aria-label')) {
            const label = input.previousElementSibling;
            if (label && label.tagName === 'LABEL') {
                input.setAttribute('aria-label', label.textContent);
            }
        }
    });
    
    // Add keyboard navigation for custom elements
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add focus management
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input');
        if (input) {
            input.addEventListener('focus', function() {
                group.classList.add('focused');
            });
            input.addEventListener('blur', function() {
                group.classList.remove('focused');
            });
        }
    });
}

// Progressive enhancement
function initProgressiveEnhancement() {
    // Check for modern browser features
    if ('IntersectionObserver' in window) {
        initScrollAnimations();
    }
    
    if ('matchMedia' in window) {
        initResponsiveEnhancements();
    }
    
    // Add reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
        // Remove floating animations
        const floatingElements = document.querySelectorAll('[style*="animation"]');
        floatingElements.forEach(el => {
            el.style.animation = 'none';
        });
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }
        });
    });
    
    const animateElements = document.querySelectorAll('.feature, .auth-card, .info-content');
    animateElements.forEach(el => observer.observe(el));
}

function initResponsiveEnhancements() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleResponsive(e) {
        const authContainer = document.querySelector('.auth-container');
        if (e.matches) {
            // Mobile enhancements
            authContainer.style.padding = '1rem';
            // Adjust form spacing for mobile
            const formGroups = document.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                group.style.marginBottom = '1rem';
            });
        } else {
            // Desktop enhancements
            authContainer.style.padding = '2rem';
        }
    }
    
    mediaQuery.addListener(handleResponsive);
    handleResponsive(mediaQuery);
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
    addEcoFriendlyTouches();
    initAccessibility();
    initProgressiveEnhancement();
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes ripple {
            to { transform: scale(2); opacity: 0; }
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 12px;
            padding: 4px;
            border-radius: 4px;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        .form-group.focused {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateField,
        calculatePasswordStrength,
        isValidEmail,
        togglePassword
    };
}