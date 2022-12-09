import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import Articles from "../containers/blog/articles";
import RecentArticles from "../containers/blog/recent-articles";
import PopularArticles from "../containers/blog/popular-articles";
import AllArticles from "../containers/blog/all-articles";
import ArticlesData from "../data/articles.json";

const Blog = () => {
    const data = ArticlesData.it;
    const articles = data.articles;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Blog" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <Articles articles={articles}></Articles>
                        <RecentArticles title={data.recentTitle} articles={articles}></RecentArticles>
                        <PopularArticles title={data.popularTitle} articles={articles}></PopularArticles>
                        <AllArticles title={data.allTitle} articles={articles}></AllArticles>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Blog;
