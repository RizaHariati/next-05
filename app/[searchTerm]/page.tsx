import { getWikiResults } from "@/lib/getWikiResults";
import { Result, SearchResult } from "@/types";
import { notFound } from "next/navigation";
import React from "react";
import Item from "./components/Item";

type Props = {
  params: { searchTerm: string };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const gettingResult: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await gettingResult;
  const results: Result[] | undefined = data?.query?.pages;
  const displayTerm: string = searchTerm.replaceAll("%20", "-").slice(0, 20);
  if (!results) {
    return {
      title: ` Not Found`,
      description: "the search term return without any result",
    };
  } else {
    return {
      title: displayTerm,
      description: "These are the search result for",
    };
  }
}

const page = async ({ params: { searchTerm } }: Props) => {
  const gettingResult: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await gettingResult;

  const results: Result[] | undefined = data?.query?.pages;
  const displayTerm: string = searchTerm.replaceAll("%20", "");
  if (!results) {
    return (
      <div className="h-full min-h-screen max-w-6xl p-10">
        No Result found for the search term : {displayTerm}
      </div>
    );
  }
  const content = (
    <div>
      {Object.keys(results).map((resultKey: string) => {
        const result = results[parseInt(resultKey)];

        return (
          <div key={resultKey}>
            <Item result={result} />
          </div>
        );
      })}
    </div>
  );
  return (
    <div className="h-full min-h-screen max-w-6xl p-10">
      <h1>Results</h1>
      {content}
    </div>
  );
};

export default page;
