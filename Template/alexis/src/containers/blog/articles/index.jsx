import PropTypes from "prop-types";
import React from "react";
import ArticlePreview from "../../../components/article-preview";

const ArticlesContainer = ({ articles }) => {
    var i = 1;
    return (
        <div className="row justify-content-center intro-blog py-5">
            {
                <>
                    <div id="primo-articolo" className="col col-md-6 col-sm-12">
                        <ArticlePreview data={articles[0]}></ArticlePreview>
                    </div>
                    <div className="col col-md-4 col-sm-12 ">
                        <div className="row gap-10">
                            {articles.map((val, key) => {
                                if (i == 1) {
                                    i = i + 1;
                                    return null;
                                } else {
                                    return (
                                        <div className="row flex-1" key={key}>
                                            <ArticlePreview
                                                data={val}
                                            ></ArticlePreview>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

ArticlesContainer.propTypes = {
    articles: PropTypes.object,
};

export default ArticlesContainer;
