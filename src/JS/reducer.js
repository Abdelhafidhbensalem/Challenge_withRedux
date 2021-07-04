import {GET_COCKTAILS,GET_COCKTAIL,COCKTAILS_ERRORS} from './const';

const initialState={
    cocktail:null,
    cocktails:[],
    loading:true,
    loading2:true,
    error:[]
};

export const cocktailReducer=(state=initialState,{type,payload})=>{

    switch (type) {
        case GET_COCKTAILS:
            return {...state,cocktails:payload,loading:false}
        case GET_COCKTAIL:
            return {...state,cocktail:payload,loading2:false}
        case COCKTAILS_ERRORS:
            return {...state,error:payload,loading:false}
        default:
            return state;
    }
}