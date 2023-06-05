import React, { useEffect, useState } from "react";
import News from "../../../components/news";
import Api from "../../../services/Api";

const NewsContainer = () => {
    const [ArticlesHomeData, setArticlesHomeData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted21, setIsMounted21] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetBlogArticoliHome().then((results) => {
            console.log("esegue then");
            setArticlesHomeData(results);
            setIsMounted21(true);
            setIsLoading(false);
        });
    }, []);

    if (!isMounted21 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
    }

    return (
        <div className="news">
            <div className="container-ita">
                <div className="news py-5 delete-margin mob-news">
                    <h2 className="text-center mob-h2">
                        {ArticlesHomeData.Title}
                    </h2>
                    <div className="row justify-content-center">
                        {!isLoading &&
                            width > 900 &&
                            ArticlesHomeData.Articles.map((val, key) => {
                                return (
                                    <div
                                        className="col col-md-3 col-lg-3 px-4 mx-4"
                                        key={key}
                                    >
                                        <News data={val} key={key}></News>
                                    </div>
                                );
                            })}
                        {!isLoading &&
                            width <= 900 &&
                            ArticlesHomeData.Articles.slice(0, 2).map(
                                (val, key) => {
                                    return (
                                        <div className="col" key={key}>
                                            <News data={val} key={key}></News>
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsContainer;
