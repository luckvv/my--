export default (state={focused:false},action)=>{
    switch(action.type){
        case 'search_focus':
            return {focused:true}
        case 'search_blur':
            return {focused:false}
        default:
            return state
    }
return state;
}