import React from "react"
import { ProductItem } from "../types"
import { CalendarOutlined } from "@ant-design/icons"
import Link from "next/link"
import theme from "../styles/theme"

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
                        height: 75.578vh;
                        background: #F9F9F9;
                    }

                    h1 {
                        font-size: 1.25rem;
                        margin-bottom: 1.12vh;
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
                        width: 16.85vw;
                        height: 40.85vh;
                        line-height: 150%;
                        font-size: 0.95rem;
                    }

                    .button-holder {
                        padding-top: 3.74vh;
                    }

                    .button-holder button {
                        width: 8.589vw;
                        height: 7.127vh;
                        margin-right: 0.55vw;
                        transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;
                        cursor: pointer;
                        font-size: 0.95rem;
                        font-weight: 500;
                        border-radius: 6px;
                    }

                    .description-btn {
                        border: 2px solid ${theme.colors.black};
                    }

                    .description-btn:hover {
                       border: 2px solid ${theme.colors.red};
                       color: ${theme.colors.red};
                    }

                    .scroll-btn {
                        color: ${theme.colors.white};
                        background: ${theme.colors.black};
                        border: none;
                    }

                    .scroll-btn:hover {
                        background: ${theme.colors.red};
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
                <div className="button-holder">
                    <Link href={`/products/[code]`} as={`/products/${props.product.code}`}>
                        <button className="description-btn">Подробнее</button>
                    </Link>
                    <button className="scroll-btn">Участвовать</button>
                </div>
            </div>
        </div>
    )
}

export default DirectionCard;
