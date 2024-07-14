document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('input[name="jp_delivery"]');
    const jpDeliverySection = document.querySelector('.jp_delivery');
    const addDeliveryButton = document.querySelector('.jp_delivery_add');
    const jpDeliveryWrapper = document.querySelector('.jp_delivery_wrapper');
    const jpDeliveryButton = document.querySelector('button');
    const jpDeliveryPreview = document.querySelector('.jp_delivery_preview');

    // Hide the section initially
    jpDeliverySection.style.display = 'none';

    // Show/Hide the .jp_delivery section on checkbox click
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            jpDeliverySection.style.display = 'block';
        } else {
            jpDeliverySection.style.display = 'none';
        }
    });

    // Add new .jp_delivery_wrapper on .jp_delivery_add click
    addDeliveryButton.addEventListener('click', function(e) {
        e.preventDefault();
        const newWrapper = jpDeliveryWrapper.cloneNode(true);
        const removeButton = newWrapper.querySelector('.jp_delivery_remove');

        // Add event listener to the new remove button
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            newWrapper.remove();
        });

        jpDeliverySection.insertBefore(newWrapper, addDeliveryButton);
    });

    // Remove .jp_delivery_wrapper on .jp_delivery_remove click
    const removeButtons = document.querySelectorAll('.jp_delivery_remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.closest('.jp_delivery_wrapper').remove();
        });
    });

    // Show .jp_delivery_preview on button click
    jpDeliveryButton.addEventListener('click', function() {
        jpDeliveryPreview.style.display = 'block';
    });
});
