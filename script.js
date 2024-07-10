
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.input-group input');

    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.classList.add('filled');
        });

        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.classList.remove('filled');
            }
        });
    });

    var passwordInput = document.getElementById('input4');
    var confirmPasswordInput = document.getElementById('input5');
    var passwordMessage = document.getElementById('password-message');
    var confirmPasswordMessage = document.getElementById('confirm-password-message');
    var form = document.getElementById('signup-form');

    function validatePassword() {
        var password = passwordInput.value;
        var errors = [];

        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least one uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain at least one lowercase letter.');
        }
        if (!/[0-9]/.test(password)) {
            errors.push('Password must contain at least one digit.');
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errors.push('Password must contain at least one special character.');
        }
        if (errors.length > 0) {
            passwordMessage.innerHTML = errors.join(
            );
            return false;
        } else {
            passwordMessage.innerHTML = '';
            return true;
        }
    }
    function validateConfirmPassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordMessage.innerHTML = 'Passwords do not match.';
            return false;
        } else {
            confirmPasswordMessage.innerHTML = '';
            return true;
        }
    }
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    form.addEventListener('submit', function(event) {
        if (!validatePassword() || !validateConfirmPassword()) {
            event.preventDefault();
        }
    });
    var showPasswordCheckbox = document.getElementById('show-password');
    showPasswordCheckbox.addEventListener('change', function() {
        if (this.checked) {
            passwordInput.type = 'text';
            confirmPasswordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
            confirmPasswordInput.type = 'password';
        }
    });
});