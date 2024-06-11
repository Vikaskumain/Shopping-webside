import  { useEffect, useState } from 'react';
import axios from 'axios';

import { FaShoppingBag } from 'react-icons/fa';
import { MdBookmark } from "react-icons/md";

function Product() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen py-10 bg-white ">
      <div className=" flex  space-x-6 justify-evenly text-white cursor-pointer">
      <div className="bag-icon"><img className=" " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNU7lHRCRx3qE4F4_48z5F1qdsV02qSC2xveM3z6Kt578nWTZzHx2jJJKAv864smuXjU&usqp=CAU" alt="bag-icon"/>
      <div className="bag-heading ml-3 mt-2 ">All Bags</div>
      </div>
      <div className="bag-icon">
      <img src="https://media.istockphoto.com/id/1309020912/vector/cosmetic-bag.jpg?s=612x612&w=0&k=20&c=ogTCViFapoQ7gBHbr744uLFoEvDbNAIWL4_rbgYxXLM= " alt="bag-icon"/>
      <div className="bag-heading ml-3 mt-2 ">Vanity Pouch</div>
      </div>
        <div className="bag-icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1NoNV126vd7H9LywoynivTLcKHrpeEeJGg&s" alt="tote"/> 
        <div className="bag-heading ml-3 mt-2 ">Tote Bag</div>
        </div>
        
        <div className="bag-icon">
        <img src="https://static.vecteezy.com/system/resources/previews/007/489/399/non_2x/sports-bag-glyph-icon-duffel-handbag-silhouette-symbol-negative-space-isolated-illustration-vector.jpg" alt="buffle"/> 
        <div className="bag-heading ml-3 mt-2 ">Buffle Bag</div>
        </div>
        <div className="bag-icon">
        <img src="https://static.vecteezy.com/system/resources/previews/014/860/582/non_2x/men-laptop-bag-icon-simple-case-purse-vector.jpg" alt="sleev"/> 
        <div className="bag-heading ml-3 mt-2 ">Laptop Sleelve</div>
        </div>
        <div className="bag-icon">
        <img src="https://static.thenounproject.com/png/3917586-200.png" alt="messenger"/> 
        <div className="bag-heading ml-3 mt-2 ">Messenger Bags</div>
        </div>

        <div className="bag-icon">
        <img src="https://i.pinimg.com/474x/e7/86/e0/e786e0acf1cc9275969c2fdf34cfe358.jpg" alt="siling"/> 
        <div className="bag-heading ml-3 mt-2 ">Silings Bags</div>
        </div>
        <div className="bag-icon">
        <img src="https://png.pngtree.com/png-clipart/20231005/original/pngtree-handbag-icon-vector-image-illustration-travel-bag-vector-vector-png-image_12966816.png" alt="hand"/> 
        <div className="bag-heading ml-3 mt-2 ">Hand Bags</div>
        </div>
        <div className="bag-icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukSZFYLZKAxlmZgvuONRDr6S2MHzuFyaZiA&s" alt="bucket"/> 
        <div className="bag-heading ml-3 mt-2 ">Bucket Bags</div>
        </div>
      </div>

      <div className=" min-h-screen text-white">
      <div className="py-12 ml-12">
        <h1 className="text-3xl font-bold text-black ">Bags: Backpacks</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 cursor-pointer">
        {products.map(product => (
          <div key={product.id} className="cart-div rounded-3xl bg-gray-800 p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden box-border  ease-in">
            <div className="flex justify-between ">
              <img
                src={product.image}
                className="h-48 w-full object-cover rounded-3xl"
                alt={product.title}
              />
              <div className="ml-2  text-white w-4 h-4">
                <MdBookmark  className='h-4 w-4'/>
              </div>
            </div>
            <h1 className="text-lg font-semibold mt-2">{product.title}</h1>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-bold">${product.price}</p>
              <FaShoppingBag />
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Product
