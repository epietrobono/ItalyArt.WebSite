import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "reactstrap";
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
import { getUrlParameter } from "../utils";

const MonumentsPage = ({
    match: {
        params: { category },
    },
}) => {
    const [monumentsDt, setmonumentsDt] = useState({});
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted14, setIsMounted14] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [hasMoreResults, setHasMoreResults] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const loadMoreMonuments = async () => {
        setLoadingMore(true);
        try {
            const nextPage = currentPage + 1;
            const moreResults = await Api.GetMonuments(
                category,
                search,
                nextPage
            );

            if (moreResults.Monuments.length === 0) {
                setHasMoreResults(false);
            } else {
                setmonumentsDt((prevState) => ({
                    ...prevState,
                    Monuments: [
                        ...prevState.Monuments,
                        ...moreResults.Monuments,
                    ],
                }));
                setLoadingMore(false);
                setCurrentPage(nextPage);
            }
        } catch {
            setLoadingMore(false);
        }
    };

    useEffect(async () => {
        if (!search || search == "") {
            setSearch(getUrlParameter("research"));
        }
        setCurrentPage(1);
        setHasMoreResults(true);
        setLoadingMore(false);
        await Api.GetMonuments(category, search, 1).then((results) => {
            setmonumentsDt(results);
            setIsMounted14(true);
            setIsLoading(false);
        });
    }, [category]);

    if (!isMounted14 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
    }
    const form = monumentsDt?.Form;
    form.Research = search;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt Monuments"></SEO>
                <div className="wrapper monuments-wrapper">
                    <Header classOption="hb-border"></Header>
                    <div className="header-space"></div>
                    <div className="row justify-content-center search-bar-monuments py-5">
                        <div
                            className="col col-auto form-width"
                            id="search-form-monuments"
                        >
                            <SearchForm data={form}></SearchForm>
                        </div>
                    </div>
                    <CategoriesContainer></CategoriesContainer>
                    <div className="main-content">
                        <div className="col col-auto my-4">
                            <div className="row mx-5 monuments-section">
                                <h1 className="mob-h2">
                                    {monumentsDt?.GridTitle1}
                                </h1>
                                <GridContainer
                                    nCols={5}
                                    monuments={monumentsDt.Monuments}
                                ></GridContainer>
                            </div>
                        </div>
                        {hasMoreResults && (
                            <div className="text-center">
                                {loadingMore ? (
                                    <Spinner color="custom-spinner-primary-color" /> // Modifica "primary" con il colore desiderato per lo spinner
                                ) : (
                                    <button
                                        className="btn btn-primary mt-4"
                                        onClick={loadMoreMonuments}
                                    >
                                        Visualizza Altri
                                    </button>
                                )}
                            </div>
                        )}
                        {monumentsDt?.OthersMonuments.length > 0 ? (
                            <div className="col col-auto my-4 px-auto">
                                <div className="row mx-5 monuments-section">
                                    <h1 className="mob-h2">
                                        {monumentsDt?.GridTitle2}
                                    </h1>
                                    <GridContainer
                                        nCols={5}
                                        monuments={monumentsDt?.OthersMonuments}
                                    ></GridContainer>
                                </div>
                            </div>
                        ) : null}
                        {monumentsDt?.MonumentsComingSoon.length > 0 ? (
                            <div className="col col-auto my-4 px-auto">
                                <div className="row mx-5 monuments-section">
                                    <h1 className="mob-h2">
                                        {monumentsDt?.ProssimamenteTitle}
                                    </h1>
                                    <GridContainer
                                        nCols={5}
                                        monuments={
                                            monumentsDt?.MonumentsComingSoon
                                        }
                                    ></GridContainer>
                                </div>
                            </div>
                        ) : null}
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
