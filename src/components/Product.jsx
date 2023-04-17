import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => {

  const [carResponse, setCarResponse] = useState("")
  let urlParams = new URLSearchParams(window.location.search)

  const getCars = async () => {
    try {
  
      const response =  await fetch(
        `https://product-api-production-0e9a.up.railway.app/products/${urlParams.get('id')}`
      );
     const carApi= await response.json();
     
      setCarResponse(carApi)
      
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching the data");
    }
  };
  
  
  
  useEffect(() => {
    getCars();
  }, []);
  


  return (
    <div>Productsdsdsada</div>
  )
}

export default Product