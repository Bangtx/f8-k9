import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
export * from './action.js'
export * from './selector.js'