import React from "react";
import { ProductItem } from "../types";
import Wrapper from "./Wrapper";
import DirectionPanel from "./DirectionPanel";

interface ProductProps {
    product: ProductItem;
    onAddFeatured: (ProductItem) => void;
}

const Direction: React.FC<ProductProps> = ({product, onAddFeatured}) => {

    const [name, setName] = React.useState("");

    React.useEffect(() => {
        (product.name !== undefined) ? setName(product.name) : setName("null");
    }, [name]);

    

    const [code, setCode] = React.useState(0);
    
    React.useEffect(() => {
        (product.code !== undefined) ? setCode(product.code) : setName("Null")
    }, [code]);

    return (
        <div className="direction">
            <style jsx>
                {`
                    .direction {
                        padding: 3%;
                    }

                    .direction-container {
                        text-align: center;
                        justify-content: middle;
                    }

                    

                    h1 {
                        font-weight: 800;
                        font-size: 2.3rem;
                        margin-bottom: 1.55vh;
                    }
                    
                `}
            </style>
            <Wrapper>
                <div className="direction-container">
                    <h1>{name}</h1>
                    <label>Код направления: {code}</label>
                    <DirectionPanel product={product} onAddFeatured={onAddFeatured} />
                </div>
            </Wrapper>
        </div>
    )

}

export default Direction;