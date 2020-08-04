import React from "react";
import { FeaturedState, DirectionItem } from "../types";
import { useSelector } from "react-redux";

interface ProductPanelProps {
    product: DirectionItem;
    onAddFeatured: (DirectionItem) => void;
}

const DirectionPanel = ({product, onAddFeatured}) => {
    const featured = useSelector<FeaturedState, FeaturedState["featured"]>(
        (state) => state.featured
    );
    const [name, setName] = React.useState("");

    React.useEffect(() => {
        (product.name !== undefined) ? setName(product.name) : setName("Null")
    }, [name]);

    const [code, setCode] = React.useState("");
    
    React.useEffect(() => {
        (product.code !== undefined) ? setCode(product.code) : setName("Null")
    }, [code]);

    const [price, setPrice] = React.useState(0);

    React.useEffect(() => {
        (product.price !== undefined) ? setPrice(product.price) : setPrice(null)
    }, [price]);

    const isInFeatured = (product: DirectionItem): boolean => {
        return !!featured.find((line) => line.product === product);
    }

    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        (product.briefDescription !== undefined) ? setDescription(product.briefDescription) : setDescription("Null");
    }, [description])

    return (
        <div>
            <style>
                {`

                `}
            </style>
            <h1>Что такое {name}?</h1>
            <div>{description}</div>
            {!isInFeatured(product) ?
                <button
                    onClick={() => {
                        onAddFeatured(product);
                    }}
                >
                    Добавить в избранное
                </button>
                :
                <button
                    disabled
                >
                    Добавлено в избранное
                </button>
            }
            
            <button>
                Добавить в корзину
            </button>
        </div>
    )
}

export default DirectionPanel;
