document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('volunteerForm');
    const WORKER_URL = 'https://blue-snowflake-aa83.ignacioeloyola.workers.dev';

    if (!form) {
        console.error('Volunteer form not found');
        return;
    }

    // Add message container after form opening tag
    const messageContainer = document.createElement('div');
    messageContainer.id = 'formMessage';
    messageContainer.className = 'hidden mb-4 p-4 rounded-md text-sm';
    form.insertBefore(messageContainer, form.firstChild);

    // Get translated messages from data attributes
    const messages = {
        success: form.dataset.successMessage,
        error: form.dataset.errorMessage,
        phoneError: form.dataset.phoneErrorMessage,
        sending: form.dataset.sendingText
    };

    function showMessage(message, isError = false) {
        const messageDiv = document.getElementById('formMessage');
        messageDiv.textContent = message;
        messageDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
        messageDiv.classList.add(
            isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
        );
        // Smooth scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function validatePhoneNumber(phone) {
        const phoneRegex = /^\+?[0-9]{1,4}[-\s]?[0-9]{6,14}$/;
        const cleanPhone = phone.replace(/[\s-]/g, '');

        if (!phoneRegex.test(cleanPhone)) {
            return false;
        }

        if (cleanPhone.startsWith('+34')) {
            return cleanPhone.length === 12; // +34 plus 9 digits
        }

        return true;
    }

    // Format phone number as user types
    const phoneInput = form.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/[^\d+\s-]/g, '');

            if (value.startsWith('+34')) {
                value = value.replace(/(\+34)(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
            }

            e.target.value = value;
        });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const submitButton = form.querySelector('button[type="submit"]');
        if (!submitButton) return;

        const originalButtonText = submitButton.innerHTML;

        // Clear any existing messages
        const messageDiv = document.getElementById('formMessage');
        messageDiv.classList.add('hidden');

        // Validate phone number
        if (!validatePhoneNumber(phoneInput.value)) {
            showMessage(messages.phoneError, true);
            return false;
        }

        try {
            submitButton.disabled = true;
            submitButton.innerHTML = `<span class="relative z-10">${messages.sending}</span>`;

            const formData = {
                fullName: form.querySelector('#fullName').value.trim(),
                email: form.querySelector('#email').value.trim(),
                phone: phoneInput.value.trim(),
                motivation: form.querySelector('#motivation').value.trim()
            };

            const response = await fetch(WORKER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || messages.error);
            }

            if (result.success) {
                showMessage(messages.success);
                form.reset();
            } else {
                throw new Error(result.error || messages.error);
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage(error.message || messages.error, true);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }

        return false;
    }

    // Remove any existing event listeners
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    // Add the event listener to the new form
    newForm.addEventListener('submit', handleFormSubmit);
});