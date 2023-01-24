import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const RecentArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="container-ita row justify-content-around">
                <h1 className="title-blog">{title}</h1>
                <hr className="orizontal-line"></hr>
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

RecentArticlesContainer.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.object,
}

export default RecentArticlesContainer;