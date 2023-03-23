import PropTypes from "prop-types";
import Model3D from "../3dmodel";
import MonumentCitContainer from "../citazione";
import MonumentRightImgContainer from "../imageADestra";
import MonumentLeftImgContainer from "../imageASinistra";
import Text from "../text";
import Title from "../title";
import Tour360 from "../tour360";

const MonumentHomeContainer = ({monuments,id}) => {
    
    let testoDestra = 0;
    let testoSinistra = 0;
    let citazione = 0;
    
    const monument = monuments.filter((monument)=>{
        if (monument.id == id){
            return monument
        }
    }).pop();
    return (
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
                        case 'testoADestra':                                            
                            testoDestra++;
                            return (
                                <MonumentLeftImgContainer contenuto={contenuto} nSezione={testoDestra - 1} />
                            );
                        case 'testoASinistra':                                            
                            testoSinistra++;
                            return (
                                <MonumentRightImgContainer contenuto={contenuto} nSezione={testoSinistra - 1} />
                            );
                        case 'citazione':                                            
                            citazione++;
                            return (
                                <MonumentCitContainer contenuto={contenuto} nSezione={citazione - 1} />
                            );
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
    id: PropTypes.number
}

export default MonumentHomeContainer;