import { ProductCard } from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { colors, formInputsList, productList } from "./data";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { type IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import Select from "./components/ui/Select";
import { v4 as uuid } from "uuid";
import { categories } from "./data";
import toast, { Toaster } from "react-hot-toast";

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
  //  ---------------------------------------- State ----------------------------------------
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);

  console.log(productToEditIdx);
  // ---------------------------------------- Handler ----------------------------------------
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function closeEditModal() {
    setIsOpenEditModal(false);
  }

  function openConfirmModal() {
    setIsOpenConfirmModal(true);
  }
  function closeConfirmModal() {
    setIsOpenConfirmModal(false);
  }
  function openEditModal() {
    setIsOpenEditModal(false);
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
  function onChangeEditHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function removeProductHandler() {
    const filtered = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been deleted", {
      icon: "🗑️",
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });
  }

  // function onRemove() {
  //   setProductToEdit(product);
  //   openConfirmModal();
  // }
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
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    // Clearing
    setProduct(defaultProductObj);
    setTempColors([]);
    close();
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = productToEdit;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);
    // Clearing
    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
  };

  function onCancel() {
    setProduct(defaultProductObj);
    close();
  }

  function onCancelEditModal() {
    setProductToEdit(defaultProductObj);
    closeEditModal();
  }
  function onCancelConfirmModal() {
    setProductToEdit(defaultProductObj);
    closeConfirmModal();
  }
  // ---------------------------------------- Renders ----------------------------------------
  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      proudct={product}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      openConfirmModal={openConfirmModal}
    />
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
  const renderFormEditInput = formInputsList.map((input) => (
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
        value={productToEdit[input.name]}
        onChange={onChangeEditHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
      key={color}
      color={color}
    />
  ));
  // -----------------------------------------------------------------
  return (
    <>
      <main className="container mx-auto px-4">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
          Build Product
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md items-stretch">
          {renderProductList}
        </div>
        {/* Add Product Modal */}
        <Modal title="Add New Product" isOpen={isOpen} closeModal={close}>
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInput}

            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="flex items-center my-4 space-x-1 flex-wrap ">
              {renderProductColors}
            </div>

            <div className="flex items-center my-4 space-x-1 flex-wrap ">
              {tempColors.map((color) => (
                <span
                  className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                  key={color}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

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
        {/* Edit Product Modal */}
        <Modal
          title="Edit thi Product"
          isOpen={isOpenEditModal}
          closeModal={closeEditModal}
        >
          <form className="space-y-3" onSubmit={submitEditHandler}>
            {renderFormEditInput}

            <Select
              selected={productToEdit.category}
              setSelected={(value) =>
                setProductToEdit({ ...productToEdit, category: value })
              }
            />
            <div className="flex items-center my-4 space-x-1 flex-wrap ">
              {renderProductColors}
            </div>

            <div className="flex items-center my-4 space-x-1 flex-wrap ">
              {tempColors.concat(productToEdit.colors).map((color) => (
                <span
                  className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                  key={color}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-3 ">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                Submit
              </Button>
              <Button
                className="bg-gray-300 hover:bg-gray-800"
                onClick={onCancelEditModal}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
        {/* Delete Confirm Product Modal */}
        <Modal
          title="Are you sure to remove this Product from your store?"
          isOpen={isOpenConfirmModal}
          closeModal={closeConfirmModal}
        >
          <div className="flex items-center space-x-3 ">
            <Button
              className="bg-red-700 hover:bg-red-800"
              onClick={removeProductHandler}
            >
              YES, Remove
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-800"
              onClick={onCancelConfirmModal}
            >
              Cancel
            </Button>
          </div>
        </Modal>
        <Toaster />
      </main>
    </>
  );
}

export default App;
