import React from "react";
import PropTypes from "prop-types";
import ScrollToTop from "../components/scroll-to-top";
import SearchForm from "../components/search-form";
import SEO from "../components/seo";
import CategoriesContainer from "../containers/monuments/categories";
import MonumentsData from "../data/monuments.json";
import GridContainer from "../containers/monuments/grid";
import MonumentsPageData from "../data/monuments-page.json";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const MonumentsPage = ({
    match: {
        params: { category },
    },
}) => {
    const data = MonumentsPageData.it;    
    
    console.log(category);
    console.log(MonumentsData);
    const monumentsDt = MonumentsData.it.monuments;
    console.log(monumentsDt);
    const monuments = monumentsDt.filter((monument)=>{
        if(!category){
            return monument;
        }
        if (monument.categories.includes(category)){
            return monument
        }
    });
    console.log(monuments);
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
                                <GridContainer nCols={5} monuments={monuments}></GridContainer>
                            </div>
                        </div>
                        <div className="col col-auto my-4 px-auto">
                            <div className="row mx-5 monuments-section">
                                <h1 className="mob-h2">{data.gridTitle2}</h1>
                                <GridContainer nCols={5} monuments={monuments}></GridContainer>
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

MonumentsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            category: PropTypes.string,
        }),
    }),
};

export default MonumentsPage;