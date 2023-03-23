import CategoriesGallery from "../../../components/categories-gallery";
import CategoriesGalleryMobile from "../../../components/categories-gallery-mobile";
import CategoriesData from "../../../data/categories.json";

const CategoriesContainer = () => {
    return (
    <div className="d-flex flex-column section-margin text-categorie-home">
        <h2 className="text-center">{CategoriesData.it.title}</h2>
        <span className="text-center">{CategoriesData.it.desc}</span>
        <span className="text-center">{CategoriesData.it.desc2}</span>
        <CategoriesGallery data={CategoriesData.it.categories}></CategoriesGallery>
        <CategoriesGalleryMobile data={CategoriesData.it.categories}></CategoriesGalleryMobile>
    </div>
    );
};

export default CategoriesContainer;