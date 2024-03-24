import { fetchResults } from "@/lib/fetchResult";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};
async function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return <div>No result...</div>;
  console.log("resultsss", results);
  return (
    // <div>hello</div>
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-6">
        <h1 className="text-4xl font-bold pb-3 mt-[200px]">Your Trip Result</h1>

        <h2 className="pb-3">
          Dates of trip:
          <span className="italic ml-2">
            {searchParams.checkin} to {searchParams.checkout}
          </span>
        </h2>

        <hr className="mb-5" />
        <h3 className="font-semibold text-xl">
          {results.content.total_listings}
        </h3>

        <div className="space-y-2 mt-5">
          {results.content.listings.map((item, i) => (
            <>
              <div
                key={i}
                className="flex space-y-2  space-x-4 p-5 border rounded-lg"
              >
                <img
                  src={item.url}
                  alt="image of property"
                  className="h-44 w-44 rounded-lg"
                />
                <div>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="font-bold text-blue-500 hover:text-blue-600 hover:underline"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="font-bold text-blue-500">
                      {item.title}
                    </span>
                  )}
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-start justify-end space-x-2 text-right">
                  <div>
                    <p className="font-bold">{item.rating_word}</p>
                    <p className="text-xs">{item.rating_count}</p>
                  </div>

                  <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                    {item.rating || "N/A"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs">{item.booking_metadata}</p>
                  <p className="text-2xl font-bold">{item.price}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
