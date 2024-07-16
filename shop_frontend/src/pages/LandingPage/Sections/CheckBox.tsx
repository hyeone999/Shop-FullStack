import { CheckBoxProps } from "../../../utils/types";

const CheckBox = ({
  continents,
  checkedContinents,
  onFilters,
}: CheckBoxProps) => {
  const handleToggle = (continentId: number) => {
    // 현재 누른 checkbox가 이미 누른 checkbox인지 확인
    const currentIndex = checkedContinents.indexOf(continentId);

    const newChecked = [...checkedContinents];

    if (currentIndex === -1) {
      newChecked.push(continentId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    onFilters(newChecked);
  };

  return (
    <div className="p-2 mb-3 bg-gray-100 rounded-md">
      {continents?.map((continent) => (
        <div key={continent._id}>
          <input
            type="checkbox"
            onChange={() => handleToggle(continent._id)}
            checked={
              checkedContinents.indexOf(continent._id) === -1 ? false : true
            }
          />{" "}
          <label>{continent.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
