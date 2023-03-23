import ArticlePreview from "../../../components/article-preview";
import ArticlesData from "../../../data/articles.json";

const ArticlesContainer = () => {
    const data = ArticlesData.it;
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