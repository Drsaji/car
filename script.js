const services = document.querySelectorAll('.service');
const totalPriceElement = document.getElementById('total-price');
const billTable = document.getElementById('bill-table');

function updateBill() {
  let total = 0;
  let billContent = '<tr><th>Service</th><th>Price</th></tr>';

  services.forEach(service => {
    if (service.checked) {
      const name = service.getAttribute('data-name');
      const price = parseFloat(service.getAttribute('data-price'));
      total += price;
      billContent += `<tr><td>${name}</td><td>$${price.toFixed(2)}</td></tr>`;
    }
  });

  billTable.innerHTML = billContent;
  totalPriceElement.textContent = total.toFixed(2);
}

services.forEach(service => {
  service.addEventListener('change', updateBill);
});

function printBill() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const billHTML = `
    <h2 style="text-align:center;">Car Wash Invoice</h2>
    <p><strong>Customer:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    ${billTable.outerHTML}
    <p><strong>Total: $${totalPriceElement.textContent}</strong></p>
  `;

  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Car Wash Invoice</title>');
  printWindow.document.write('<style>body{font-family: Arial, sans-serif; text-align: center;}</style></head><body>');
  printWindow.document.write(billHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}
