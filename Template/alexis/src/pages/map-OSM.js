import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/scroll-to-top";
import SearchForm from "../components/search-form-map";
import SEO from "../components/seo";
import CategoriesContainer from "../containers/map-monuments/categories";
import GridContainer from "../containers/map-monuments/grid";
import MapComponent from "../containers/map-monuments/map-opsm";
import Layout from "../layouts";
import Footer from "../layouts/footer-short";
import Footer1 from "../layouts/footer";
import Header from "../layouts/header";
import Api from "../services/Api";
import { getUrlParameter } from "../utils";

const MapMonumentsPage = ({
    match: {
        params: { category },
    },
}) => {
    const [monuments, setMonuments] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted14, setIsMounted14] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const search = getUrlParameter("research");

    const fetchMonuments = async (NELat, NELon, SWLat, SWLon) => {
        await Api.GetMapMonuments(category, "", NELat, NELon, SWLat, SWLon)
            .then((results) => {
                setMonuments(results);
                setIsMounted14(true);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching monuments:", error);
            });
    };

    const handleViewportChanged = (bounds) => {
        const NELat = bounds.getNorthEast().lat;
        const NELon = bounds.getNorthEast().lng;
        const SWLat = bounds.getSouthWest().lat;
        const SWLon = bounds.getSouthWest().lng;
        const paramCategory = category;
        fetchMonuments(NELat, NELon, SWLat, SWLon, paramCategory, search);
    };

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    const form = monuments?.Form;
    if (!isLoading) {
        form.Research = search;
    }
    // if (!isMounted14 && isLoading) {
    //   return null; // non renderizzare il componente fino a quando non è montato
    // }
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt Monuments"></SEO>
                <div className="wrapper monuments-wrapper">
                    <Header classOption="hb-border "></Header>
                    <div className="header-space"></div>
                    {!isLoading && (
                        <div className="header-map">
                            <div className="row justify-content-center pb-4 pt-5 search-bar-monuments ricerca-map header-map-page">
                                <div
                                    className="col col-auto form-width   "
                                    id="search-form-monuments"
                                >
                                    <SearchForm data={form}></SearchForm>
                                </div>
                                <div className="bg-white pt-3 ">
                                    <CategoriesContainer
                                        categories={monuments.Categories}
                                        isLoading={isLoading}
                                    ></CategoriesContainer>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row map-section">
                        <div className="col-md-5 col-sm-12 column-monument-map">
                            {/* <div className="number-article-map">
                                <h2 className="mob-h2">0 Risultati</h2>
                            </div> */}
                            <GridContainer
                                nCols={3}
                                monuments={monuments.Monuments}
                                isLoading={isLoading}
                            ></GridContainer>
                            <div className="my-5"> </div>
                            {width < 900 && <Footer1></Footer1>}
                        </div>
                        <div className="col-md-7 col-sm-12 map-mobile">
                            <MapComponent
                                monuments={monuments.Monuments}
                                onViewportChanged={handleViewportChanged}
                                isLoading={isLoading}
                                category={category}
                                search={search}
                            />
                        </div>
                    </div>
                    {width >= 900 && <Footer></Footer>}
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

MapMonumentsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            category: PropTypes.string,
        }),
    }),
};

export default MapMonumentsPage;
