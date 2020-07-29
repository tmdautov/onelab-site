import { createStore } from 'redux'
import { featureReducer } from './reducers/FeatureReducer'
import { products } from '../services/placeholder';

const store = createStore(featureReducer, { catalog: products, featured: [], });

export default store;
