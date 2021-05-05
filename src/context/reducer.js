// retrieving local storage items : unused
const getTodo = ()=>{
    const todo = localStorage.getItem('TodoItem');
    if(todo){
        return JSON.parse(localStorage.getItem(todo))
    }else{
        return [];
    }
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'SHOW_SIGN':
            return {
                ...state,
                signState: true,
            }
        case 'CLOSE_SIGN':
            return {
                ...state,
                signState: false,
            }
        case 'CLOSE_ALERT':
            return{
                ...state,
                displayAlert: false,
            }
        case 'SHOW_ALERT':
            return{
                ...state,
                displayAlert:true,
            }
        // Add todo case
        case 'SHOW_TODO':
            return{
                ...state,
                todoDisplay: true,
            }
        case 'CLOSE_TODO':
            return{
                ...state,
                todoDisplay: false,
            }
        case 'ADD_TODO':
            // destructuring the todoitem object in order to inject it to a new one 
            const {title, details, category, addDate} = action.payload;
            const newItem = {id:Date.now(), title: title, details: details, category: category, addDate: new Date().getTime().toString()};
            return{
                ...state,
                todoItem: [...state.todoItem, newItem]
            }
        case 'DELETE_ITEM':
            const newItems = state.todoItem.filter((item)=>item.id !== action.payload)
            return{
                ...state,
                todoItem: newItems,
            }
        default:
            return {...state}
    }
}

export default reducer;