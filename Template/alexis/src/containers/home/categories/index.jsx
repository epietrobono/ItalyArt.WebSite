import React, { useEffect, useState } from "react";
import CategoriesGallery from "../../../components/categories-gallery";
import CategoriesGalleryMobile from "../../../components/categories-gallery-mobile";
import Api from "../../../services/Api";

const CategoriesContainer = () => {
    const [categoriesContainerData, setcategoriesContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      const fetchData = async () => {
          const results = await Api.GetCategorieHome() 
          setcategoriesContainerData(results);
          setIsLoading(false);
        }
        fetchData();
    }, []);
    
    return (<>
      {!isLoading && ( 
        
        <div className="d-flex flex-column section-margin text-categorie-home">
        <h2 className="text-center">{categoriesContainerData.Title}</h2>
        <span className="text-center">{categoriesContainerData.Desc}</span>
        <span className="text-center">{categoriesContainerData.Desc2}</span>
        <CategoriesGallery data={categoriesContainerData.Categories}></CategoriesGallery>
        <CategoriesGalleryMobile data={categoriesContainerData.Categories}></CategoriesGalleryMobile>
        </div>
        
      )}
   </> );
};

export default CategoriesContainer;