import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import CarouselModelsContainer from "../containers/home/carousel-models";
import CarouselMonumentsContainer from "../containers/home/carousel-monuments";
import CategoriesContainer from "../containers/home/categories";
import ExtraLinksContainer from "../containers/home/extra-links-container";
import ModelSuggestionsContainer from "../containers/home/model-suggestions";
import MonumentsSearchContainer from "../containers/home/monuments-search/index.jsx";
import NewsContainer from "../containers/home/news";
import NewsletterContainer from "../containers/home/newsletter";
import SuggestionsContainer from "../containers/home/suggestions";
import WhereToGoContainer from "../containers/home/where-to-go";
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
                    <div className="header-space"></div>
                    <MonumentsSearchContainer></MonumentsSearchContainer>
                    <ExtraLinksContainer></ExtraLinksContainer>
                    <div className="main-content">
                        <CategoriesContainer></CategoriesContainer>
                        <CarouselMonumentsContainer></CarouselMonumentsContainer>
                        <SuggestionsContainer></SuggestionsContainer>
                        <WhereToGoContainer></WhereToGoContainer>
                        <CarouselModelsContainer></CarouselModelsContainer>
                        <ModelSuggestionsContainer></ModelSuggestionsContainer>
                        <NewsContainer></NewsContainer>
                    </div>
                    <NewsletterContainer></NewsletterContainer>
                    <Footer></Footer>
                    <ScrollToTop></ScrollToTop>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
