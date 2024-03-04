"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { CoinProps } from "@/app/types";

interface CoinCardProps {
  coin: CoinProps;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
  } = coin;

  const navigateUrl = `/coins/${id}`;

  return (
    <Link href={navigateUrl}>
      <div
        className="shadow-md min-h-[350px] border-gray-200 border car-card group"
        role="link"
        tabIndex={0}
      >
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {name} {symbol.toUpperCase()}
          </h2>
        </div>
        <p>
          <span className="font-semibold">Current Price: ${current_price}</span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={image}
            alt="coin"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div>{market_cap_rank}</div>
      </div>
    </Link>
  );
};
export default CoinCard;
