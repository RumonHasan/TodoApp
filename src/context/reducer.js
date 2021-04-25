const reducer = (state, action)=>{
    if(action.type === 'SHOW_SIGN'){
        return{
            ...state,
            signState: true,
        }
    }
    if(action.type === 'CLOSE_SIGN'){
        return{
            ...state,
            signState: false,
        }
    }
}

export default reducer;