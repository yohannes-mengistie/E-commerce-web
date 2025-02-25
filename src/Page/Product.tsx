import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Components/BreadCrums/BreadCrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const shopContext = useContext(ShopContext)
  const products = shopContext ? shopContext.products : []
  const {productId} = useParams();
  const product = products.find((e) => String(e.id) === productId)

  return (
    <div>
       {product && <BreadCrum product={product} />}
       {product && <ProductDisplay product={product} />}
       <DescriptionBox />
       <RelatedProducts />
    </div>
  )
}

