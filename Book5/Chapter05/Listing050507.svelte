<script>
  import { onMount } from 'svelte';
  const API_KEY = 'YOUR-KEY'; //get your own at finnhub.io
  const stockTicker = 'AAPL';
  const endpoint = `https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${API_KEY}`;
  onMount(() => {
    const timer = setInterval(() => {
      console.log('updating stock price');
      getLatestStockPrice();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  });

  async function getLatestStockPrice() {
    const response = await fetch(endpoint);
    if (response.ok) {
      const data = await response.json();
      return {
        stockPrice: data.c,
        stockPriceChange: data.d,
        stockPriceChangePercent: data.dp,
      };
    } else {
      throw new Error('Something went wrong');
    }
  }
</script>

<h1>Current {stockTicker} Price</h1>

{#await getLatestStockPrice()}
  <p>loading...</p>
{:then data}
  <p class={data.stockPriceChange > 0 ? 'stock-price-up' : 'stock-price-down'}>
    {data.stockPrice} ({data.stockPriceChange}
    {data.stockPriceChangePercent}%)
  </p>
{:catch error}
  <p>{error.message}</p>
{/await}

<style>
  .stock-price-up {
    color: green;
  }
  .stock-price-down {
    color: red;
  }
</style>
