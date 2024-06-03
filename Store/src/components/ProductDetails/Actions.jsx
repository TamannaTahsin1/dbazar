"use client";

import { useState } from "react";
import { Button } from "../Button/Button";

export default function Actions({ stock }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 border">
          <Button
            className="rounded-none bg-gray-200 text-black"
            onClick={() =>
              setQuantity((prevState) => (prevState == 1 ? 1 : prevState - 1))
            }
          >
            -
          </Button>{" "}
          {quantity}
          <Button
            disabled={quantity == 10}
            className="rounded-none bg-gray-200 text-black disabled:bg-red-500"
            onClick={() => {
              setQuantity((prevState) =>
                prevState == 10 ? 10 : prevState + 1,
              );
            }}
          >
            +
          </Button>
        </div>
        <Button className="px-10">Add to Cart</Button>
      </div>
      <p className="text-xs text-rose-700">
        {quantity == 10 && "You reached Maximum quantity: 10"}
      </p>
    </>
  );
}
