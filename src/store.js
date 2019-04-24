import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


const store = compose(applyMiddleware(thunk))(createStore)(reducers);

export default store;
