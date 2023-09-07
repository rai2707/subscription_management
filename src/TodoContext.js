import {createContext,useEffect,useContext, useReducer} from 'react';
import reducer from './TodoDataReducer';

let dummy = [
    // {
    //   date: "2023-05-23",
    //   id: 754,
    //   amount: "0",
    //   title: "yearly sub"
    // }
]

export let TodoContext = createContext()
const initialState = {
    inputedTodoData: {},
    filterYear: "all",
    filterData:[],
    globalArr: [],
}

let TodoContextProvider = ({children}) =>{
    let [state,dispatch] = useReducer(reducer,initialState)
    // console.log("selected Year test 1",state.filterYear);
    let arr = [];

    useEffect (()=>{
        async function fetchData () {

            let url = "https://subscription-management-5c758-default-rtdb.firebaseio.com/sub.json"
            
            try{
                let data = await fetch(url);
                let res = await data.json()
                for (let key in res){
                    arr.push(res[key])
                }
                dispatch({type:"FETCH",payload:arr})
            }
            catch(e){
                console.log(e);
            }
        }   
        fetchData();
    },[])


useEffect(()=>{
    dispatch({type:"FILTER_DATA"})
},[state.filterYear,state.globalArr])

let filterYearData=(selectedYear)=>{
    console.log("selected Year", selectedYear);
    return dispatch({type:"SET_FILTER_YEAR",payload:selectedYear})
}

let setNewArray = (todoInputData)=>{
    console.log(" ====== data coming form as todoInputData", todoInputData);
    return dispatch({type:"SET_NEW_ARRAY",payload:todoInputData})
}


return(
    <TodoContext.Provider value={{...state,filterYearData,setNewArray}}>
        {children}
    </TodoContext.Provider>
)
}

export const useTodoHook=()=>{
    console.log("useTodoHook");
    return useContext(TodoContext)
}
export default TodoContextProvider;


// useEffect(() => {
//     setData()
//     mainData()
//     getData()
//     fetchData()
// },[])

// const getData = async() => {
//   await  axios.get(``)
//     .then((res) => {
//         setValue(res)
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// const setData = async() => {
//   await  axios.get(``)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// const fetchData = async() => {
//   await  axios.get(``)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// const mainData = async() => {
//   await  axios.get(``)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
 