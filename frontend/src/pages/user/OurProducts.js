import React from 'react'
import './OurProducts.css'
import ProductList from '../../components/ProductList/ProductList';
import HeroSection from '../../components/Hero/HeroSection';

console.log(ProductList)


const products = [
    {
      id: 1,
      name: 'Nets',
      photo: require('../../images/common.png'),
      description: 'High Density Polyethylene (HDPE) is a material with large strength to density ratio. HDPE nets are good in chemical and abrasion resistance. Hence, HDPE nets are suitable to be used in activities such as trawling, fish cage, durian net, golf net and construction.',
      expandedDetails: 'Now, each product object in your products array includes an expandedDetails property that holds the additional information. You can add this property for each product.'
    },
    {
        id: 2,
        name: 'Twists',
        photo: require('../../images/article-03.png'),
        description: 'Nylon is one of the most common material used in netting. It is soft, very strong, high elastic and good abrasion resistance. Nylon contains excellent breaking strength and toughness compare with HDPE material. Nylon net is widely used in commercial fishing such as purse seine, gill and others.',
        expandedDetails:'Now, each product object in your products array includes an expandedDetails property that holds the additional information. You can add this property for each product.'
      },
      
      
    
    
      
    
  ];
  

function OurProducts() {
    return (
        <div>
            <div className='product-page'>
                <HeroSection>
                    <h1 className='product-text-home'><span className='product-text'>Our Products</span></h1>
                    
                </HeroSection>
                {/* <div className='product-hero'>
                     <div className='section-content-container'>
                        <h1 className='product-text'><span className='product-block-text'>Our Products</span></h1>
                    </div>
                </div> */}
                <div >
                    <h1 className='topic-text'>Nets & Twists</h1>
                    <p className='para-product'>Discover the ultimate fishing net for all your angling adventures, meticulously crafted for durability, performance, and success on the water.</p>

                </div>
                
                
                <ProductList products={products} />
            </div>

        </div>
    );
}

export default OurProducts;