import PropTypes from "prop-types";
import Model3D from "../3dmodel";
import MonumentCitContainer from "../citazione";
import CreditsComponent from "../credits";
import MonumentGalleryContainer from "../gallery";
import MonumentRightImgContainer from "../imageADestra";
import MonumentLeftImgContainer from "../imageASinistra";
import Text from "../text";
import Title from "../title";
import MonumentTitleTextContainer from "../titleText";
import Tour360 from "../tour360";

const MonumentHomeContainer = ({ monument, id }) => {
    return (
        <div className="col-12 justify-content-center">
            {monument?.Contenuti?.map((contenuto, key) => {
                switch (contenuto.Type) {
                    case "Titolo":
                        return <Title key={key} contenuto={contenuto}></Title>;
                    case "Testo":
                        return <Text key={key}  contenuto={contenuto}></Text>;
                    case "Modello3D":
                        return <Model3D  key={key} contenuto={contenuto}></Model3D>;
                    case "Tour360":
                        return <Tour360  key={key} contenuto={contenuto}></Tour360>;
                    case "TestoConImmagineASinistra":
                        return (
                            <MonumentLeftImgContainer key={key}  contenuto={contenuto} />
                        );
                    case "TestoConImmagineADestra":
                        return (
                            <MonumentRightImgContainer key={key}  contenuto={contenuto} />
                        );
                    case "Citazione":
                        return <MonumentCitContainer key={key}  contenuto={contenuto} />;
                    case "testoConTitolo":
                        return (
                            <MonumentTitleTextContainer  key={key} contenuto={contenuto} />
                        );
                    case "GalleriaImmagini":
                        return (
                            <MonumentGalleryContainer key={key}  contenuto={contenuto} />
                        );
                    case "Credits":
                        return <CreditsComponent key={key}  contenuto={contenuto} />;
                    default:
                        return "";
                }
            })}
        </div>
    );
};

MonumentHomeContainer.propTypes = {
    monument: PropTypes.object,
    id: PropTypes.string,
};

export default MonumentHomeContainer;
