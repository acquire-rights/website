document.addEventListener('DOMContentLoaded', function() {
  // Donor list
    const donorsList = document.querySelector('.donors-list');
    const donors = [
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 },
        { name: 'Ahmet Hamdi', amount: 2500.00 }
    ];

    const leftColumn = document.querySelector('.donors-list .left-column');
    const rightColumn = document.querySelector('.donors-list .right-column');

    donors.forEach((donor, index) => {
        const donorElement = document.createElement('p');
        const dots = '-'; // Nokta sayısını ihtiyaca göre ayarlayabilirsiniz
        donorElement.textContent = `${donor.name} ${dots} ${donor.amount.toFixed(2)}$`;
        donorElement.style.display = 'flex';
        donorElement.style.gap = '24px';
        
        const nameSpan = document.createElement('span');
        const amountSpan = document.createElement('span');
        nameSpan.textContent = donor.name;
        amountSpan.textContent = `${donor.amount.toFixed(2)}$`;
        
        donorElement.innerHTML = '';
        donorElement.appendChild(nameSpan);
        donorElement.appendChild(document.createTextNode(dots));
        donorElement.appendChild(amountSpan);
        
        if (index % 2 === 0) {
            leftColumn.appendChild(donorElement);
        } else {
            rightColumn.appendChild(donorElement);
        }
    });
})