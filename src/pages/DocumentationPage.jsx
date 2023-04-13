import { useParams } from "react-router-dom";
import axios from "../axios";
import React, { useEffect, useState } from "react";

function DocumentationPage() {
  const params = useParams();
  const [sortData, setSortData] = useState({});
  const [algorithm, setAlgorithm] = useState([]);
  const [optAlgorithm, setOptAlgorithm] = useState([]);
  const [working, setWorking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAlgorithmData, setSelectedAlgorithmData] = useState({});
  const [optSelectedAlgorithmData, setOptSelctedAlgorithmData] = useState({});

  const handleAlgo = (id) => {
    algorithm?.filter((item) => {
      if (item?._id === id) {
        setSelectedAlgorithmData(item);
      }
    });
  };
  const handleOptAlgo = (id) => {
    optAlgorithm?.filter((item) => {
      if (item?._id === id) {
        setOptSelctedAlgorithmData(item);
      }
    });
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/getsort/${params.id}`);
      setSortData(response?.data?.sortData);
      setAlgorithm(response?.data?.algo);
      setOptAlgorithm(response?.data?.optAlgo);
      setWorking(response?.data?.working);
      setSelectedAlgorithmData(
        response?.data?.algo ? response?.data?.algo[0] : {}
      );
      setOptSelctedAlgorithmData(
        response?.data?.optAlgo ? response?.data?.optAlgo[0] : {}
      );
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-gray-700 py-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center py-7">
          <h2 className="font-[800] text-5xl text-gray-300 capitalize">
            {sortData?.title}
          </h2>
        </div>
        <div className="pb-7">
          <p
            dangerouslySetInnerHTML={{
              __html: sortData?.description,
            }}
            className="text-gray-200  text-lg"
          ></p>
        </div>
        <div className="text-3xl font-[600] text-gray-300 text-center py-7 border-t border-gray-400">
          Working of {sortData?.title}
        </div>
        <div className="space-y-2">
          {working?.map((item) => (
            <div className="space-y-2" key={item?._id}>
              <p className="text-gray-200 text-lg">{item?.subHeading}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: item?.text,
                }}
                className="text-gray-300"
              ></p>
              <div className="w-1/3 h-full mt-5 bg-gray-900 rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={process.env.REACT_APP_SERVER_URL + item?.image}
                  alt="sort"
                />
              </div>
            </div>
          ))}
          <div className="pt-5 ">
            <h3 className="font-[700] text-2xl text-gray-200 pb-3">
              {sortData?.title} Algorithm
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: sortData?.alogorithm,
              }}
              className=" p-7 bg-gray-900 text-gray-300 rounded-xl"
            ></p>
          </div>
          {/* //////// algo /////// */}
          <div className="pt-5 ">
            <h3 className="font-[700] text-2xl text-gray-200 pb-3">
              {sortData?.title} Algorithm
            </h3>
            <div className="flex gap-2">
              {algorithm?.map((item) => (
                <div
                  onClick={() => {
                    handleAlgo(item?._id);
                  }}
                  className={`w-full border-b cursor-pointer  ${
                    item?._id === selectedAlgorithmData?._id
                      ? " border-blue-400 "
                      : ""
                  } `}
                  key={item?._id}
                >
                  <p className="text-white  ">{item?.language}</p>
                </div>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: selectedAlgorithmData?.code,
              }}
              className=" p-7 bg-gray-900 text-gray-300 rounded-xl"
            ></p>
          </div>
          {/* //////// Optimised algo /////// */}
          {optAlgorithm?.length > 0 && (
            <div className="pt-5 ">
              <h3 className="font-[700] text-2xl text-gray-200 pb-3">
                Optimised {sortData?.title} Algorithm
              </h3>
              <div className="flex gap-2">
                {optAlgorithm?.map((item) => (
                  <div
                    onClick={() => {
                      handleOptAlgo(item?._id);
                    }}
                    className={`w-full border-b cursor-pointer  ${
                      item?._id === optSelectedAlgorithmData?._id
                        ? " border-blue-400 "
                        : ""
                    } `}
                    key={item?._id}
                  >
                    <p className="text-white  ">{item?.language}</p>
                  </div>
                ))}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: optSelectedAlgorithmData?.code,
                }}
                className=" p-7 bg-gray-900 text-gray-300 rounded-xl"
              ></p>
            </div>
          )}
          {/* ///////// table //////// */}
          <div className="pt-5 ">
            <h3 className="font-[700] text-2xl text-gray-200 pb-3">
              Bubble Sort Complexity
            </h3>
            <div className="w-full bg-gray-500 text-gray-300 rounded-2xl py-2 px-3 mb-7">
              <p className="flex border-b py-2">
                <span className="font-medium w-1/2 p-2 ">Time Complexity</span>
                <span className="w-1/2 p-2 "></span>
              </p>
              <p className="flex border-b py-2">
                <span className=" w-1/2 p-2 ">Best</span>
                <span className="w-1/2 p-2 ">{sortData?.tcBest}</span>
              </p>
              <p className="flex border-b py-2">
                <span className=" w-1/2 p-2 ">Worst</span>
                <span className="w-1/2 p-2 ">{sortData?.tcWorst}</span>
              </p>
              <p className="flex border-b py-2">
                <span className=" w-1/2 p-2 ">Average</span>
                <span className="w-1/2 p-2 ">{sortData?.tcAverage}</span>
              </p>
              <p className="flex border-b py-2">
                <span className=" w-1/2 p-2 ">Space Complexity</span>
                <span className="w-1/2 p-2 ">{sortData?.spaceComplexity}</span>
              </p>
              <p className="flex border-b py-2">
                <span className=" w-1/2 p-2 ">Stability</span>
                <span className="w-1/2 p-2 ">{sortData?.stability}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentationPage;
