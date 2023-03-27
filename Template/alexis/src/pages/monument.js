import PropTypes from "prop-types";
import React,{useEffect, useState } from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import MonumentHomeContainer from "../containers/monument/home";
import MonumentSections from "../containers/monument/sections";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Api from "../services/Api";

const MonumentPage = ({
    match: {
        params: { id },
    },
}) => {
    const [MonumentPageData, setMonumentPageData] = useState({});
    const [isMounted17, setIsMounted17] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetMonument(id,'').then((results) => { 
                console.log("esegue then");
                setMonumentPageData(results);   
                setIsMounted17(true);
            });
    }, []);
    
    if (!isMounted17) {
        return null; // non renderizzare il componente fino a quando non è montato
      }

    const monument=MonumentPageData.Monument;  
    console.log(monument);
    if(monument?.isSezioni=="true"){
        return (
            <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Monument" />
                <div className=" wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="header-space"></div>
                    <MonumentSections monument={monument}></MonumentSections>
                    <div >
                        <MonumentHomeContainer monument={monument} id={id}></MonumentHomeContainer>                    
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
        );
    }else{
        return (
            <React.Fragment>
            <Layout>
                <SEO title="ItalyArt || Monument" />
                <div className=" wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="header-space"></div>
                    <div >
                        <MonumentHomeContainer monument={monument} id={id}></MonumentHomeContainer>                    
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
        );
    }
    
};

MonumentPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }),
};

export default MonumentPage;