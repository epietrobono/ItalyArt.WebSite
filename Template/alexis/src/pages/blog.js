import React, { useEffect, useState } from "react";
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
import Api from "../services/Api";

const Blog = () => {
    const [BlogData, setBlogData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted23, setIsMounted23] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetTestiArticoli();
            setBlogData(results);
            setIsMounted23(true);
            setIsLoading(false);
      }
      fetchData();
    }, []);

    
    if (!isMounted23 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
      
    const articles = BlogData.Articles;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Blog" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="header-space"></div>

                    <div className="container-ita">
                        <ArticlesContainer articles={articles}></ArticlesContainer>
                        <RecentArticlesContainer title={BlogData?.RecentTitle} articles={BlogData.RecentArticles}></RecentArticlesContainer>
                        <PopularArticlesContainer title={BlogData?.PopularTitle} articles={BlogData.PopularArticles}></PopularArticlesContainer>
                        <AllArticlesContainer title={BlogData?.AllTitle} articles={BlogData.AllArticles}></AllArticlesContainer>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Blog;
