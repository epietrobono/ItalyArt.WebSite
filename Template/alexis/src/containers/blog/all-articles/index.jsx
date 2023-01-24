import PropTypes from "prop-types";
import ArticlePreview from "../../../components/article-preview";

const AllArticlesContainer = ({title, articles}) => {
    return (
        <div>
            <div className="container-ita row justify-content-left">
                <div className="col col-auto">
                    <h1 className="title-blog space-blog-title">{title}</h1>
                    <hr className="orizontal-line"></hr>
                    {
                        articles.map((val, key)=>{
                            return (
                                <div className="row sezione-tutti-aricoli" key={key}>
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