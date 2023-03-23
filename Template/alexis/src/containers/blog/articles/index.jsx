import ArticlePreview from "../../../components/article-preview";
import {React,useEffect, useState }  from "react";

const ArticlesContainer = () => {    
    const [data, setData] = useState({});
    useEffect(() => {
        async function getAjaxApiData() {
            const postBody = {
                Pagina:"Home",
                Lingua:"IT"
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postBody)
            };
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/TestiArticoli`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);

    const articles = data.articles;
    return (
        <div className="row justify-content-center intro-blog py-5">
            <div id="primo-articolo" className="col col-md-6 col-sm-12">
                <ArticlePreview data={articles[0]}></ArticlePreview>
            </div>
            <div className="col col-md-4 col-sm-12 ">
                <div className="row gap-10">
                    <div className="row flex-1">
                        <ArticlePreview data={articles[1]}></ArticlePreview>
                    </div>
                    <div className="row flex-1">
                        <ArticlePreview data={articles[2]}></ArticlePreview>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesContainer;