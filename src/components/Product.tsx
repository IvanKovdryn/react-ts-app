import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? "bg-blue-300" : "bg-yellow-300";
  const btnClasses = ["py-2 px-4 border", btnClassName];
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        onClick={() => setDetails((prev) => !prev)}
        className={btnClasses.join(" ")}
      >
        {details ? "hide details" : "show details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            rate:{" "}
            <span style={{ fontWeight: "bold" }}> {product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
