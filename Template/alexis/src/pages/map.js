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
                    <div className="row justify-content-center py-5">
                        <div className="col col-auto form-width">
                            <SearchForm data={form}></SearchForm>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="row">
                            <div className="col-5">
                                <GridContainer nCols={3}></GridContainer>
                            </div>
                            <div className="col-7">
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