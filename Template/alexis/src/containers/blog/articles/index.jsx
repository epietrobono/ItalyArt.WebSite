import React, { useEffect, useState } from "react";
import ArticlePreview from "../../../components/article-preview";
import Api from "../../../services/Api";

const ArticlesContainer = () => {    
    const [articlesContainerData, setarticlesContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetTestiArticoli();
            setarticlesContainerData(results);
            setIsLoading(false);
      }
      fetchData();
    }, []);

      
    const articles = articlesContainerData.articles;
    return (
        <div className="row justify-content-center intro-blog py-5">
            {
            !isLoading && ( 
            <>
                <div id="primo-articolo" className="col col-md-6 col-sm-12">
                    <ArticlePreview articlesContainerData={articles[0]}></ArticlePreview>
                </div>
                <div className="col col-md-4 col-sm-12 ">
                    <div className="row gap-10">
                        <div className="row flex-1">
                            <ArticlePreview articlesContainerData={articles[1]}></ArticlePreview>
                        </div>
                        <div className="row flex-1">
                            <ArticlePreview articlesContainerData={articles[2]}></ArticlePreview>
                        </div>
                    </div>
                </div>
            </>
            )}
        </div>
    );
};

export default ArticlesContainer;