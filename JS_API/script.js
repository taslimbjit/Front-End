document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#data-table tbody');
    
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => {
        data.entries.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.API}</td>
            <td>${item.Description}</td>
            <td>${item.Auth ? 'Yes' : 'No'}</td>
            <td>${item.HTTPS ? 'Yes' : 'No'}</td>
            <td>${item.Category}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });