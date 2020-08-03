import React from "react";
import { useSelector } from "react-redux";
import { FeaturedState } from "../types";
import DirectionsTape from "./DirectionsTape";
import Wrapper from "./Wrapper";

const DirectionsContainer = () => {

    const featured = useSelector<FeaturedState, FeaturedState["featured"]>(
        (state) => state.featured
    );

    const catalog = useSelector<FeaturedState, FeaturedState["catalog"]>(
        (state) => state.catalog
    );

    return (
        <div className="directions-holder">
            <style jsx>
                {`
                    .directions-holder {
                        padding-bottom: 9.55vh;
                    }
                `}
            </style>
            <DirectionsTape catalog={catalog}/>
        </div>
    )
}

export default DirectionsContainer;
