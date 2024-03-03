import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './modal';
import { ShoppingCart } from 'lucide-react';

function gigs(props) {
  const [selectedProduct, setSelectedProduct] = useState([])

  return (
    <div className='bg-white rounded-md flex flex-wrap gap-3 p-5'>
        {props.products.map((product, index)=>(
              <div key={product.id} className="relative max-md:mx-auto md:mt-0 mt-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img className="object-cover mx-auto" src={product.productImage[0].url} alt="product image" />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.sale}% OFF</span>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{product.productName}</h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-2xl font-bold text-slate-900">₪{product.productPrice}</span>
                      <span className="text-sm text-slate-900 line-through">₪699</span>
                    </p>
                    
                  </div>
                  <a href="#" onClick={()=>{(window).my_modal_3.showModal();setSelectedProduct(product)}} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <ShoppingCart />
                    Add to cart
                    </a>
                </div>
          </div>
        ))}
          
          <dialog id='my_modal_3' className='modal w-[1000px] h-[500px] rounded-md '>
            <Modal product={selectedProduct} />
          </dialog>
    </div>
  )
}

export default gigs