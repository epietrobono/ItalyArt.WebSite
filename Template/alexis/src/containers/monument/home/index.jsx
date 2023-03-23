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

const MonumentHomeContainer = ({monuments,id}) => {

    const monument = monuments.filter((monument) => {
        if (monument.id == parseInt(id)){
            return monument
        }
    }).pop();
    return (
        <div className="col-12 justify-content-center">
            {
                monument.contenuti.map((contenuto) => {
                    switch(contenuto.type){
                        case 'title':                                            
                            return (<Title contenuto={contenuto}></Title>);
                        case 'text':                                            
                            return (<Text contenuto={contenuto}></Text>);
                        case 'model3d':                                            
                            return (<Model3D contenuto={contenuto}></Model3D>);
                        case 'tour':                                            
                            return (<Tour360 contenuto={contenuto}></Tour360>);
                        case 'testoADestra':                                            
                            return (<MonumentLeftImgContainer contenuto={contenuto} /> );
                        case 'testoASinistra':                                            
                            return (<MonumentRightImgContainer contenuto={contenuto} />);
                        case 'citazione':                                            
                            return ( <MonumentCitContainer contenuto={contenuto}  /> );
                        case 'testoConTitolo':                                            
                            return (<MonumentTitleTextContainer contenuto={contenuto}  /> );
                        case 'galleria':                                            
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
    monuments: PropTypes.object,
    id: PropTypes.string
}

export default MonumentHomeContainer;