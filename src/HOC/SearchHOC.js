import React, { useState } from "react";

const withSearch = (WrappedComponent) => {
  const WithSearch = ({data}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const filterData = (searchTerm) => {
      searchTerm = searchTerm.toUpperCase();
      console.log(searchTerm, "searchTermUpperCase")
      return data.filter((item) => {
        let str = `${item.name}`.toUpperCase();
        console.log(str, "str")
        return str.indexOf(searchTerm) >= 0;
      });
    };

    const filteredData = filterData(searchTerm);

    return (
      <>
        <input
          onChange={handleSearch}
          value={searchTerm}
          type="text"
          placeholder="Search"
        />
        <WrappedComponent data={filteredData} />
      </>
    );
  };
  WithSearch.displayName = `WithSearch(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return WithSearch;
};

export default withSearch;
