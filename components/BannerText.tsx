import React from "react";
import theme from "../styles/theme";

const BannerText = (props: any) => {
    return (
        <>
            <style jsx>
                {`
                    .banner-text {
                        transform: translate(20%, 200%);
                        width: 30%;
                        height: 6.1vh
                    }
                    
                    h1 {
                        font-weight: bold;
                        font-size: 280%;
                        transform: translateY(-46%);
                    }
                    
                    span {
                        font-size: 1.2rem;
                        line-height: 150%;
                        color: #1A1A1A;
                    
                    }

                    .banner-button {
                        width: 50%!important;
                        display: flex;
                        justify-content: flex-end;
                    }
                    
                    button {
                        transform: translate(-18%, 60%);
                        border-radius: 6px;
                        border: none;
                        background: ${theme.colors.black};
                        width: 12.96vw;
                        height: 6.96vh;
                        font-weight: 500;
                        line-height: 150%;
                        text-align: center;
                        color: ${theme.colors.white};
                        cursor: pointer;
                        transition: background-color 0.5s ease, color 0.5s ease;
                    }
                `}
            </style>
            <div className="banner-text">
                <h1>{props.title}</h1>
                <div className="description-text">
                    <span>{props.description}</span>
                </div>
                <div className="banner-button"> 
                    <button>
                        Подать заявку
                    </button>
                </div>
            </div>
        </>
    )
}

export default BannerText;