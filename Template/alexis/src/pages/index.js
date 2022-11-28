import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
// import QuteContainer from "../containers/global/global-qute/index.jsx";
// import PortfolioContainer from "../containers/global/portfolio/index.jsx";
import MonumentsSearchContainer from "../containers/home/monuments-search/index.jsx";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt" />
                <div className="wrapper home-default-wrapper">
                    <Header></Header>
                    <MonumentsSearchContainer></MonumentsSearchContainer>
                    {/*
                    <div className="main-content">
                        <QuteContainer />
                        <PortfolioContainer />
                    </div> */}
                    <Footer></Footer>
                    <ScrollToTop></ScrollToTop>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
