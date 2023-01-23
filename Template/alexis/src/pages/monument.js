import React from "react";
import Layout from "../layouts";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import SEO from "../components/seo";
import MonumentPageData from "../data/monument.json";
import Model3D from "../containers/monument/3dmodel";
import Tour360 from "../containers/monument/tour360";
import Title from "../containers/monument/title";
import Text from "../containers/monument/text";
import ScrollToTop from "../components/scroll-to-top";
import PropTypes from "prop-types";

const MonumentPage = ({
    match: {
        params: { id },
    },
}) => {
    const data = MonumentPageData.it;
    const monuments = data.monuments;
    const monument = monuments.filter((monument)=>{
        if (monument.id == id){
            return monument
        }
    }).pop();
    return (
        <React.Fragment>
        <Layout>
            <SEO title="ItalyArt || Monument" />
            <div className="wrapper home-default-wrapper">
                <Header classOption="hb-border" />
                <div className="main-content">
                    <div className="col-12 justify-content-center">
                            {
                                monument.contenuti.map((contenuto,index) => {
                                    switch(contenuto.type){
                                        case 'title':                                            
                                            return (<Title contenuto={contenuto}></Title>);
                                        case 'text':                                            
                                            return (<Text contenuto={contenuto}></Text>);
                                        case 'model3d':                                            
                                            return (<Model3D contenuto={contenuto}></Model3D>);
                                        case 'tour':                                            
                                            return (<Tour360 contenuto={contenuto}></Tour360>);
                                        default:
                                            return'';
                                    }
                                })
                            }
                    </div>
                </div>
                <Footer />
                <ScrollToTop />
            </div>
        </Layout>
    </React.Fragment>
    );
};

MonumentPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }),
};

export default MonumentPage;