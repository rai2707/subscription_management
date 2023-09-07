import React, { useState } from "react";

const Test = () => {
  const [inputValue, setInputValue] = useState("");
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);

  const addToList = () => {
    setFirstList((prev) => [...prev, inputValue]);
    console.log("jhfjhdf");
  };

  const addToNextList = (listItem, index, listNum) => {
    console.log(listNum);
    if (listItem && listItem) {
        if(listNum === 'first'){
            setSecondList((prev) => [...prev, listItem]);
            firstList.splice(index, 1);
        } else if (listNum === "second"){
            setThirdList((prev) => [...prev, listItem]);
            secondList.splice(index, 1);
        } else if (listNum === "third"){
            alert("CANNOT ACCESS")
            
        }else if (listNum === "third"){
            setSecondList((prev)=>[...prev,listItem]);
            thirdList.splice(index,1)
        }
    }
  };

  const addPreviousToList = (listItem, index) => {
    console.log(listItem, index);
    if (listItem) {
      setFirstList((prev) => [...prev, listItem]);
      secondList.splice(index, 1);
    }
  };

  console.log(secondList);
  console.log(firstList);
  return (
    <div className="main_head">
      <div>
        <input onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addToList}>add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>first</th>
            <th>second</th>
            <th>third</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            {firstList.map((listItem, index) => (<li>{listItem}
            <button onClick={addToNextList.bind(this, listItem, index, "first")}>next</button>
            </li>))}
            </td>

            <td>
            {secondList.map((listItem, index) => (<li><button onClick={addPreviousToList.bind(this, listItem, index, 'second')}>prev </button>
            {listItem}
            <button onClick={addToNextList.bind(this, listItem, index, 'second')}>next</button>
            </li>))}
            </td>

            <td>
            {thirdList.map((listItem, index) => (<li><button onClick={addPreviousToList.bind(this, listItem, index, "third")}>prev</button>
            {listItem}
            <button onClick={addToNextList.bind(this, listItem, index, 'third')}>next</button>
            </li>))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;
