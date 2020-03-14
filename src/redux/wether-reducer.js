import {wetheerApi} from "../api/api"


let initialState={
    temperature:{
        min:null,
        max:null,
        curent:null
    },

    background:"green"

}


const wetherReducer =(state=initialState, action)=>{
    switch (action) {

        default:
            return state;
    }
}





export default wetherReducer;