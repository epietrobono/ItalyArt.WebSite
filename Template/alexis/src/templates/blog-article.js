import PropTypes from "prop-types";
import React,{useEffect, useState }  from "react";
import ArticleContent from "../components/article-content";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import RelatedArticlesContainer from "../containers/blog/related-articles";
import MonumentsContainer from "../containers/monuments/monuments";
import OtherMonumentsContainer from "../containers/monuments/other-monuments";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";
import Api from "../services/Api";

const BlogArticle = ({
    match: {
        params: { id },
    },
}) => {
    //TODO Metodo Singolo Articolo
    const [BlogArticlesData, setBlogArticlesData] = useState({});
    const [isMounted23, setIsMounted23] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetArticolo(id).then((results) => {    
            console.log("esegue then");
            setBlogArticlesData(results);
            setIsLoading(false);
            setIsMounted23(true);
        });
    }, []);
    
    if (!isMounted23 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
      }

    const article = BlogArticlesData?.Article;

    const articles = BlogArticlesData?.RelatedArticles;
            
    const monuments = BlogArticlesData?.RelatedMonuments;
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
                                    <MonumentsContainer title={BlogArticlesData?.ShowMore} monuments={monuments}></MonumentsContainer>
                                </div>
                                <div className="row">
                                    <RelatedArticlesContainer title={BlogArticlesData?.RelatedTitle} articles={articles}></RelatedArticlesContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <OtherMonumentsContainer title={monumentsData.Othertitle} monuments={monuments}></OtherMonumentsContainer> */}
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