import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import WhoContainer from "../containers/about/who";
import ZigZagContainer from "../containers/about/zig-zag";
import InfoContainer from "../containers/about/info";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Alexis || About" />
                <div className="wrapper about-page-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <WhoContainer></WhoContainer>
                        <ZigZagContainer></ZigZagContainer>
                        <InfoContainer></InfoContainer>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
