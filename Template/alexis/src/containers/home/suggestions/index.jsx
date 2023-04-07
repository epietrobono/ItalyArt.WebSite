import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MonumentCard from "../../../components/monument-card";
import Api from "../../../services/Api";

const SuggestionsContainer = () => {
    const [SuggestionsContainerData, setSuggestionsContainerData] = useState(
        {}
    );
    const [isLoading, setIsLoading] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);


    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetMonuments360Home();
            setSuggestionsContainerData(results);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log(SuggestionsContainerData)
    // }, [SuggestionsContainerData]);
    if (isLoading) {
        return null;
    }
    const classColAuto =
        SuggestionsContainerData.Suggestions?.length == 1
            ? "col-auto"
            : "col-auto-in";

    return (
        <div className="container-ita-2">
            {!isLoading && (
                <>
                    <div className="py-4 d-flex flex-column section-margin">
                        <h2 className="text-center mob-h2">
                            {SuggestionsContainerData.Title}
                        </h2>
                        <p className="text-center mob-p">
                            {SuggestionsContainerData.Desc}
                        </p>
                        <div className="row justify-content-center sezione-card-monumenti r-gap">
                            {width >= 1600 && SuggestionsContainerData.Suggestions.map(
                                (val, key) => {
                                    return (
                                        <div
                                            className={`col ${classColAuto} `}
                                            key={key}
                                        >
                                            <MonumentCard
                                                data={val}
                                            ></MonumentCard>
                                        </div>
                                    );
                                }
                            )}
                            {width < 1600 && SuggestionsContainerData.Suggestions.slice(0, 4).map(
                                (val, key) => {
                                    return (
                                        <div
                                            className={`col ${classColAuto} `}
                                            key={key}
                                        >
                                            <MonumentCard
                                                data={val}
                                            ></MonumentCard>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        <Link
                            to={process.env.PUBLIC_URL + "/monuments"}
                            className=" border shadow rounded-pill mx-auto botton-suggestions"
                        >
                            {SuggestionsContainerData.ButtonText}
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default SuggestionsContainer;
