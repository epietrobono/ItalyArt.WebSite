import PropTypes from "prop-types";
import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import MonumentHomeContainer from "../containers/monument/home";
import MonumentSections from "../containers/monument/sections";
import MonumentPageData from "../data/monument.json";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const MonumentPage = ({
    match: {
        params: { id },
    },
}) => {
    console.log(id);
    const data = MonumentPageData.it;
    console.log(data);
    const monuments = data.monuments;
    console.log(monuments);
    const monument = monuments.filter((monument)=>{
        if (monument.id == parseInt(id)){
            return monument
        }
    }).pop();
    console.log(monument);
    if(monument?.isSezioni=="true"){
        return (
            <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Monument" />
                <div className=" wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="header-space"></div>
                    <MonumentSections monument={monument}></MonumentSections>
                    <div className="main-content container-ita-2">
                        <MonumentHomeContainer monuments={monuments} id={id}></MonumentHomeContainer>                    
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
        );
    }else{
        return (
            <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Monument" />
                <div className=" wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="header-space"></div>
                    <div className="main-content container-ita-2">
                        <MonumentHomeContainer monuments={monuments} id={id}></MonumentHomeContainer>                    
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
        );
    }
    
};

MonumentPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};

export default MonumentPage;