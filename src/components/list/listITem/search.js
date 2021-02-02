import { useContext, useState } from "react";
import { Found } from "./../../../state";

const Search = () => {
  const fondF = useContext(Found);
//   const [search, setSearch] = useState("");

//   const searchF = () => {
//     // setSearch (true)
//     // fondF(search);
//     // console.log(search)
//     // console.log(fondF)
//   };
  const chengeValue = (el) => {
    // setSearch(el.target.value.toLowerCase());
    fondF(el.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={chengeValue}
        //   value={search}
        />
        {/* <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={searchF}
        >
          Search
        </button> */}
      </div>
    </div>
  );
};

export default Search;
