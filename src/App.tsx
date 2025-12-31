import { ProductCard } from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { formInputsList, productList } from "./data";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { type IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ui/ErrorMessage";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  //  State
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  // Handler
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
  }

  function onCancel() {
    setProduct(defaultProductObj);
    close();
  }

  //  Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} proudct={product} />
  ));

  const renderFormInput = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2n px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));
  return (
    <>
      <main className="container mx-auto px-4">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
          Add
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
          {renderProductList}
        </div>
        <Modal title="Add New Product" isOpen={isOpen} closeModal={close}>
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInput}
            <div className="flex items-center space-x-3 ">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                Submit
              </Button>
              <Button
                className="bg-gray-300 hover:bg-gray-800"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  );
}

export default App;
