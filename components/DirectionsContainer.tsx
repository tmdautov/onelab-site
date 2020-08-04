import React from "react";
import { useSelector } from "react-redux";
import { FeaturedState } from "../types";
import DirectionsTape from "./DirectionsTape";
import { directions } from "../services/placeholder";

const DirectionsContainer = () => {

    return (
        <div className="directions-holder">
            <style jsx>
                {`
                    .directions-holder {
                        padding-bottom: 9.55vh;
                        width: 100%;
                    }
                `}
            </style>
            <DirectionsTape catalog={directions}/>
        </div>
    )
}

export default DirectionsContainer;
