
        document.addEventListener('DOMContentLoaded', function() {
            const unitBoxes = document.querySelectorAll('.unit-box');
            const totalPriceElement = document.querySelector('.total-price');
            let selectedUnit = 2; // Default to 2 Unit 

            function updateUnitBoxes() {
                unitBoxes.forEach(box => {
                    const unit = parseInt(box.dataset.unit);
                    const radio = box.querySelector('.radio-custom');
                    const options = box.querySelector('.unit-options');

                    if (unit === selectedUnit) {
                        box.classList.add('active');
                        radio.classList.add('checked');
                        options.classList.add('show');
                    } else {
                        box.classList.remove('active');
                        radio.classList.remove('checked');
                        options.classList.remove('show');
                    }
                });
            }

            function updateTotalPrice() {
                let total = 0;
                switch (selectedUnit) {
                    case 1: total = 10; break;
                    case 2: total = 18; break;
                    case 3: total = 24; break;
                }
                totalPriceElement.textContent = `Total : $${total.toFixed(2)} USD`;
            }

            unitBoxes.forEach(box => {
                box.addEventListener('click', function() {
                    selectedUnit = parseInt(this.dataset.unit);
                    updateUnitBoxes();
                    updateTotalPrice();
                });
            });

            // Initialize the UI
            updateUnitBoxes();
            updateTotalPrice();
        });
   