import React from "react";
import { Button } from "antd";

const BannerText = (props: any) => {
    return (
        <>
            <style jsx>
                {`
                    .banner-text {
                        position: relative;
                        left: 15%;
                        transform: translateY(15%);
                        width: 30%;
                    }
                    h1 {
                        font-weight: 800;
                        font-size: 200%;
                    }
                    
                    span {
                        height: 14vh;
                        font-size: 120%;
                        line-height: 150%;
                        color: #1A1A1A;
                    
                    }
                `}
            </style>
            <div className="banner-text">
                <h1>ONE LAB</h1>
                <div className="description-text">
                    <span>{props.description}</span>
                </div>
                <Button type="primary"
                    style={
                        { position: "relative", top: "4vh", width: "30.625vh", height: "56px", color: "#fff", background: "#000", }
                    }
                >
                    Подать заявку
                </Button>
            </div>
        </>
    )
}

export default BannerText;