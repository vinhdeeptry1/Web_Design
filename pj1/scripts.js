document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseInt(product.dataset.price);

            // Thêm sản phẩm vào giỏ
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ${productPrice.toLocaleString('vi-VN')} VND`;
            cartItems.appendChild(cartItem);

            // Cập nhật tổng giá
            const currentTotal = parseInt(totalPrice.textContent.replace(/,/g, ''));
            totalPrice.textContent = (currentTotal + productPrice).toLocaleString('vi-VN');
        });
    });
});
