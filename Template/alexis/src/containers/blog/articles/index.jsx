import ArticlePreview from "../../../components/article-preview";
import ArticlesData from "../../../data/articles.json";

const ArticlesContainer = () => {
    const data = ArticlesData.it;
    const articles = data.articles;
    return (
        <div className="row justify-content-center intro-blog py-5">
            <div id="primo-articolo" className="col col-6">
                <ArticlePreview data={articles[0]}></ArticlePreview>
            </div>
            <div className="col col-4">
                <div className="row">
                    <div className="row">
                        <ArticlePreview data={articles[1]}></ArticlePreview>
                    </div>
                    <div className="row">
                        <ArticlePreview data={articles[2]}></ArticlePreview>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesContainer;