import React from "react";
import IntroMonuments from "../../../components/intro-monuments";
import HomeMonumentsData from "../../../data/home-monuments.json";

const MonumentsSearchContainer = () => {
    return (
            <div className="intro-image">
                <IntroMonuments data={HomeMonumentsData.it}/>
            </div>
    );
};

export default MonumentsSearchContainer;