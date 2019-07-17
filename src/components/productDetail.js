import React, {useState} from 'react'
import priceFormat from '../utils/priceFormat'
import {
  Tag, 
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect
}
from '../styles/components'
import {SEO} from './'

export default function productDetail({price, sku: id,product:{name, metadata}}) {
  const formatPrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={name}/>
      <img src={metadata.img} alt={name}/>
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatPrice}</b>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>G</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={()=> (qty > 1 ? setQty(qty -1): null)}>-</button>
          <input type='text' disabled value={qty}/>
          <button onClick={()=> setQty(qty+1)}>+</button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}
