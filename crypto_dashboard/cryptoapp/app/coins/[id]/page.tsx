import BackButton from "@/components/BackButton";
import Image from "next/image";

const CryptoCoin = async ({ params }: { params: { id: string } }) => {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": `${process.env.API_KEY}` },
  };

  const coinInfo = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.id}`,
    options
  ).then((response) => response.json());

  return (
    <div className=" flex flex-col items-center gap-5 wrapper-container mt-10">
      <h2 className="text-4xl font-bold">{coinInfo?.name}</h2>
      <Image
        src={coinInfo?.image.large}
        alt="coin"
        priority
        width={200}
        height={12}
      />
      <div className=" mt-5 w-full text-xl mb-20 flex flex-col gap-4 max-w-2xl bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg p-5">
        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Symbol
            </dt>
            <dd className="text-lg font-semibold">
              {coinInfo?.symbol.toUpperCase()}
            </dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Current Price
            </dt>
            <dd className="text-lg font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(coinInfo?.market_data.current_price.usd)}
            </dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Market Cap Rank
            </dt>
            <dd className="mb-3 text-lg font-semibold">
              #{coinInfo?.market_data.market_cap_rank}
            </dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Market Cap
            </dt>
            <dd className="mb-3 text-lg font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(coinInfo?.market_data.market_cap.usd)}
            </dd>
          </div>
          <div className="mb-3 flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Percent Change 24h
            </dt>
            <dd className="text-lg font-semibold">
              {coinInfo?.market_data.price_change_percentage_24h}%
            </dd>
          </div>
          <div className="mb-3 flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Percent Change 7d
            </dt>
            <dd className="text-lg font-semibold">
              {coinInfo?.market_data.price_change_percentage_7d_in_currency.usd}
              %
            </dd>
          </div>
          <div className="mb-3 flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Total Supply
            </dt>
            <dd className="text-lg font-semibold">
              {coinInfo?.market_data.total_supply}
            </dd>
          </div>
        </dl>
      </div>

      <BackButton />
    </div>
  );
};
export default CryptoCoin;
