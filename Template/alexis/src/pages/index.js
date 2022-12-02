import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import CategoriesContainer from "../containers/home/categories";
import ExtraLinksContainer from "../containers/home/extra-links-container";
import CarouselMonumentsContainer from "../containers/home/carousel-monuments";
import MonumentsSearchContainer from "../containers/home/monuments-search/index.jsx";
import SuggestionsContainer from "../containers/home/suggestions";
import WhereToGoContainer from "../containers/home/where-to-go";
import CarouselModelsContainer from "../containers/home/carousel-models";
import ModelSuggestionsContainer from "../containers/home/model-suggestions";
import NewsContainer from "../containers/home/news";
import NewsletterContainer from "../containers/home/newsletter";
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
