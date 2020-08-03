import React from "react"
import { ProductItem } from "../types"
import { CalendarOutlined } from "@ant-design/icons"

interface DirectionCardProps {
    product: ProductItem;
}

const DirectionCard: React.FC<DirectionCardProps> = (props) => {
    return (
        <div className="direction-card">  
            <style jsx>
                {`
                    .direction-card {
                        width: 22.52vw;
                        height: 66.578vh;
                        background: #F9F9F9;
                    }

                    h1 {
                        font-size: 1.25rem;
                        margin-bottom: 2.12vh;
                    }

                    .flex-holder {
                        padding: 4.244vh;
                        display: flex;
                        flex-direction: column;
                    }

                    label {
                        font-size: 0.85rem;
                    }

                    .brief-description {
                        width: 19.35vw;
                        height: 27.85vh;
                        line-height: 150%;
                        font-size: 0.95rem;
                    }
                `}
            </style>
            <div className="flex-holder">
                <h1>{props.product.name}</h1>
                <label style={{ marginBottom: "3.6vh" }}>{props.product.code}</label>
                <span style={{marginBottom: "4.6vh"}}>
                    <CalendarOutlined style={{marginRight: "3%"}} />
                    <label>{props.product.date}</label>
                </span>
                <p className="brief-description">{props.product.briefDescription}</p>
            </div>
        </div>
    )
}

export default DirectionCard;
