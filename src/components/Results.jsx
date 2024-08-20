import React, { useEffect } from "react";
import { useResultContext } from "../contexts/ResultContext";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { Links } from "./Links";

const Results = () => {
  const { result, isLoading, searchTerm, getResult } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm && result == []) {
      if(location.pathname === "/news")
        getResult(searchTerm + " "+"news");
      else
      getResult(searchTerm);
    }
  }, [searchTerm, getResult]);

  if (isLoading) return <Loading />;

  console.log(location.pathname);
  switch (location.pathname) {
    case "/search":
      return (

        <div className="sm:px-56 flex flex-wrap justify-between space-y-6 p-2">
          <Links />
          {result.map(({ url, title, description }, index) => (
            <div key={index} className="mt-2 mb-2 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-xs">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
                <p class="text-sm">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return "videos";
    case "/images":
      return "images not fund"
    case "/news":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6 p-2">
          <Links />
          {result.map(({ url, title, description }, index) => (
            <div key={index} className="mt-2 mb-2 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-xs">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
                <p class="text-sm">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );

    default:
      return <div>Error! Page not found.</div>;
  }
};

export default Results;
