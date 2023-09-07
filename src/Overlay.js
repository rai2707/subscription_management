import "./Popop.css"

const Overlay = ({setIsPopupVisible}) => {
    // console.log("=== render");
    return <div  onClick={() => setIsPopupVisible(false)} className="main_pop ">
    </div>
}

export default Overlay;