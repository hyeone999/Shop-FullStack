import { PriceProps } from "../../../utils/types";

const RadioBox = ({ prices, checkedPrice, onFilters }: PriceProps) => {
  console.log(checkedPrice);

  return (
    <div className="p-2 mb-3 bg-gray-100 rounded-md">
      {prices?.map((price) => (
        <div key={price._id}>
          <input
            type="radio"
            onChange={(e) => onFilters([parseInt(e.target.value, 10)])}
            checked={checkedPrice === price.array}
            id={String(price._id)}
            value={price._id}
          />{" "}
          <label htmlFor={String(price._id)}>{price.name}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioBox;
