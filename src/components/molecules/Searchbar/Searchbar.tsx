import React, { FC, FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

type Props = {
  placeholder?: string;
};

const Searchbar: FC<Props> = ({ placeholder }) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="flex items-center">
      <input
        placeholder={placeholder}
        type="search"
        className="bg-default px-[10px] py-[10px] w-[184px] h-9 rounded-tl-xl rounded-bl-xl"
      />
      <button
        type="submit"
        className="h-9 w-[45px] bg-secondaryAdmin text-cusWhite flex items-center justify-center rounded-tr-xl rounded-br-xl"
      >
        <CiSearch size={25} />
      </button>
      <FiFilter size={25} className="ml-4" />
    </form>
  );
};

export default Searchbar;
