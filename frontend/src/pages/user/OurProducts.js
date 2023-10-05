import React from 'react'
import './OurProducts.css'
import ProductList from '../../components/ProductList/ProductList';

console.log(ProductList)


const products = [
    {
      id: 1,
      name: 'HDPE Nets',
      photo: require('../../images/product-photo-01-in-home-page.png'),
      description: 'High Density Polyethylene (HDPE) is a material with large strength to density ratio. HDPE nets are good in chemical and abrasion resistance. Hence, HDPE nets are suitable to be used in activities such as trawling, fish cage, durian net, golf net and construction.',
    },
    {
        id: 2,
        name: 'Nylon Nets',
        photo: require('../../images/product-photo-01-in-home-page.png'),
        description: 'Nylon is one of the most common material used in netting. It is soft, very strong, high elastic and good abrasion resistance. Nylon contains excellent breaking strength and toughness compare with HDPE material. Nylon net is widely used in commercial fishing such as purse seine, gill and others.',
      },
      {
        id: 3,
        name: 'Polyester Nets',
        photo: require('../../images/product-photo-01-in-home-page.png'),
        description: 'Polyester is a soft material with excellent recovery from stretch and can retain its shape in both dry or wet environment. It is a great construction material for play areas such as climbing and walking structure that can provide safety.' 
     },
      
    
    
      
    
  ];
  

function OurProducts() {
    return (
        <div>
            <div className='product-page'>
                <div className='product-hero'>
                     <div className='section-content-container'>
                        <h1 className='product-text'><span className='product-block-text'>Our Products</span></h1>
                    </div>
                </div>
                <div >
                    <h1 className='topic-text'>Nets</h1>
                </div>
                
                <ProductList products={products} />
            </div>

        </div>
    );
}

export default OurProducts;