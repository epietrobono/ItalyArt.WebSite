import ArticlePreview from "../../../components/article-preview";
import Api from "../../../services/Api";
import {React,useEffect, useState }  from "react";

const ArticlesContainer = () => {    
    const [articlesContainerData, setarticlesContainerData] = useState({});
    const [isMounted1, setIsMounted1] = useState(false);

    useEffect(() => {
        console.log("entro in useEffects");
        setIsMounted1(true);
        Api.GetTestiArticoli().then((results) => {
        
        console.log("esegue then");
        setarticlesContainerData(results);
      });
    }, []);

    if (!isMounted1) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
      
    const articles = articlesContainerData.articles;
    return (
        <div className="row justify-content-center intro-blog py-5">
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
        </div>
    );
};

export default ArticlesContainer;