import { ProductItem } from "../../types";

export type Action = { type: "ADD_FEATURED", payload: ProductItem };

export const addFeatured = (product: ProductItem): Action => ({
    type: "ADD_FEATURED",
    payload: product,
});
