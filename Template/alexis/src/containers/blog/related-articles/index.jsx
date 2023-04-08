import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const RelatedArticlesContainer = ({ title, articles }) => {
    return (
        <div>
            <h4 className="mob-h2 mt-4">{title}</h4>
            <div className="gap-10 blog-monuments">
                {articles.slice(0, 2).map((val, key) => {
                    return (
                        <div className="flex-1" key={key}>
                            <ArticlePreview data={val}></ArticlePreview>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

RelatedArticlesContainer.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.object,
};

export default RelatedArticlesContainer;
