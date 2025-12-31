// import { Button } from "@headlessui/react";
import { ProductCard } from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { formInputsList, productList } from "./data";
import { useState } from "react";

function App() {
  //  State
  const [isOpen, setIsOpen] = useState(false);

  // Handler
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  //  Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} proudct={product} />
  ));

  const renderFormInput = formInputsList.map((input) => (
    <div
      className="flex flex-col"
    >
      <label htmlFor={input.id}>{input.label}</label>
      <Input id={input.id} name={input.name}/>
    </div>
  ));
  return (
    <>
      <main className="container mx-auto">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
          Add
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
          {renderProductList}
        </div>
        <Modal title="Add New Product" isOpen={isOpen} closeModal={close}>
          {renderFormInput}
          <div className="flex items-center space-x-3 ">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-800">Cancel</Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
