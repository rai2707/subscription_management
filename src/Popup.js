import React from "react";
import './Popop.css'

const Pops = ({data ,setIsPopupVisible})=>{
    const [showMessage, setShowMessage] = React.useState("")

    React.useEffect(() => {
        if((data.title === "" || data.title.length < 3 ) && data.amount !== ""){
            setShowMessage("title is empty please fill")
            
        }else if(data.amount === "" && data.title !== ""){
            setShowMessage("amount is blank please fill")
            
        }else if(0< data.title < 3 && data.amount === ""){
            setShowMessage("amount and title is blanked please fill accordingly")
        }

    },[])

    return(
        <div className="popup">
            <div className="pop_section">
            <h3 className="h2_field">Input field</h3>
            <p className="p_tag">{showMessage}</p>
            <button className="btn_ok" onClick={()=>setIsPopupVisible(false)}>OK</button>
            </div>
        </div>
    )
}
export default Pops;