document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.coincap.io/v2/assets')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error loading data from the API');
        }
      })
      .then(function(data) {
        var assets = data.data; // Access the assets array
  
        // Populate the table with data
        var table = $('#myTable').DataTable({
          data: assets,
          columns: [
            { data: 'id' },
            { data: 'rank' },
            { data: 'symbol' },
            { data: 'name' },
            { data: 'supply' },
            { data: 'maxSupply' },
            { data: 'marketCapUsd' }
          ]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  