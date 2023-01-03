import { SELL_VEGETABLE } from './actionTypes'

const reducerMeat = (state = [], action) => {
    switch (action.type) {
        case SELL_VEGETABLE: return {
            ...state,
            numOfVegetable: state.numOfVegetable - 1
        }
        default: return state
    }
    return (
        <div>reducerVegetable</div>
    )
}
