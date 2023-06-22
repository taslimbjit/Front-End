import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './styles.css';

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets?limit=10');
        const data = await response.json();
        const transformedData = data.data.map(coin => ({
          rank: coin.rank,
          name: {
            common: coin.name,
            official: coin.name,
            nativeName: {
              ara: {
                official: coin.name,
                common: coin.symbol
              }
            }
          },
          symbol: coin.symbol,
          priceUsd: coin.priceUsd,
          marketCapUsd: coin.marketCapUsd,
          volumeUsd24Hr: coin.volumeUsd24Hr,
          changePercent24Hr: coin.changePercent24Hr,
          explorer: coin.explorer
        }));
        setCoinData(transformedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: 'Rank',
      selector: 'rank',
      sortable: true,
      filter: true,
    },
    {
      name: 'Name',
      selector: 'name.common',
      sortable: true,
      filter: true,
    },
    {
      name: 'Symbol',
      selector: 'symbol',
      sortable: true,
      filter: true,
    },
    {
      name: 'Price (USD)',
      selector: 'priceUsd',
      sortable: true,
    },
    {
      name: 'Market Cap (USD)',
      selector: 'marketCapUsd',
      sortable: true,
    },
    {
      name: 'Volume (USD)',
      selector: 'volumeUsd24Hr',
      sortable: true,
    },
    {
      name: '24h Change (%)',
      selector: 'changePercent24Hr',
      sortable: true,
    },
    {
      name: 'Explorer',
      cell: (row) => (
        <a href={row.explorer} target="_blank" rel="noopener noreferrer">
          {row.explorer}
        </a>
      ),
    },
  ];

  return (
    <div className="container">
      {coinData.length > 0 ? (
        <DataTable
          columns={columns}
          data={coinData}
          pagination
          highlightOnHover
          striped
          noHeader
          className="custom-table"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
