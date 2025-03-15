import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDis from '../Components/ProductDisplay/ProductDis';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Debugging logs
  console.log("Product ID:", productId);
  console.log("All Products:", all_product);

  // Check if product exists
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <h2 style={{ textAlign: "center", margin: "20px" }}>Product Not Found</h2>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDis product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
