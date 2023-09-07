import React from "react";
import './Filter.css'
import { useTodoHook } from "./TodoContext";

const FilterBanner = () => {
 let { filterYearData } = useTodoHook()
        
  return (
    <div className="filter_banner_div">
    <h4>Filter By Year</h4>
      <select className="select_div" onChange={(e) => filterYearData(e.target.value)}>
        <option value="all">All</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};
export default FilterBanner;
