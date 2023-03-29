
import React,{useEffect, useState }  from "react";
import { useSearchParams } from "react-router-dom";
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
import {getUrlParameter} from "../utils";

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
        const research=getUrlParameter("research");
        await Api.GetMonuments(category,research).then((results) => {    
            console.log("esegue then");
            setmonumentsDt(results);
            setIsMounted14(true);
            setIsLoading(false);
        });
    }, [category]);
    
    if (!isMounted14 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    const form = MonumentsPageData?.Form;
    form.Research= getUrlParameter("research");
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
                                <GridContainer nCols={5} monuments={monumentsDt.Monuments}></GridContainer>
                            </div>
                        </div>
                        {(monumentsDt?.OthersMonuments.length>0) ?
                                (
                                    <div className="col col-auto my-4 px-auto">
                                    <div className="row mx-5 monuments-section">
                                        <h1 className="mob-h2">{MonumentsPageData?.GridTitle2}</h1>
                                        <GridContainer nCols={5} monuments={monumentsDt?.OthersMonuments}></GridContainer>
                                    </div>
                                </div> 
                                ) : null
                        }
                        {(monumentsDt?.MonumentsComingSoon.length>0) ?
                                (
                                    <div className="col col-auto my-4 px-auto">
                                    <div className="row mx-5 monuments-section">
                                        <h1 className="mob-h2">{monumentsDt?.ProssimamenteTitle}</h1>
                                        <GridContainer nCols={5} monuments={monumentsDt?.MonumentsComingSoon}></GridContainer>
                                    </div>
                                </div> 
                                ) : null
                        }
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