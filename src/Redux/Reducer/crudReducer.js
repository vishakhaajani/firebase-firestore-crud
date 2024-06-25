const initialState = {
    user : [],
    err : null
}

const crudReducer = (state=initialState,action) => {
    switch(action.type){
        case 'view' :
            return state

        default :
            return state
    }
}

export default crudReducer