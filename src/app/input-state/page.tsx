"use client";

import React, { useState } from "react";

const inputState = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <input onChange={handleSearch} type="text" placeholder="Search here..." />
      <p>Searched By: {search}</p>
    </>
  );
};

export default inputState;
