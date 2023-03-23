import CategoriesGallery from "../../../components/categories-gallery";
import CategoriesGalleryMobile from "../../../components/categories-gallery-mobile";
import {React,useEffect, useState }  from "react";
import Api from "../../../services/Api";

const CategoriesContainer = () => {
    const [categoriesContainerData, setcategoriesContainerData] = useState({});
    const [isMounted4, setIsMounted4] = useState(false);
    
    useEffect(() => {
        console.log("entro in useEffects");
        setIsMounted4(true);
        Api.GetCategorieHome().then((results) => {    
        console.log("esegue then");
        setcategoriesContainerData(results);
      });
    }, []);
    
    if (!isMounted4) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    
    return (
    <div className="d-flex flex-column section-margin text-categorie-home">
        <h2 className="text-center">{categoriesContainerData.Title}</h2>
        <span className="text-center">{categoriesContainerData.Desc}</span>
        <span className="text-center">{categoriesContainerData.Desc2}</span>
        <CategoriesGallery data={categoriesContainerData.Categories}></CategoriesGallery>
        <CategoriesGalleryMobile data={categoriesContainerData.Categories}></CategoriesGalleryMobile>
    </div>
    );
};

export default CategoriesContainer;