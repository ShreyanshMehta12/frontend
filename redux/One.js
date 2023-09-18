const {redux,createStore} = require('redux')
const intialState = {
    numberOfBooks: 100,
    numberOfLaptops: 50,
}

//action
function buyBook(){
    return{
        type: 'buy_book', 
        info: 'my_first_redux'
    }
}

// reducer
const reducer = (state = intialState,action)=>{
    switch(action.type){
        case 'buy_Book' :
            return{
                a: state.numberOfBooks-1
            }
        default:
            return state
    }
}

// Store
const Store = createStore(reducer)
console.log(Store)