import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import ArticlesData from "../data/articles.json";
import MonumentsData from "../data/monuments.json";
import ArticleContent from "../components/article-content";
import RelatedArticlesContainer from "../containers/blog/related-articles";
import MonumentsContainer from "../containers/monuments/monuments";
import OtherMonumentsContainer from "../containers/monuments/other-monuments";
import PropTypes from "prop-types";

const BlogArticle = ({
    match: {
        params: { id },
    },
}) => {
    const articlesData = ArticlesData.it;
    const articles = articlesData.articles;
    const article = articles.filter((article)=>{
        if (article.id == id){
            return article
        }
    }).pop();

    const monumentsData = MonumentsData.it;
    const monuments = monumentsData.monuments;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Article" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <div className="row row-cols-8 justify-content-center">
                            <div className="col col-6">
                                <ArticleContent data={article}></ArticleContent>
                            </div>
                            <div className="col col-3">
                                <div className="row">
                                    <MonumentsContainer title={monumentsData.alsoTitle} monuments={monuments}></MonumentsContainer>
                                </div>
                                <div className="row">
                                    <RelatedArticlesContainer title={articlesData.relatedTitle} articles={articles}></RelatedArticlesContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <OtherMonumentsContainer title={monumentsData.othertitle} monuments={monuments}></OtherMonumentsContainer>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogArticle.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }),
};

export default BlogArticle;