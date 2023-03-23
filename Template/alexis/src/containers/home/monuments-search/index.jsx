import {React,useEffect, useState }  from "react";
import Carousel from 'react-bootstrap/Carousel';
import SearchForm from "../../../components/search-form";
import Api from "../../../services/Api";

const MonumentsSearchContainer = () => {
    const [MonumentsSearchContainerData, setMonumentsSearchContainerData] = useState({});
    const [isMounted7, setIsMounted7] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetBanner().then((results) => {    
            setIsMounted7(true);
        console.log("esegue then");
        setMonumentsSearchContainerData(results);
      });
    }, []);
    
    if (!isMounted7) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    
        return (
            <div className="home-global">
            <Carousel className="home-banners" indicators={false}>
                    {
                        MonumentsSearchContainerData?.Banners?.map((banner, key) => {
                            return (
                                <Carousel.Item style={{width: "100%"}} key={key}>
                                    <div
                                        className="row monuments-search align-content-center justify-content-center  home-initial"
                                        style={{
                                            backgroundImage: `url(${
                                                'http://'+banner.BackgroundImage
                                            })`,
                                        }}>
                                            <div className="home-overlay"></div>  
                                        
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                
                <div className="home-bar monuments-form">
                    <h1 className="title text-center">{MonumentsSearchContainerData?.Title}</h1>
                    <div className="bg-light rounded-search barra-ricerca py-2 px-4">
                        <SearchForm data={MonumentsSearchContainerData} />
                    </div>
                </div>
            </div>
        );
    };


//     return fetch(`http://localhost:4439/api/Banner`, settings).then((response)=> response.json())
//                 .then((responseJson)=>{
//                     var MonumentsSearchContainerData = responseJson.results;
//                     console.log(MonumentsSearchContainerData);
//                     return (
//                         <div className="home-global">
//                             <Carousel className="home-banners" indicators={false}>
//                                     {
//                                         MonumentsSearchContainerData.Banners.map((banner, key) => {
//                                             return (
//                                                 <Carousel.Item style={{width: "100%"}} key={key}>
//                                                     <div
//                                                         className="row monuments-search align-content-center justify-content-center  home-initial"
//                                                         style={{
//                                                             backgroundImage: `url(${
//                                                                 process.env.PUBLIC_URL + banner.backgroundImage
//                                                             })`,
//                                                         }}>
//                                                             <div className="home-overlay"></div>  
                                                        
//                                                     </div>
//                                                 </Carousel.Item>
//                                             )
//                                         })
//                                     }
//                                 </Carousel>
                                
//                                 <div className="home-bar monuments-form">
//                                     <h1 className="title text-center">{MonumentsSearchContainerData.Title}</h1>
//                                     <div className="bg-light rounded-search barra-ricerca py-2 px-4">
//                                         <SearchForm MonumentsSearchContainerData={MonumentsSearchContainerData} />
//                                     </div>
//                                 </div>
//                             </div>
//                     )
//                 });
// };

export default MonumentsSearchContainer;