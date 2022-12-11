import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const RelatedArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h4>{title}</h4>
                    {
                        articles.map((val, key)=>{
                            return (
                                <div className="row" key={key}>
                                    <ArticlePreview data={val}></ArticlePreview>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

RelatedArticlesContainer.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.object,
}

export default RelatedArticlesContainer;