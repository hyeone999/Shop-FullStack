import { SearchProps } from "../../../utils/types";

const SearchInput = ({ searchTerm, onSearch }: SearchProps) => {
  return (
    <input
      className="p-2 border border-gray-300 rounded-lg"
      type="text"
      placeholder="검색하세요."
      value={searchTerm}
      onChange={onSearch}
    />
  );
};

export default SearchInput;
