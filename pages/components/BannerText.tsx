import React from "react";
import { Button } from "antd";

const BannerText = (props: any) => {
    return (
        <>
            <style jsx>
                {`
                    .banner-text {
                        position: relative;
                        left: 280px;
                        top: 48px;
                        width: 600px;
                    }
                    h1 {
                        font-weight: 800;
                        line-height: 150%;
                        font-size: 48px;
                    }
                    
                    span {
                        width: 600px;
                        height: 102px;
                        font-size: 24px;
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
                        { position: "relative", top: "30px", width: "240px", height: "56px", color: "#fff", background: "#000", }
                    }
                >
                    Подать заявку
                </Button>
            </div>
        </>
    )
}

export default BannerText;