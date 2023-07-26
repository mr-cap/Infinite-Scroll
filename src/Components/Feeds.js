import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeeds } from "../redux-store/listFeeds";
import Cards from "./Cards";

const Feeds = () => {
  const getFeedList = useSelector(getFeeds);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [isFetch, setIsfetch] = useState(true);
  const [noData, setNoData] = useState(true);

  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      noData && setPageNum(pageNum + 1);
    }
  };

  const fetchData = async () => {
    let baseUrl =
      "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/" +
      pageNum;
    if (noData) {
      try {
        let result = await fetch(baseUrl)
          .then((response) => {
            if (response.status == 200) {
              return response.json();
            }
            if (response?.status === 400) {
              setPageNum(pageNum + 1);
            }
          })
          .catch((err) => console.log("Error : ", err?.status))
          .then((json) => json);
        if (result?.nodes?.length === 0) {
          setIsfetch(false);
          setNoData(false);
        }
        dispatch(getFeeds(result?.nodes));
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (noData) {
      window.addEventListener("scroll", infiniteScroll);
      setTimeout(() => fetchData(), 1000);
    }
  }, [pageNum]);

  return (
    <div>
      {getFeedList.payload.feeds?.items?.map((data) =>
        data?.map((innerData) => (
          <Cards key={innerData?.node?.nid} productData={innerData?.node} />
        ))
      )}

      {isFetch && (
        <>
          <div className="flex justify-center my-2">
            <span className="inline-flex rounded-md bg-blue-100 px-2 py-1 text-md font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
              Loding Data...
            </span>
          </div>
        </>
      )}
      {!noData && (
        <div className="flex justify-center my-2">
          <span className="inline-flex rounded-md bg-red-50 px-2 py-1 text-md font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
            No More Data Found!!!
          </span>
        </div>
      )}
    </div>
  );
};

export default Feeds;
