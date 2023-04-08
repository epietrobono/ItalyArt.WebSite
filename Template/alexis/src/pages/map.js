import { React, useEffect, useState } from "react";
import ScrollToTop from "../components/scroll-to-top";
import SearchForm from "../components/search-form";
import SEO from "../components/seo";
import GridContainer from "../containers/map-monuments/grid";
import MapContainer from "../containers/map-monuments/map";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Api from "../services/Api";

const MonumentsPage = () => {
    const [MapMonumentsPageData, setMapMonumentsPageData] = useState({});
    const [isMounted13, setIsMounted13] = useState(false);

    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetMonumentPageText().then((results) => {
            setIsMounted13(true);
            console.log("esegue then");
            setMapMonumentsPageData(results);
        });
    }, []);

    if (!isMounted13) {
        return null; // non renderizzare il componente fino a quando non è montato
    }

    const form = MapMonumentsPageData?.Form;

    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt Monuments"></SEO>
                <div className="wrapper monuments-wrapper">
                    <Header classOption="hb-border"></Header>
                    <div className="header-space"></div>
                    <div className="row justify-content-center py-5 search-bar-monuments ricerca-map">
                        <div
                            className="col col-auto form-width"
                            id="search-form-map"
                        >
                            <SearchForm data={form}></SearchForm>
                        </div>
                    </div>
                    <div>
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
