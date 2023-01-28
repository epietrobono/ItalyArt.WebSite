import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SearchForm from "../components/search-form";
import SEO from "../components/seo";
import CategoriesContainer from "../containers/monuments/categories";
import GridContainer from "../containers/monuments/grid";
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
                    <div className="row justify-content-center search-bar-monuments py-5">
                        <div className="col col-auto form-width" id="search-form-monuments">
                            <SearchForm data={form}></SearchForm>
                        </div>
                    </div>
                    <CategoriesContainer></CategoriesContainer>
                    <div className="main-content">
                        <div className="col col-auto my-4">
                            <div className="row mx-5 monuments-section">
                                <h1 className="mob-h2">{data.gridTitle1}</h1>
                                <GridContainer nCols={5}></GridContainer>
                            </div>
                        </div>
                        <div className="col col-auto my-4 px-auto">
                            <div className="row mx-5 monuments-section">
                                <h1 className="mob-h2">{data.gridTitle2}</h1>
                                <GridContainer nCols={5}></GridContainer>
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