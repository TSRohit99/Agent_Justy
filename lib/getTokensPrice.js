const axios = require('axios');

async function fetchCryptoPrices() {
  const ids = 'bitcoin,ethereum,dogecoin,pudgy-penguins,solana,hyperliquid,aixbt,virtual-protocol,sui,dogwifcoin,fartcoin';
  const vsCurrencies = 'usd';

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
      params: {
        ids: ids,
        vs_currencies: vsCurrencies,
      },
    });

    const prices = response.data;
    console.log(prices)
    return prices;
  } catch (error) {
    console.error('Error fetching data from CoinGecko API:', error);
  }
}

// fetchCryptoPrices();


module.exports = {fetchCryptoPrices}
