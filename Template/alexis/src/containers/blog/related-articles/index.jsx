import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const RelatedArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h4 className="mob-h2 ">{title}</h4>
                    <div className="gap-10 blog-monuments">
                    {
                        articles.slice(0,2).map((val, key)=>{
                            return (
                                <div className="row flex-1" key={key}>
                                    <ArticlePreview data={val}></ArticlePreview>
                                </div>
                            )
                        })
                    }</div>
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