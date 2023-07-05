"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Search = (props: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button> 🚀 </button>
    </form>
  );
};

export default Search;
