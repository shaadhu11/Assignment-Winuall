class FormValidator {
    constructor(form) {
        this.form = form;
        this.fields = [];
        this.messageElement = document.createElement('p');
        this.messageElement.classList.add('hidden');
        form.appendChild(this.messageElement);

        form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    addField(selector, rules) {
        const field = this.form.querySelector(selector);
        if (field) {
            this.fields.push({ field, rules });
        }
    }

    validateField(field, rules) {
        for (let rule of rules) {
            if (!rule.test(field.value)) {
                return rule.message;
            }
        }
        return null;
    }

    handleSubmit(event) {
        event.preventDefault();
        let allValid = true;

        for (let { field, rules } of this.fields) {
            const errorMessage = this.validateField(field, rules);
            if (errorMessage) {
                allValid = false;
                field.classList.add('invalid');
                field.nextElementSibling.textContent = errorMessage;
            } else {
                field.classList.remove('invalid');
                field.nextElementSibling.textContent = '';
            }
        }

        if (allValid) {
            this.messageElement.textContent = 'Submitted';
            this.messageElement.className = 'success';
        } else {
            this.messageElement.textContent = 'Please give valid input';
            this.messageElement.className = 'error';
        }

        this.messageElement.classList.remove('hidden');
    }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exampleForm');
    const validator = new FormValidator(form);

    validator.addField('#name', [
        { test: (value) => value.trim() !== '', message: 'Name is required' }
    ]);

    validator.addField('#email', [
        { test: (value) => value.trim() !== '', message: 'Email is required' },
        { test: (value) => /\S+@\S+\.\S+/.test(value), message: 'Invalid email format' }
    ]);

    validator.addField('#password', [
        { test: (value) => value.trim() !== '', message: 'Password is required' },
        { test: (value) => value.length >= 6, message: 'Password must be at least 6 characters' }
    ]);
});
