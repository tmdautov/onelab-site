import React from "react";
import { Button, Divider } from "antd";
import { ProductItem, FeaturedState } from "../../types";
import { useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";

interface ProductPanelProps {
    product: ProductItem;
    onAddFeatured: (ProductItem) => void;
}

const ProductPanel = ({product, onAddFeatured}) => {
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

    const isInFeatured = (product: ProductItem): boolean => {
        return !!featured.find((line) => line.product === product);
    }

    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        (product.briefDescription !== undefined) ? setDescription(product.briefDescription) : setDescription("Null");
    }, [description])

    return (
        <div>
            <h1>{name}</h1>
            <label>Код товара: {code}</label>
            <h1 style={
                { paddingTop: "30px", }
            }>{price} ₸</h1>
            {!isInFeatured(product) ?
                <Button
                    type="default"
                    onClick={() => {
                        onAddFeatured(product);
                    }}
                >
                    Добавить в избранное
                </Button>
                :
                <Button
                    type="default"
                    disabled
                >
                    Добавлено в избранное
                </Button>
            }
            
            <Button
                type="default"
            >
                Добавить в корзину
            </Button>
            <Divider />
            <TextArea disabled value={description} autoSize style={{color: "black", resize: "none"}}/>
        </div>
    )
}

export default ProductPanel;
