import React from "react";
import Layout from "../layouts";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import SEO from "../components/seo";
import MonumentPageData from "../data/monument.json";
import MonumentHomeContainer from "../containers/monument/home";
import MonumentSections from "../containers/monument/sections";
import ScrollToTop from "../components/scroll-to-top";
import PropTypes from "prop-types";

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
        if (monument.id == id){
            return monument
        }
    }).pop();
    console.log(monument);
    if(monument?.isSezioni=="true"){
        return (
            <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Monument" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <MonumentSections monument={monument}></MonumentSections>
                    <div className="main-content">
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
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
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
            id: PropTypes.number,
        }),
    }),
};

export default MonumentPage;