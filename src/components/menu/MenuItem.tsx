import React from 'react'

const MenuItem = () => {
  return (

      <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <img src={"/images/pizza.png"} alt="pizza" />
        <h4 className="font-semibold my-2 text-2xl">Pepperoni Pizza</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className=" mt-4 bg-primary text-white rounded-full px-4 py-2">
          Add to Cart $12
        </button>
      </div>

  );
}

export default MenuItem