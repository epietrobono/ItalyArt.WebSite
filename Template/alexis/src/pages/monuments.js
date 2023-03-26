
import React,{useEffect, useState }  from "react";
import PropTypes from "prop-types";
import ScrollToTop from "../components/scroll-to-top";
import SearchForm from "../components/search-form";
import SEO from "../components/seo";
import CategoriesContainer from "../containers/monuments/categories";
import MonumentsMonumentsPageData from "../data/monuments.json";
import GridContainer from "../containers/monuments/grid";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Api from "../services/Api";

const MonumentsPage = ({
    match: {
        params: { category },
    },
}) => {
    const [MonumentsPageData, setMonumentsPageData] = useState({});
    const [monumentsDt, setmonumentsDt] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted14, setIsMounted14] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetMonumentPageText().then((results) => {    
            console.log("esegue then");
            setMonumentsPageData(results);
            });
        await Api.GetMonuments(category).then((results) => {    
            console.log("esegue then");
            setmonumentsDt(results.Monuments);
            setIsMounted14(true);
            setIsLoading(false);
        });
    }, [category]);
    
    if (!isMounted14 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    
    const form = MonumentsPageData?.Form;
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
                                <h1 className="mob-h2">{MonumentsPageData?.GridTitle1}</h1>
                                <GridContainer nCols={5} monuments={monumentsDt}></GridContainer>
                            </div>
                        </div>
                        <div className="col col-auto my-4 px-auto">
                            <div className="row mx-5 monuments-section">
                                <h1 className="mob-h2">{MonumentsPageData?.GridTitle2}</h1>
                                <GridContainer nCols={5} monuments={monumentsDt}></GridContainer>
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