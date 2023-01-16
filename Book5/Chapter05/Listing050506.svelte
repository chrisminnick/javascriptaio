<script>
  onMount(() => {
    const timer = setInterval(() => getLatestStockPrice(), 60000);
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
