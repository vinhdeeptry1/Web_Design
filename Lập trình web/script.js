// script.js

// Danh sách giỏ hàng
let cart = [];

// Xem thông tin sản phẩm
function viewProduct(name, price) {
  alert(`Sản phẩm: ${name}\nGiá: ${price} VND`);
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(event, name, price) {
  event.stopPropagation(); // Ngăn chặn sự kiện click trên catalog-item
  // Thêm sản phẩm vào danh sách giỏ hàng
  cart.push({ name, price });
  updateCart();
}

// Cập nhật giỏ hàng
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Làm rỗng nội dung cũ
  cartItemsDiv.innerHTML = '';
  
  // Hiển thị từng sản phẩm
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <div>
        <span>${item.name}</span>
        <span>${item.price} VND</span>
        <button onclick="removeFromCart(${index})">Xóa</button>
      </div>
    `;
  });

  // Cập nhật tổng tiền
  cartTotal.textContent = `Tổng tiền: ${total} VND`;
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  cart.splice(index, 1); // Xóa sản phẩm theo chỉ mục
  updateCart();
}

// Thanh toán
function checkout() {
  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống!');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Cảm ơn bạn đã mua hàng! Tổng tiền thanh toán: ${total} VND`);
  cart = []; // Xóa giỏ hàng sau khi thanh toán
  updateCart();
}
