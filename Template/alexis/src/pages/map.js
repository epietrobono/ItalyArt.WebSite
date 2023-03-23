import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SearchForm from "../components/search-form";
import SEO from "../components/seo";
import GridContainer from "../containers/map-monuments/grid";
import MapContainer from "../containers/map-monuments/map";
import MonumentsPageData from "../data/monuments-page.json";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const MonumentsPage = () => {
    const data = MonumentsPageData.it;
    const form = data.form;

    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt Monuments"></SEO>
                <div className="wrapper monuments-wrapper">
                    <Header classOption="hb-border"></Header>
                    <div className="header-space"></div>
                    <div className="row justify-content-center py-5 search-bar-monuments ricerca-map">
                        <div className="col col-auto form-width" id="search-form-map">
                            <SearchForm data={form}></SearchForm>
                        </div>
                    </div>
                    <div >
                        <div className="row map-section">
                            <div className="col-md-5 col-sm-12 column-monument-map">
                                <div className="number-article-map">
                                    <h2 className="mob-h2">0 Risultati</h2>
                                </div>
                                <GridContainer nCols={3}></GridContainer>
                            </div>
                            <div className="col-md-7 col-sm-12 map-mobile">
                                <MapContainer></MapContainer>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default MonumentsPage;