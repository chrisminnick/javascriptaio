<script>
  import { onMount } from 'svelte';
  const API_KEY = 'cchhaoaad3i3n1clsuk0'; //get your own at finnhub.io
  const stockTicker = 'AAPL';
  const endpoint = `https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${API_KEY}`;
  let stockPrice = 0;
  let stockPriceChange = 0;
  let stockPriceChangePercent = 0;
  let stockPriceChangeDirection = 'up';
  let stockPriceChangeDirectionClass = 'stock-price-up';

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
    const data = await response.json();
    stockPrice = data.c;
    stockPriceChange = data.d;
    stockPriceChangePercent = data.dp;
    if (stockPriceChange < 0) {
      stockPriceChangeDirection = 'down';
      stockPriceChangeDirectionClass = 'stock-price-down';
    } else {
      stockPriceChangeDirection = 'up';
      stockPriceChangeDirectionClass = 'stock-price-up';
    }
  }
</script>

<h1>Current {stockTicker} Price</h1>
<p class={stockPriceChangeDirectionClass}>
  {stockPrice}
  <span class={stockPriceChangeDirectionClass}
    >{stockPriceChangeDirection}
    {stockPriceChange}

    ({stockPriceChangePercent}%
  </span>)
</p>

<style>
  .stock-price-up {
    color: green;
  }
  .stock-price-down {
    color: red;
  }
</style>
