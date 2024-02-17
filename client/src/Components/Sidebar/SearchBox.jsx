import React from "react";

const SearchBox = () => {
  const handelSubmit = () => {};
  return (
    <form onSubmit={handelSubmit}>
      <input type="search" placeholder="Search..." />
      <button type="submit">
        <i class="ri-search-line"></i>
      </button>
    </form>
  );
};

export default SearchBox;
