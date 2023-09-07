import React, { useState,useEffect } from "react";
import "./Form.css";
import Pops from "./Popup";
import Overlay from "./Overlay";
import { createPortal } from "react-dom";
import { useTodoHook } from "./TodoContext";

const Form = () => {
  let url = "https://subscription-management-5c758-default-rtdb.firebaseio.com/sub.json"
  const {globalArr, setNewArray} = useTodoHook()
  let [formdata, setFormData] = useState({
    title: "",
    date: "",
    amount: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  let[titleError,setTitleError]=useState(false)
  let[amountError,setAmountError]=useState(false);

  function commonHandler(event) {
    setFormData((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
    // if (formdata.title.trim() !== "" && formdata.amount.trim() ==="") {
    //   setIsFormValid(true);
    // }
  }

  const handleBlur = event => {
    // console.log(event.target.name, event.target.value);
    if(event.target.value.length < 3){
      // console.log("inside check");
      setTitleError(true)
      setAmountError(true)
      setIsFormValid(false)
      return
    }
    setIsFormValid(true)
  }

  useEffect(()=>{
    let x= setTimeout(() => {
       if(formdata.title.trim().length>0)
       {
         setTitleError(false)
       }
       if(formdata.amount.trim().length>0)
       {
         setAmountError(false)
       }
       console.log('hii i am useEffect')
     },1000);
     return ()=>{
        clearTimeout(x)
     }
      
    },[formdata.title,formdata.amount])

    const isValidate = (data) => {
      if(data.title.trim() === ""){
        console.log("=== hjhjjhjjh data.title");
        setTitleError(true)
        return false;
      }
      if(data.amount.trim() === ""){
        console.log("=== data.amount");
        setAmountError(true);
        return false
      }
      setTitleError(false)
      setAmountError(false)
      return true
    }

 async function onsubmitHandler() {
    console.log("hjhjjhjjh", !isValidate(formdata));
    if (!isValidate(formdata)) {
      setIsFormValid(false);
      setIsPopupVisible(true);
      return;
    }else if(formdata.title.trim().length==0 ){
      setTitleError(true);
      return;
    }
    console.log("formis valid", isFormValid);
    if(!isFormValid){
      console.log("==== formisvalid");
      setIsPopupVisible(true)
      return;
    }


    console.log("hjhjjhjjh");

    let obj = {
      id: new Date().getMilliseconds(),
      title: formdata.title,
      date: formdata.date,
      amount: formdata.amount,
    }
    try{
      let res= await fetch(url,{ 
        method:"POST",
        body:JSON.stringify(obj),
        headers:{"Content-Type":"application/json"}
      })
      if(res.status==200)
      {
        let data= await res.json()
      }
      else{
        throw new Error('somthing went wrong')
      }
    }
    catch(e){
      console.log(e)
    }
    console.log("======= data in form comp as obj", obj);
    setNewArray(obj);
    setIsFormValid(true);

    setFormData({
      title: "",
      date: "",
      amount: "",
    });
    // const arr = JSON.parse(localStorage.getItem("test"))
    // console.log("aarr", arr);
    // localStorage.setItem("test", JSON.stringify([...arr,obj]))

    setIsFormVisible(false);
  }

  console.log(formdata);
  let style = titleError ? "inp_title error" : "inp_title";
  let style1 = amountError ? "inp_amount error" : "inp_amount";
  // let style2 = isFormValid ? "inp_date error" : "inp_date";

  console.log(style, 'styled');

  return (
    <>
      <button
        onClick={() => setIsFormVisible((prev) => !prev)}
        className="hide_btn"
      >
        {"SHOW"}
      </button>
      
      {isFormVisible && (
        <div className="form">
          {isFormVisible && (
            <div>
              <div className="title_dt_section">
                <div className="inp-label-tit-sec">
                  <label>Title</label>
                  <br />
                  <input
                    placeholder="Enter your purchase"
                    className={style}
                    type="text"
                    name="title"
                    onChange={commonHandler}
                    value={formdata.title}
                    onBlur={handleBlur}
                  />
                  <br />
                </div>
                <div className="inp-label-dt-sec">
                  <label className="date_label">Date</label>
                  <br />
                  <input
                    className="inp_date"
                    type="date"
                    onChange={commonHandler}
                    name="date"
                    value={formdata.date}
                    onBlur={handleBlur}
                    
                  />
                </div>
              </div>

              <div className="amt_section">
                <label>Amount</label>
                <br />
                <input
                  placeholder="Enter Amount"
                  className={style1}
                  type="number"
                  onChange={commonHandler}
                  name="amount"
                  value={formdata.amount}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          )}

          <div>
            <div>
              {isFormVisible && (
                <div className="btn_section">
                  <button className="cancel" onClick={onsubmitHandler}>
                    Cancel
                  </button>
                  <button className="save" onClick={onsubmitHandler}>
                    Save
                  </button>
                </div>
              )}
            </div>

            {/* <button onClick={() => setIsFormVisible(prev => !prev)} className="add_new">Add New</button> */}
          </div>
        </div>
      )}

      {isPopupVisible && (
        <div>
          <Overlay setIsPopupVisible={setIsPopupVisible} />
          {createPortal(<Pops  data={formdata} setIsPopupVisible={setIsPopupVisible} />, document.getElementById("through-portal"))}
          
          <Pops data={formdata} setIsPopupVisible={setIsPopupVisible} />
        </div>
      )}

    </>
  );
};
export default Form;
