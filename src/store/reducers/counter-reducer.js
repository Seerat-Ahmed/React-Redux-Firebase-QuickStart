import constant from '../constants';

export default (state = 0, action) => {
    
    switch(action.type){
        case constant.counter:
            console.log('counter action dispatched in counter reducer');
            return state + action.payload;

        case constant.decrement:
            console.log('decrement action dispatched in decrement reducer');
            return state - action.payload;

        default:
            return state;
    }

}