import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ placeholder, onChange }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="flex items-center">
      <input
        placeholder={placeholder}
        type="search"
        className="bg-default px-[10px] py-[10px] w-[184px] h-9 rounded-tl-xl rounded-bl-xl"
        onChange={onChange}
      />
      <button
        type="submit"
        className="h-9 w-[45px] bg-secondaryAdmin text-cusWhite flex items-center justify-center rounded-tr-xl rounded-br-xl"
      >
        <CiSearch size={25} />
      </button>
    </form>
  );
};

export default Searchbar;
