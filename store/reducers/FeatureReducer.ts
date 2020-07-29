import { Action } from "../actions";
import { FeaturedState } from "../../types";

const initialState = {
    //fetch here
    catalog: [],
    featured: [],
}

export const featureReducer = (state: FeaturedState = initialState, action: Action): FeaturedState => {
    
    const { featured } = state;
    const { payload, type } = action;
    switch (type) {
        case "ADD_FEATURED": {
            const newFeatured = [...featured];

            let line = newFeatured.find(line => line.product === payload);
            if (!line) {
                line = {
                    product: payload,
                };
                featured.push(line);
            }
            return {...state, featured: [...featured]};
        }
        default:
            return state;
    }
}
