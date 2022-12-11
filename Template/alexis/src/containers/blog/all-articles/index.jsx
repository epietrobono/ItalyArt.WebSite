import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const AllArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h1>{title}</h1>
                    {
                        articles.map((val, key)=>{
                            return (
                                <div className="row" key={key}>
                                    <ArticlePreview data={val} horizontal={true}></ArticlePreview>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

AllArticlesContainer.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.object,
}

export default AllArticlesContainer;