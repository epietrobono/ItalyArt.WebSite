import React, { useEffect, useState } from "react";
import CategoryIcon from "../../../components/category-icon";
import Api from "../../../services/Api";

function CategoriesContainer() {
    
    
    const [CategoriesContainerData, setCategoriesContainerData] = useState({});
    const [monumentsDt, setmonumentsDt] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted20, setIsMounted20] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetCategorieIcons().then((results) => {    
            console.log("esegue then");
            setCategoriesContainerData(results);
            setIsMounted20(true);
            setIsLoading(false);
        });
    }, []);
    
    if (!isMounted20 && isLoading) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    
    const data = CategoriesContainerData.Categories;
    return (
        <div className="categories cat-manuments row justify-content-center">
            {!isLoading && 
                data.map((val, key)=>{
                    return (
                        <div className="col col-1" key={key}>
                            <CategoryIcon data={val}></CategoryIcon>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CategoriesContainer;