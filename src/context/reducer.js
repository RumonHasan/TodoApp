const reducer = (state, action)=>{
    if(action.type === 'SHOW_SIGN'){
        return{
            ...state,
            signState: true,
        }
    }
}

export default reducer;