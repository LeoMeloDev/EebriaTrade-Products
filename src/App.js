import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import request from "./utils/request";
import { createChildrenArray } from "./utils/createChildrenArray";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    request()
      .then(data => {
        //store the raw (original) data to use later
        setData(data);

        // create array of react components - this becomes products
        const children = createChildrenArray(data);

        // products become an array of elements which are shown in the return statement
        setProducts(children);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleFilterBeers = () => {
    //filter the elements to show only beers
    const beers = data.filter(item => item.style === "beer");
    // create the children array
    const children = createChildrenArray(beers);
    // show only beers
    setProducts(children);
  };

  const handleFilterCiders = () => {
    //filter the elements to show only ciders
    const ciders = data.filter(item => item.style === "cider");
    // create the children array
    const children = createChildrenArray(ciders);
    //show only ciders
    setProducts(children);
  };

  const handleAscFilter = () => {
    // order the data into an ascending order
    const ordered = data.sort((a, b) => a.price - b.price);
    //get products array on the new order
    const children = createChildrenArray(ordered);
    // set the new order as the products to show in the return statement
    setProducts(children);
  };

  const handleDescFilter = () => {
    // order the data into an descending order
    const ordered = data.sort((a, b) => b.price - a.price);
    //get products array on the new order
    const children = createChildrenArray(ordered);
    // set the new order as the products to show in the return statement
    setProducts(children);
  };

  const clearFilters = () => {
    //This filter will clear selection of beers or ciders
    setData(data);
    const children = createChildrenArray(data);
    setProducts(children);
  };

  return (
    <div className="App">
      <Header />
      <Filters
        onBeerClick={handleFilterBeers}
        onCiderClick={handleFilterCiders}
        onAsc={handleAscFilter}
        onDesc={handleDescFilter}
        clearFilters={clearFilters}
      />
      {/* // show total amount of products available bfore and after filters  */}
      <p className="product-view">{`We have ${products.length} items available in your selection...`}</p>
      <div className="product-wrapper">
        {/* Loading function before the API loads */}
        {isLoading ? <p className="isLoading">Loading!...</p> : products}
      </div>
      <Footer />
    </div>
  );
}

export default App;
