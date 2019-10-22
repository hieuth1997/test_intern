import * as Types from './../constant/Actiontypes'
var intial = [];
const topMusic = (state=intial,action)=>{
    let data = action.data;
    switch (action.type) {
        case Types.FETCH_TOP_MUSIC:
            return [...data];
    
        default:
            return [...state]
    }

}
export default topMusic