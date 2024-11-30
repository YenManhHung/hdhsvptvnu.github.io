let cart = [];
        let total = 0;

        function addToCart(productName, productPrice) {
            cart.push({ name: productName, price: productPrice });
            total += productPrice;

            renderCart();
        }

        function renderCart() {
            const cartItems = document.getElementById('cart-items');
            const totalElement = document.getElementById('total');

            cartItems.innerHTML = '';
            cart.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
                cartItems.appendChild(li);
            });

            totalElement.textContent = total.toLocaleString();
        }