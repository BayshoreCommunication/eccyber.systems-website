"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    image: "/images/eccyber.systems/book_1.png",
    title: "Charlie the Cyber Dog Saves the Day",
    category: "Children's Book",
    price: "$9.00",
    oldPrice: "$12.00",
    badge: "New",
    color: "orange",
    amazonLink: "#",
  },
  // {
  //   image: "/images/eccyber.systems/book_2.png",
  //   title: "Cyber Safety Coloring & Activity Book",
  //   category: "Activity Book",
  //   price: "$11.00",
  //   badge: "New",
  //   color: "blue",
  //   amazonLink: "https://www.amazon.com/dp/your-product-id-2",
  // },
  // {
  //   image: "/images/eccyber.systems/book_3.png",
  //   title: "Charlie the Cyber Dog Notebook",
  //   category: "Stationery",
  //   price: "$6.00",
  //   badge: "New",
  //   color: "green",
  //   amazonLink: "https://www.amazon.com/dp/your-product-id-3",
  // },
  {
    image: "/images/eccyber.systems/book_4.png",
    title: "When Conversations Turn into Agreements",
    category: "Teen Guide",
    price: "$7.00",
    oldPrice: "$10.00",
    badge: "New",
    color: "purple",
    amazonLink: "#",
  },
  // {
  //   image: "/images/eccyber.systems/book_1.png",
  //   title: "Charlie's Online Safety Guide for Kids",
  //   category: "Children's Book",
  //   price: "$8.50",
  //   oldPrice: "$11.00",
  //   badge: "Popular",
  //   color: "orange",
  //   amazonLink: "https://www.amazon.com/dp/your-product-id-5",
  // },
  // {
  //   image: "/images/eccyber.systems/book_2.png",
  //   title: "Digital Citizenship Workbook",
  //   category: "Activity Book",
  //   price: "$10.00",
  //   badge: "Sale",
  //   color: "blue",
  //   amazonLink: "https://www.amazon.com/dp/your-product-id-6",
  // },
  // {
  //   image: "/images/eccyber.systems/book_3.png",
  //   title: "Cyber Hero Sticker Pack & Planner",
  //   category: "Stationery",
  //   price: "$5.00",
  //   badge: "New",
  //   color: "green",
  //   amazonLink: "https://www.amazon.com/dp/your-product-id-7",
  // },
  // {
  //   image: "/images/eccyber.systems/book_4.png",
  //   title: "Family Tech Agreement Toolkit",
  //   category: "Parent Guide",
  //   price: "$12.00",
  //   oldPrice: "$15.00",
  //   badge: "Bestseller",
  //   color: "purple",
  //   amazonLink: "https://www.amazon.com/dp/your-product-id-8",
  // },
];

const colors: Record<string, string> = {
  orange:
    "border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white",
  blue: "border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white",
  green: "border-green-500 text-green-600 hover:bg-green-600 hover:text-white",
  purple:
    "border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white",
};

const FeaturedProducts = () => {
  return (
    <section
      id="products"
      className="pt-4 pb-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-300 bg-orange-50 px-6 py-3 shadow-sm">
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <span className="font-semibold uppercase tracking-widest text-orange-600">
              Our Collection
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Featured Products
          </h2>

          <p className="mt-5 text-xl text-slate-500">
            Explore our best resources to learn, teach and stay safe online.
          </p>
        </div>

        {/* Products Grid (8 Products) */}
        {/* Products Grid (2 Products - Centered) */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div>
                <div className="relative overflow-hidden bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={650}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-500 shadow-md">
                    <Star className="h-4 w-4 fill-orange-500" />
                    {product.badge}
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="flex min-h-[70px] items-center justify-center text-xl font-bold text-slate-900">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {product.category}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    {product.oldPrice && (
                      <span className="text-base text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}

                    <span className="text-3xl font-bold text-slate-900">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="p-6 pt-0 text-center">
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-8 py-3 font-semibold transition ${
                    colors[product.color] || colors.orange
                  }`}
                >
                  View Details
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
