import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form-map";
import WhereToGoData from "../../../data/where-to-go.json";
import Api from "../../../services/Api";

const WhereToGoContainer = () => {
    const [WhereToGoContainerData, setWhereToGoContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetMapTextHome();
            setWhereToGoContainerData(results);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if(isLoading){
        return null;
    }

    return (
        <>
        {!isLoading && (
            <div className="news delete-margin">
            <div className="container-ita">
            <div className="row where-to-go justify-content-center section-margin ">
                <div className="col col-auto py-5">
                    <h1 className="text-center mob-h2">{WhereToGoContainerData?.Title}</h1>
                    <div className="row justify-content-center align-items-center d-flex sezione-dove-andare">
                        <Image className="col mx-6 mappa-italia" alt={WhereToGoContainerData?.Image?.Alt} src={process.env.PUBLIC_URL + WhereToGoContainerData?.Image?.Path}></Image>
                        <div className="col col-6 mx-6">
                            <div className="where-to-go-form ">
                                <h2 className="mob-h2">{WhereToGoContainerData?.Subtitle}</h2>
                                <p className="mob-p" style={{"white-space": "pre-line"}}>{WhereToGoContainerData?.Desc}</p>
                                <div className="mob-none" >
                                    <SearchForm data={WhereToGoContainerData?.Form} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mob-cerca">
                        <SearchForm data={WhereToGoContainerData?.Form} />
                    </div>
                </div>
            </div>
            </div>
            </div>
        )}
        
        </>
    );
}

export default WhereToGoContainer;