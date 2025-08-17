import React, { useEffect, useState } from "react";
import "./GetUtilityInfo.css";
import { postRequest } from "../../Utils/requestHandler";
import UtilityTable from "../../Components/Table/Table";
import FilterPanel from "../../Components/FilterPannel/Filter";
import Pagination from "../../Components/Pagination/Pagination";

const GetUtilityInfo = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPage] = useState();

  const [selectedChecks, setSelectedChecks] = useState({
    checkAntivirus: false,
    checkDiskEncryption: false,
    checkOSUpdate: false,
  });

  const [selectedSorting, setSelectedSorting] = useState({
    utilsTime: false,
  });

  const [filter, setFilter] = useState({
    field: "",
    value: "",
  });

  useEffect(() => {
    fetchData(); // call the async function
  }, []);

  const handleFilterChange = async () => {
    let queryObj = {
      flags: {},
      sorting: {},
      filter: {},
    };

    Object.keys(selectedChecks).forEach((checkFlag) => {
      if (selectedChecks[checkFlag]) {
        queryObj.flags[checkFlag] = true; // use bracket notation
      }
    });

    Object.keys(selectedSorting).forEach((checkSorting) => {
      queryObj.sorting[checkSorting] = selectedSorting[checkSorting] ? 1 : -1;
    });

    if (filter.field && filter.value) {
      queryObj.filter[filter.field] = String(filter.value.trim()).toLowerCase();
    }

    // console.log("Query Object: ", queryObj);

    // send query object
    // let resp = await getRequest(queryObj);  // if GET, need query string
    fetchData(queryObj);
  };

  const fetchData = async (queryObj = {}, newPage = 1) => {
    try {
      queryObj.page = newPage;
      queryObj.limit = limit;
      const resp = await postRequest(queryObj);
      // console.log(resp)
      setData(resp.data);
      setTotalPage(resp.pagination.totalPages);
      setCurrPage(resp.pagination.page);
    } catch (err) {
      console.log(err);
    }
  };

  const onPageChange = (newPage) => {
    return fetchData({}, newPage);
  };
  return (
    <div className="utilityPage">
      <h1 className="utilityPageHeader">Utility Infomation Of System 🥋</h1>

      <FilterPanel
        selectedChecks={selectedChecks}
        setSelectedChecks={setSelectedChecks}
        selectedSorting={selectedSorting}
        setSelectedSorting={setSelectedSorting}
        filter={filter}
        setFilter={setFilter}
        handleSubmit={handleFilterChange}
      />

      <UtilityTable data={data} />

      <Pagination
        totalPages={totalPages}
        currentPage={currPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default GetUtilityInfo;
