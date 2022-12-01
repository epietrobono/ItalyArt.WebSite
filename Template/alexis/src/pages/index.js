import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import CategoriesContainer from "../containers/categories";
import ExtraLinksContainer from "../containers/extra-links-container";
import CarouselMonumentsContainer from "../containers/home/carousel-monuments";
import MonumentsSearchContainer from "../containers/home/monuments-search/index.jsx";
import SuggestionsContainer from "../containers/suggestions";
import WhereToGoContainer from "../containers/where-to-go";
import ModelSuggestionsContainer from "../containers/model-suggestions";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ItalyArt" />
                <div className="wrapper home-default-wrapper">
                    <Header></Header>
                    <MonumentsSearchContainer></MonumentsSearchContainer>
                    <ExtraLinksContainer></ExtraLinksContainer>
                    <div className="main-content">
                        <CategoriesContainer></CategoriesContainer>
                        <CarouselMonumentsContainer></CarouselMonumentsContainer>
                        <SuggestionsContainer></SuggestionsContainer>
                        <WhereToGoContainer></WhereToGoContainer>
                        <ModelSuggestionsContainer></ModelSuggestionsContainer>
                    </div>
                    <Footer></Footer>
                    <ScrollToTop></ScrollToTop>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
