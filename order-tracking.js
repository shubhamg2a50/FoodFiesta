
const orderStatus = { 101: "Processing", 102: "Shipped", 103: "Delivered"};

function trackorder(orderId) {
    return orderStatus[orderId] || "Order not found!";
}
console.log(trackorder (102));
console.log(trackorder(103));
