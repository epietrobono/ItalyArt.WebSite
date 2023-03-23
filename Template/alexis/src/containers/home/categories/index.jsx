import CategoriesGallery from "../../../components/categories-gallery";
import CategoriesGalleryMobile from "../../../components/categories-gallery-mobile";
import {React,useEffect, useState }  from "react";

const CategoriesContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getAjaxApiData() {
            const postBody = {
                Pagina:"Home",
                Lingua:"IT"
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postBody)
            };
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/CategorieHome`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);

    return (
    <div className="d-flex flex-column section-margin text-categorie-home">
        <h2 className="text-center">{data.Title}</h2>
        <span className="text-center">{data.Desc}</span>
        <span className="text-center">{data.Desc2}</span>
        <CategoriesGallery data={data.Categories}></CategoriesGallery>
        <CategoriesGalleryMobile data={data.Categories}></CategoriesGalleryMobile>
    </div>
    );
};

export default CategoriesContainer;