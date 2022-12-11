import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const PopularArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="row justify-content-around">
                <h1>{title}</h1>
                {
                    articles.map((val, key)=>{
                        return (
                            <div className="col col-3" key={key}>
                                <ArticlePreview data={val}></ArticlePreview>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

PopularArticlesContainer.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.object,
}

export default PopularArticlesContainer;