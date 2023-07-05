import { Result } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  result: Result;
};

const Item = ({ result }: Props) => {
  return (
    <div className="flex gap-10 mt-5 ">
      {result.thumbnail ? (
        <Image
          src={result.thumbnail.source}
          alt={result.title}
          width={result.thumbnail.width}
          height={result.thumbnail.height}
        />
      ) : (
        <div className="w-16"></div>
      )}
      <div>
        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
          <p className="hover:text-slate-500 capitalize text-slate-800 text-lg font-bold">
            {result.title}
          </p>
        </Link>
        <p className=" text-slate-600 ">{result.extract}</p>
      </div>
    </div>
  );
};

export default Item;
