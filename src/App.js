import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Banner from "./Banner";
import FilterBanner from "./FilterBanner";
import Charts from "./Chart";
import Test from "./test";
import Pops from "./Popup";
import './Popop.css'
import './App.css'
// import { Chart } from "chart.js";
// import { TodoContext, useTodoHook } from "./TodoContext";


function App () {

  // globalArr && localStorage.setItem("list", JSON.stringify(globalArr))
  // const filteredDataBasedOnYear = globalArr.filter(detail => {
  //   const date = new Date(detail.date)
  //   console.log(detail);
  //   if(date.getFullYear() === +selectedYear){
  //     return detail;
  //   } else if(selectedYear==='all'){
  //     return detail;
  //   }

  // })

  // useEffect(() => {
  //   const allList =JSON.parse(localStorage.getItem("test"))
  //   if(globalArr.length > 0){
  //     console.log(globalArr);
  //     const baseId = []
  //     const filterArr = allList?.filter((item) => {
  //       baseId.push(item.id)
  //       console.log("item id", baseId);
  //         if(!(baseId.includes(item.id))){
  //           return item
  //         }
  //     })
  //     localStorage.setItem("test", JSON.stringify(filterArr))
  //   }

  // },[globalArr.length])

  // useEffect(()=>{
  //   const localStorageData =JSON.parse(localStorage.getItem("test"))
  //   if(localStorageData !== null){
  //     console.log("global in mount", localStorageData);
  //     localStorageData.length =Math.ceil(localStorageData.length / 2)
  //     localStorageData.length && setGlobalArr(prev => [...prev, ...localStorageData])
  //   }
  // },[])

  // useEffect(() => {
  //   return() => {
  //     console.log("global in unmount", globalArr);
  //     globalArr.length !== 0 && localStorage.setItem("test", JSON.stringify(globalArr))
  //   }
  // },[globalArr.length])


  // console.log(globalArr)
  // console.log(filteredDataBasedOnYear)
  return (
    <div>
      <Form />
      <FilterBanner/>
      <Charts />
      <Banner />
      {/* <TodoContext/> */}
      
      {/* <Test /> */}
    </div>
  );
};
export default App;
