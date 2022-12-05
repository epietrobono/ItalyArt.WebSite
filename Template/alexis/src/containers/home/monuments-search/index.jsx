import React from "react";
import SearchForm from "../../../components/search-form";
import HomeMonumentsData from "../../../data/home-monuments.json";

const MonumentsSearchContainer = () => {
    const data = HomeMonumentsData.it;
    return (
        <div>
            <div
                className="row monuments-search align-content-center justify-content-center"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + data.backgroundImage
                    })`,
                }}>
                <div className="col col-auto monuments-form">
                    <h1 className="title text-center">{data.title}</h1>
                    <div className="bg-light rounded py-2 px-4">
                        <SearchForm data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonumentsSearchContainer;