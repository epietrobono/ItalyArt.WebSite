import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const PopularArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="container-ita-3 row justify-content-around">
                <h1 className="title-blog space-blog-title mob-h2">{title}</h1>
                <hr className="orizontal-line"></hr>
                {
                    articles.map((val, key)=>{
                        return (
                            <div id={val.numid} className="col col-3" key={key}>
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