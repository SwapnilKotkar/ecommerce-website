import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const productsList = [
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/1",
      name: "Timely Watch",
      price: "$15.00",
      original_price: "$30.00",
    },
    {
      img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/2",
      name: "Fancy Plant",
      price: "$9.00",
      original_price: "$13.00",
    },
    {
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/3",
      name: "Elderly Cam",
      price: "$45.00",
      original_price: "$50.00",
    },
    {
      img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/4",
      name: "Shiny Shoe",
      price: "$29.00",
      original_price: "$35.00",
    },
    {
      img: "https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/5",
      name: "Spiky Plant",
      price: "$4.00",
      original_price: "$9.00",
    },
    {
      img: "https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/6",
      name: "Wieldy Film",
      price: "$19.00",
      original_price: "$25.00",
    },
    {
      img: "https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/7",
      name: "Wieldy Film",
      price: "$19.00",
      original_price: "$25.00",
    },
    {
      img: "https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600",
      link: "productdetails/8",
      name: "Lazy Bottle",
      price: "$9.00",
      original_price: "$10.00",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
            Products
          </h2>

          {/* <a href="#" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Show more</a> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
          {productsList.map((product, index) => {
            return (
              <div key={index}>
                <Link
                  to={product.link}
                  className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
                >
                  <img
                    src={product.img}
                    loading="lazy"
                    alt="pic by Kiran CK"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />
                </Link>

                <div>
                  <Link
                    to={product.link}
                    className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                  >
                    {product.name}
                  </Link>

                  <div className="flex items-end gap-2">
                    <span className="text-gray-800 lg:text-lg font-bold">
                      {product.price}
                    </span>
                    <span className="text-red-500 line-through mb-0.5">
                      {product.original_price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
