import type { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  proudct: IProduct
}

export const ProductCard = ({proudct} : IProps) => {
  const {title, description, imageURL} = proudct
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={"Product Name"}
        className="rounded-md"
      />
      <h3>{title}</h3>
      <p>
       {description}
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
      </div>

      <div className="flex items-center justify-between">
        <span>$500</span>
        <img
          src="./vite.svg"
          alt=""
          className="w-5 h-5 rounded-full object-center"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700">Delete</Button>
        <Button className="bg-red-700">Delete</Button>
        <Button className="bg-slate-900">Loading</Button>
        <Button className="bg-green-700">Success</Button>
        <Button className="bg-gray-300 p-2">Cancel</Button>
      </div>
    </div>
  );
};
