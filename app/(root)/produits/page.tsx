'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  images: string;
  name: string;
  brand: string;
  price: number;
  references: string;
  quantity: number;
}

export default function Page() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://backendgz.gamingzone.dz/api/getProducts/',
        );
        setData(response.data.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData().then(r => r);
  }, []);

  return (
    <section className=" flex flex-wrap justify-center gap-8 w-full py-10">
      {data?.map(product => (
        <div key={product.id} className="flex gap-1 w-80">
          <Image
            src={product.images}
            alt={product.name}
            width={100}
            height={45}
          />

          <ul className="w-60">
            <li>Produit: {product.name}</li>
            <li>Marque: {product.brand}</li>
            <li> reférence: {product.references}</li>
            <li> Prix: {product.price}</li>
            <li>Quantité: {product.quantity}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
