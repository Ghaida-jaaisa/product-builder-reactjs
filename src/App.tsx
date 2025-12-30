import { ProductCard } from "./components/ProductCard";
import { productList } from "./data";

function App() {
  // ** Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} proudct={product} />
  ));
  return (
    <>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 rounded-md m-5 max-w-md md:max-w-2xl">
        {renderProductList}
      </div>
    </>
  );
}

export default App;
