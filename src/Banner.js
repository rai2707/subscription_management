import React from "react";
import DateBanner from "./Date";
import "./Banner.css";
import { useTodoHook } from "./TodoContext";

const Banner = () => {
  let {filterData: filteredDataBasedOnYear} = useTodoHook()
  // console.log(filteredDataBasedOnYear.length);
  return (
    <div>
      <div>
        {filteredDataBasedOnYear.length > 0 ? (
          filteredDataBasedOnYear && filteredDataBasedOnYear.map((data) => {
            return (
              <div className="compo_main" key={data.id}>
                <div className="date_section">
                  <DateBanner date={data.date} />
                </div>
                <div>
                  <h3> {data.title}</h3>
                </div>

                <div className="amt_title_sec">
                  <h5 className="h5_sec">&#8377; {data.amount}.00</h5>
                  <p className="chng_tit">Change Title</p>
                </div>
              </div>
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>No data available</h3>
        )}
      </div>
    </div>
  );
};
export default Banner;


