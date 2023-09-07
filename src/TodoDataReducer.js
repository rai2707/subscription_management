 function TodoDataReducer (state,action){
    console.log("===== data coming from form to context to reducer", action.payload);
    switch(action.type){
        // this is the setting for the new array
        case "SET_NEW_ARRAY":
            return{

                ...state, globalArr:[...state.globalArr, action.payload]
            }
            // this is for filter data

            case "FILTER_DATA":
                return{
                    ...state, filterData: state.globalArr.filter(detail => {
                        const date = new Date(detail.date)
                        console.log(detail);
                        if(date.getFullYear() === +state.filterYear){
                          return detail;
                        } else if(state.filterYear==='all'){
                          return detail;
                        }
                    
                       })
                }

                // this is set filter year

                case "SET_FILTER_YEAR":
                    return{
                        ...state, filterYear:action.payload
                    }

                    default:
                        return state;
    }
}

export default TodoDataReducer;