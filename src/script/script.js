const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        const countElement = document.getElementById('count');

        let count = 0;

        function updateCount() {
            countElement.textContent = count;
        }

        incrementButton.addEventListener('click', () => {
            count++;
            updateCount();
        });

        decrementButton.addEventListener('click', () => {
            count--;
            updateCount();
        });
