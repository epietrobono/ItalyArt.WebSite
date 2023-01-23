import React from "react";
import Layout from "../layouts";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import SEO from "../components/seo";
import MonumentsPageData from "../data/monuments-page.json";
import SearchForm from "../components/search-form";
import GridContainer from "../containers/map-monuments/grid";
import MapContainer from "../containers/map-monuments/map";
import ScrollToTop from "../components/scroll-to-top";

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
                        <div className="col col-auto">
                            <SearchForm data={form}></SearchForm>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="row">
                            <div className="col-4">
                                <GridContainer nCols={2}></GridContainer>
                            </div>
                            <div className="col-8">
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