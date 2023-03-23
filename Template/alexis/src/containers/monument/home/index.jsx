import PropTypes from "prop-types";
import Model3D from "../3dmodel";
import Tour360 from "../tour360";
import Title from "../title";
import Text from "../text";

const MonumentHomeContainer = ({monuments,id}) => {
    
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