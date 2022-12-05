import React from "react";
import Layout from "../layouts";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import SEO from "../components/seo";
import MonumentsPageData from "../data/monuments-page.json";
import SearchForm from "../components/search-form";
import CategoriesContainer from "../containers/monuments/categories";
import GridContainer from "../containers/monuments/grid";
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
                    <CategoriesContainer></CategoriesContainer>
                    <div className="main-content">
                        <div className="col col-auto my-4">
                            <div className="row mx-5">
                                <h1>{data.gridTitle1}</h1>
                                <GridContainer nCols={5}></GridContainer>
                            </div>
                        </div>
                        <div className="col col-auto my-4 px-auto">
                            <div className="row mx-5">
                                <h1>{data.gridTitle2}</h1>
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