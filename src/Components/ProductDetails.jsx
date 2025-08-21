import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import productData from "./data/products.json";

export default function ProductDetails() {
  const { productUName } = useParams(); // get product name from URL
  const decodedName = decodeURIComponent(productUName); // decode for safe comparison
  const [selectedCategory, setSelectedCategory] = useState(null); // track which category is selected
  const [hoveredCategory, setHoveredCategory] = useState(null); // track which category is hovered (for accordion)

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName); // set selected category
  };

  const handleHomeClick = () => {
    setSelectedCategory(null); // reset to "All Products"
  };

  // Flatten products array from all categories
  const allProducts = productData.flatMap((group) =>
    Array.isArray(group.product) ? group.product : []
  );

  // Find single product that matches the route parameter
  const product = allProducts.find(
    (p) => p.Uname.toLowerCase() === decodedName.toLowerCase()
  );

  // Show error if no matching product is found
  if (!product) {
    return (
      <div className="p-8 text-center text-red-600">Product not found</div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Decorative background shapes */}
      <div className="relative isolate px-4 sm:px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] 
                       w-[36.125rem] -translate-x-1/2 rotate-[30deg] 
                       bg-gradient-to-tr from-[#ff80b5] to-[#010010] 
                       opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-2 sm:px-4 py-8 flex-grow">
            {/* Mobile category filter (scrollable pills) */}
            <div className="md:hidden mb-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Categories
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {/* All Products button */}
                  <button
                    onClick={handleHomeClick}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      !selectedCategory
                        ? "bg-sky-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Products
                  </button>

                  {/* Render categories */}
                  {productData.map((categoryItem, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(categoryItem.category)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === categoryItem.category
                          ? "bg-sky-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {categoryItem.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop layout: sidebar + product detail */}
            <div className="pt-20 pb-10">
              <div className="flex gap-6">
                {/* Sidebar with categories */}
                <div className="hidden md:block w-1/4">
                  <div className="sticky top-6">
                    {/* Breadcrumb navigation */}
                    <nav className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
                      <ul className="flex flex-wrap text-gray-700 text-sm gap-1">
                        <li>
                          <Link to={"/"}>
                            <button
                              onClick={handleHomeClick}
                              className="hover:text-sky-600 transition-colors font-medium"
                            >
                              Home
                            </button>
                          </Link>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li>
                          <button
                            onClick={handleHomeClick}
                            className="hover:text-sky-600 transition-colors font-medium"
                          >
                            Products
                          </button>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-900 font-semibold">
                          {selectedCategory || "All Categories"}
                        </li>
                      </ul>
                    </nav>

                    {/* Sidebar category accordion */}
                    <div className="bg-white rounded-lg shadow-sm border">
                      <div className="p-4 border-b bg-gradient-to-r from-sky-50 to-blue-50">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Product Categories
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                          Find everything you need
                        </p>
                      </div>

                      <div className="p-4 space-y-2">
                        {/* All Products link */}
                        <div
                          className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            !selectedCategory
                              ? "bg-sky-100 border-l-4 border-sky-600"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={handleHomeClick}
                        >
                          <h3 className="font-semibold text-gray-800">
                            All Products
                          </h3>
                          <p className="text-xs text-gray-600">
                            Browse everything
                          </p>
                        </div>

                        {/* Category list */}
                        {productData.map((categoryItem, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-100 last:border-b-0"
                          >
                            {/* Category header */}
                            <div
                              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                selectedCategory === categoryItem.category
                                  ? "bg-sky-100 border-l-4 border-sky-600"
                                  : "hover:bg-gray-50"
                              }`}
                              onClick={() =>
                                setSelectedCategory(categoryItem.category)
                              }
                              onMouseEnter={() => setHoveredCategory(index)}
                              onMouseLeave={() => setHoveredCategory(index)}
                            >
                              <h3 className="font-semibold text-gray-800">
                                {categoryItem.category}
                              </h3>
                            </div>

                            {/* Expandable product list */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                hoveredCategory === index
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="pl-6 pr-3 pb-3">
                                <ul className="space-y-2">
                                  {categoryItem.product?.map((p, idx) => (
                                    <li key={idx}>
                                      <Link
                                        to={`/products/${encodeURIComponent(
                                          p.Uname
                                        )}`}
                                        className="text-gray-600 hover:text-sky-600 block py-1 text-sm transition-colors"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product detail section */}
                <div className="flex-1 p-8 max-w-2xl mx-auto">
                  <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

                  <div className="mb-10 border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-200 transition-all">
                    {/* Product image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-auto h-auto object-contain bg-gray-50 rounded-lg mb-4"
                    />

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      {product.knowmore && (
                        <a
                          href={product.knowmore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
                            Know More
                          </button>
                        </a>
                      )}
                      {product.catalogue && (
                        <a
                          href={product.catalogue}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                            Catalogue
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background shape bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] 
                       w-[36.125rem] -translate-x-1/2 
                       bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
                       opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
