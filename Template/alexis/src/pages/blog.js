import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AllArticlesContainer from "../containers/blog/all-articles";
import ArticlesContainer from "../containers/blog/articles";
import PopularArticlesContainer from "../containers/blog/popular-articles";
import RecentArticlesContainer from "../containers/blog/recent-articles";
import ArticlesData from "../data/articles.json";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const Blog = () => {
    const data = ArticlesData.it;
    const articles = data.articles;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Blog" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />

                    <div className="container-ita">
                        <ArticlesContainer articles={articles}></ArticlesContainer>
                        <RecentArticlesContainer title={data.recentTitle} articles={articles}></RecentArticlesContainer>
                        <PopularArticlesContainer title={data.popularTitle} articles={articles}></PopularArticlesContainer>
                        <AllArticlesContainer title={data.allTitle} articles={articles}></AllArticlesContainer>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Blog;
