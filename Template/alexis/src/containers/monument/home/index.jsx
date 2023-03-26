import PropTypes from "prop-types";
import Model3D from "../3dmodel";
import MonumentCitContainer from "../citazione";
import MonumentGalleryContainer from "../gallery";
import MonumentRightImgContainer from "../imageADestra";
import MonumentLeftImgContainer from "../imageASinistra";
import Text from "../text";
import Title from "../title";
import MonumentTitleTextContainer from "../titleText";
import Tour360 from "../tour360";

const MonumentHomeContainer = ({monument,id}) => {

    return (
        <div className="col-12 justify-content-center">
            {
                monument?.Contenuti?.map((contenuto) => {
                    switch(contenuto.Type){
                        case 'Titolo':                                            
                            return (<Title contenuto={contenuto}></Title>);
                        case 'Testo':                                            
                            return (<Text contenuto={contenuto}></Text>);
                        case 'Modello3D':                                            
                            return (<Model3D contenuto={contenuto}></Model3D>);
                        case 'Tour360':                                            
                            return (<Tour360 contenuto={contenuto}></Tour360>);
                        case 'TestoConImmagineASinistra':                                            
                            return (<MonumentLeftImgContainer contenuto={contenuto} /> );
                        case 'TestoConImmagineADestra':                                            
                            return (<MonumentRightImgContainer contenuto={contenuto} />);
                        case 'Citazione':                                            
                            return ( <MonumentCitContainer contenuto={contenuto}  /> );
                        case 'testoConTitolo':                                            
                            return (<MonumentTitleTextContainer contenuto={contenuto}  /> );
                        case 'GalleriaImmagini':                                            
                            return (<MonumentGalleryContainer contenuto={contenuto}  /> );
                        default:
                            return'';
                    }
                })
            }
        </div>      
    );
};

MonumentHomeContainer.propTypes = {
    monument: PropTypes.object,
    id: PropTypes.string
}

export default MonumentHomeContainer;