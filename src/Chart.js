import React from "react";
import { Bar } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { useTodoHook } from "./TodoContext";

// Chart.register(CategoryScale);



function Charts() {
 const {globalArr} = useTodoHook()
  let obj = [{month:0,amount:0},{month:1,amount:0},{month:2,amount:0},{month:3,amount:0},{month:4,amount:0},{month:5,amount:0},{month:6,amount:0},{month:7,amount:0},{month:8,amount:0},{month:9,amount:0},{month:10,amount:0},{month:11,amount:0}]

  console.log(globalArr, "ion Charts");

  let res = globalArr.map((data)=>{
    let x = new Date(data.date).getMonth();
    let y = data.amount
    return {month:x,amount:y}
  })
  let res2 = res.map((data)=>{
    for(let x of obj){
      if (x.month==data.month){
        x.amount = x.amount + Number(data.amount)
      }
    }
  })
  let res3 = obj.map((item)=>{
    return item.amount
  })

  const data = {
    labels: ["Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
      
    ],
  
    datasets: [
      {
        label: "Monthly subscription",
        backgroundColor: "red",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,1)",
        data: res3
      },
    ],
  };

  return (
    <div style={{ height: "60vh" }}>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}

export default Charts;
