export async function getCoins() {
  const headers = {
    "x-cg-demo-api-key": `${process.env.API_KEY}`,
  };

  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
