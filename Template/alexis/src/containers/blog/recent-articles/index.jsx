import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const RecentArticlesContainer = ({title, articles,}) => {
    return (
        <div>
            <div className="container-ita-3 row justify-content-around">
                <h1 className="title-blog mob-h2">{title}</h1>
                <hr className="orizontal-line"></hr>
                <div id="recenti" className="row gap-10">
                {
                    articles.map((val, key)=>{
                        return (
                            
                            <div id={val.numid} className="col col-3 flex-1" key={key}>
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


RecentArticlesContainer.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.object,
}

export default RecentArticlesContainer;