document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#loginForm');
  const outputDiv = document.querySelector('#output');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.querySelector('#name').value;
    const year = parseInt(document.querySelector('#year').value);
    const price = parseFloat(document.querySelector('#price').value);
    const cpu = document.querySelector('#cpu').value;
    const hardDisk = document.querySelector('#hardDisk').value;
    
    const data = {
      name: name,
      data: {
        year: year,
        price: price,
        "CPU model": cpu,
        "Hard disk size": hardDisk
      }
    };
    
    fetch('https://api.restful-api.dev/objects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      outputDiv.innerHTML = JSON.stringify(data, null, 2);
      // Update the 'output' div with the response data
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error response from API
    });
  });
});

