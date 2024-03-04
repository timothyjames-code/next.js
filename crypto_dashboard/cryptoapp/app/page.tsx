import Image from "next/image";
import Hero from "../components/Hero";

import { getCoins } from "../utils/index";
import CoinCard from "../components/CoinCard";

export default async function Home() {
  const allCoins = await getCoins();

  const isDataEmpty =
    !Array.isArray(allCoins) || allCoins.length < 1 || !allCoins;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container center ">
          <h1 className="text-4xl font-extrabold ">
            Top 100 Cryptocurriencies
          </h1>
        </div>
        <div className="home__filters"></div>
        {!isDataEmpty && Array.isArray(allCoins) ? (
          <section>
            <div className=" home__cars-wrapper">
              {allCoins?.map((coin, index) => (
                <CoinCard key={coin.id} coin={coin} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
