import PropTypes from "prop-types";
import React from "react";
import ArticleContent from "../components/article-content";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import RelatedArticlesContainer from "../containers/blog/related-articles";
import MonumentsContainer from "../containers/monuments/monuments";
import OtherMonumentsContainer from "../containers/monuments/other-monuments";
import ArticlesData from "../data/articles.json";
import MonumentsData from "../data/monuments.json";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

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
                    <div className="header-space"></div>
                    <div className="main-content">
                        <div className="spazio-sopra row row-cols-8 justify-content-center article-page-start">
                            <div className="col col-md-7 col-lg-8 col-sm-12 spazio-destro">
                                <ArticleContent data={article}></ArticleContent>
                            </div>
                            <div className="col  col-lg-3 col-sm-12 ">
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