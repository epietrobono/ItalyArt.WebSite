import ArticlesData from "../../../data/articles.json";
import ArticlePreview from "../../../components/article-preview";

const Articles = () => {
    const data = ArticlesData.it;
    const articles = data.articles;
    return (
        <div className="row justify-content-center">
            <div className="col col-6">
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

export default Articles;