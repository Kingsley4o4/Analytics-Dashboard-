import { Images } from "lucide-react";
import { useGetImageQuery } from "../Service/imgApi";


import React from 'react'

function Images() {
    const { data, isLoading, error } = useGetImageQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {/* {data.products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt={product.title} width={200} />
        </div>
      ))} */}


       {data.products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img
            src={product.thumbnail}
            alt={product.title}
            width={200}
          />
        </div>
      ))}
    </div>
  );
}

export default Images