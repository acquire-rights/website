document.addEventListener('DOMContentLoaded', function() {
  // Details table
    const data = [
        { text: "Lorem Ipsum is simply dummy text" },
        { text: "Lorem Ipsum is simply dummy text" },
        { text: "Lorem Ipsum is simply dummy text" },
        { text: "Lorem Ipsum is simply dummy text" }
    ];

    const tableBody = document.getElementById('tableBody');

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="row-title">${item.text}</td>
            <td class="icon cross center-align">✗</td>
            <td class="icon check center-align">✓</td>
        `;
        tableBody.appendChild(row);
    });
})