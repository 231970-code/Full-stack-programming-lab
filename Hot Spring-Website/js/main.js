/**
 * Hot Tub E-Commerce Website - Main JavaScript
 * Handles form validation, animations, and interactive features
 */

$(document).ready(function() {
    
    // Smooth Scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Animate elements on scroll
    function animateOnScroll() {
        $('.fade-in-element').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    }

    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Form Validation Functions
    window.validateEmail = function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    window.validatePhone = function(phone) {
        const re = /^[\d\s\-\+\(\)]{10,}$/;
        return re.test(phone);
    };

    window.validatePassword = function(password) {
        // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
        return password.length >= 8 && 
               /[A-Z]/.test(password) && 
               /[a-z]/.test(password) && 
               /\d/.test(password);
    };

    window.validateZipCode = function(zip) {
        const re = /^\d{5}(-\d{4})?$/;
        return re.test(zip);
    };

    // Generic validation helper
    function validateField(field, validationFunction, errorMessage) {
        const $field = $(field);
        const value = $field.val().trim();
        const $feedback = $field.siblings('.invalid-feedback');

        if (value === '' || !validationFunction(value)) {
            $field.addClass('is-invalid').removeClass('is-valid');
            if ($feedback.length) {
                $feedback.text(errorMessage).show();
            }
            return false;
        } else {
            $field.removeClass('is-invalid').addClass('is-valid');
            if ($feedback.length) {
                $feedback.hide();
            }
            return true;
        }
    }

    // Real-time validation for email fields
    $(document).on('blur', 'input[type="email"]', function() {
        validateField(this, validateEmail, 'Please enter a valid email address');
    });

    // Real-time validation for phone fields
    $(document).on('blur', 'input[type="tel"]', function() {
        validateField(this, validatePhone, 'Please enter a valid phone number');
    });

    // Real-time validation for password fields
    $(document).on('blur', 'input[type="password"]:not([name*="confirm"])', function() {
        validateField(this, validatePassword, 'Password must be at least 8 characters with uppercase, lowercase, and number');
    });

    // Confirm password validation
    $(document).on('blur', 'input[name*="confirm"]', function() {
        const $confirmField = $(this);
        const $passwordField = $('input[type="password"]').not('[name*="confirm"]').first();
        const confirmValue = $confirmField.val();
        const passwordValue = $passwordField.val();

        if (confirmValue !== passwordValue) {
            $confirmField.addClass('is-invalid').removeClass('is-valid');
            $confirmField.siblings('.invalid-feedback').text('Passwords do not match').show();
            return false;
        } else {
            $confirmField.removeClass('is-invalid').addClass('is-valid');
            $confirmField.siblings('.invalid-feedback').hide();
            return true;
        }
    });

    // Registration Form Validation
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate all required fields
        $(this).find('input[required]').each(function() {
            if ($(this).val().trim() === '') {
                $(this).addClass('is-invalid');
                isValid = false;
            }
        });

        // Validate email
        const email = $('input[type="email"]', this).val();
        if (!validateEmail(email)) {
            $('input[type="email"]', this).addClass('is-invalid');
            isValid = false;
        }

        // Validate password
        const password = $('input[type="password"]', this).first().val();
        if (!validatePassword(password)) {
            $('input[type="password"]', this).first().addClass('is-invalid');
            isValid = false;
        }

        // Validate password confirmation
        const confirmPassword = $('input[name*="confirm"]', this).val();
        if (password !== confirmPassword) {
            $('input[name*="confirm"]', this).addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            showSuccessMessage('Registration successful! Redirecting...');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            showErrorMessage('Please fix the errors in the form');
        }
    });

    // Login Form Validation
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const email = $('input[type="email"]', this).val();
        const password = $('input[type="password"]', this).val();

        if (!validateEmail(email)) {
            $('input[type="email"]', this).addClass('is-invalid');
            isValid = false;
        }

        if (password.trim() === '') {
            $('input[type="password"]', this).addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            showSuccessMessage('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000);
        } else {
            showErrorMessage('Please enter valid credentials');
        }
    });

    // Forgot Password Form Validation
    $('#forgotPasswordForm').on('submit', function(e) {
        e.preventDefault();
        const email = $('input[type="email"]', this).val();

        if (validateEmail(email)) {
            showSuccessMessage('Password reset link has been sent to your email!');
            $(this)[0].reset();
        } else {
            showErrorMessage('Please enter a valid email address');
        }
    });

    // Contact Form Validation
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate name
        const name = $('input[name="name"]', this).val();
        if (name.trim().length < 2) {
            $('input[name="name"]', this).addClass('is-invalid');
            isValid = false;
        }

        // Validate email
        const email = $('input[type="email"]', this).val();
        if (!validateEmail(email)) {
            $('input[type="email"]', this).addClass('is-invalid');
            isValid = false;
        }

        // Validate message
        const message = $('textarea[name="message"]', this).val();
        if (message.trim().length < 10) {
            $('textarea[name="message"]', this).addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            showSuccessMessage('Message sent successfully! We will get back to you soon.');
            $(this)[0].reset();
            $(this).find('.form-control').removeClass('is-valid');
        } else {
            showErrorMessage('Please fill in all fields correctly');
        }
    });

    // Payment Form Validation
    $('#paymentForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate card number (basic check)
        const cardNumber = $('#cardNumber').val().replace(/\s/g, '');
        if (!/^\d{16}$/.test(cardNumber)) {
            $('#cardNumber').addClass('is-invalid');
            isValid = false;
        }

        // Validate CVV
        const cvv = $('#cvv').val();
        if (!/^\d{3,4}$/.test(cvv)) {
            $('#cvv').addClass('is-invalid');
            isValid = false;
        }

        // Validate expiry date
        const expiryDate = $('#expiryDate').val();
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            $('#expiryDate').addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            showSuccessMessage('Payment processed successfully!');
            setTimeout(() => {
                window.location.href = 'account/order-details.html';
            }, 2000);
        } else {
            showErrorMessage('Please enter valid payment information');
        }
    });

    // Shopping Cart Functionality
    window.updateCartTotal = function() {
        let total = 0;
        $('.cart-item').each(function() {
            const price = parseFloat($(this).data('price')) || 0;
            const quantity = parseInt($(this).find('.quantity-input').val()) || 0;
            total += price * quantity;
        });

        $('#cartSubtotal').text('$' + total.toFixed(2));
        const tax = total * 0.08; // 8% tax
        const shipping = total > 100 ? 0 : 10; // Free shipping over $100
        $('#cartTax').text('$' + tax.toFixed(2));
        $('#cartShipping').text(shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2));
        $('#cartTotal').text('$' + (total + tax + shipping).toFixed(2));
    };

    // Quantity change handlers
    $(document).on('change', '.quantity-input', function() {
        updateCartTotal();
    });

    $(document).on('click', '.btn-remove-item', function() {
        $(this).closest('.cart-item').fadeOut(300, function() {
            $(this).remove();
            updateCartTotal();
            
            if ($('.cart-item').length === 0) {
                $('.cart-container').html('<div class="alert alert-info">Your cart is empty.</div>');
            }
        });
    });

    // Initialize cart total if on cart page
    if ($('.cart-item').length > 0) {
        updateCartTotal();
    }

    // Add to cart animation
    $(document).on('click', '.btn-add-to-cart', function() {
        const $btn = $(this);
        const originalText = $btn.text();
        
        $btn.prop('disabled', true)
            .html('<i class="fas fa-spinner fa-spin"></i> Adding...');
        
        setTimeout(() => {
            $btn.html('<i class="fas fa-check"></i> Added!')
                .removeClass('btn-primary')
                .addClass('btn-success');
            
            setTimeout(() => {
                $btn.html(originalText)
                    .removeClass('btn-success')
                    .addClass('btn-primary')
                    .prop('disabled', false);
            }, 1500);
        }, 800);
    });

    // Product quantity controls
    $(document).on('click', '.qty-btn-minus', function() {
        const $input = $(this).siblings('.quantity-input');
        const currentVal = parseInt($input.val()) || 1;
        if (currentVal > 1) {
            $input.val(currentVal - 1).trigger('change');
        }
    });

    $(document).on('click', '.qty-btn-plus', function() {
        const $input = $(this).siblings('.quantity-input');
        const currentVal = parseInt($input.val()) || 1;
        const maxVal = parseInt($input.attr('max')) || 99;
        if (currentVal < maxVal) {
            $input.val(currentVal + 1).trigger('change');
        }
    });

    // Format card number input
    $(document).on('input', '#cardNumber', function() {
        let value = $(this).val().replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        $(this).val(formattedValue);
    });

    // Format expiry date input
    $(document).on('input', '#expiryDate', function() {
        let value = $(this).val().replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        $(this).val(value);
    });

    // Toast notification functions
    window.showSuccessMessage = function(message) {
        showToast(message, 'success');
    };

    window.showErrorMessage = function(message) {
        showToast(message, 'danger');
    };

    window.showToast = function(message, type = 'info') {
        // Remove existing toasts
        $('.toast-notification').remove();

        const toast = $(`
            <div class="toast-notification alert alert-${type} alert-dismissible fade show" 
                 style="position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);

        $('body').append(toast);

        setTimeout(() => {
            toast.fadeOut(300, function() {
                $(this).remove();
            });
        }, 5000);
    };

    // Image lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Prevent form resubmission on page refresh
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // Remove validation classes on input
    $(document).on('input', '.form-control', function() {
        if ($(this).hasClass('is-invalid') && $(this).val().trim() !== '') {
            $(this).removeClass('is-invalid');
        }
    });

    // Initialize tooltips if Bootstrap is loaded
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    console.log('Hot Tub E-Commerce - JavaScript Initialized Successfully');
});
