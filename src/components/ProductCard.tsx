import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  proudct: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
}

export const ProductCard = ({
  proudct,
  setProductToEdit,
  openEditModal,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = proudct;
  // ----------------------- Render ---------------------------
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  // ----------------------- Handler ---------------------------
  function handleOnEdit() {
    setProductToEdit(proudct);
    openEditModal();
  }

  return (
    <div className="border border-slate-300 rounded-md p-2 flex flex-col justify-between max-w-sm md:max-w-lg">
      <Image
        imageURL={imageURL}
        alt={"Product Name"}
        className="rounded-md aspect-4/3 w-full overflow-hidden"
      />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-1 flex-wrap ">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span>${price}</span>
        <img
          src={category.imageURL}
          alt={category.name}
          className="w-5 h-5 rounded-full object-center"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 cursor-pointer" onClick={handleOnEdit}>
          Edit
        </Button>
        <Button className="bg-red-700 p-2">Delete</Button>
      </div>
    </div>
  );
};
