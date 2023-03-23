import {React,useEffect, useState }  from "react";
import Carousel from 'react-bootstrap/Carousel';
import SearchForm from "../../../components/search-form";
// import HomeMonumentsData from "../../../data/home-monuments.json";

const MonumentsSearchContainer = () => {

    console.log("entrato");
    const [data, setData] = useState({});
    useEffect(() => {
        async function getBanners() {
            console.log("getBanners");
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
            const response = await fetch(`http://localhost:4439/api/Banner`, settings);
            console.log(response);
            const responseJson = await response.json();
            console.log(responseJson);
            setData(responseJson.results);
        }

        getBanners();
        }, []);
    
        return (
            <div className="home-global">
            <Carousel className="home-banners" indicators={false}>
                    {
                        data?.Banners?.map((banner, key) => {
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
                    <h1 className="title text-center">{data?.Title}</h1>
                    <div className="bg-light rounded-search barra-ricerca py-2 px-4">
                        <SearchForm data={data} />
                    </div>
                </div>
            </div>
        );
    };


//     return fetch(`http://localhost:4439/api/Banner`, settings).then((response)=> response.json())
//                 .then((responseJson)=>{
//                     var data = responseJson.results;
//                     console.log(data);
//                     return (
//                         <div className="home-global">
//                             <Carousel className="home-banners" indicators={false}>
//                                     {
//                                         data.Banners.map((banner, key) => {
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
//                                     <h1 className="title text-center">{data.Title}</h1>
//                                     <div className="bg-light rounded-search barra-ricerca py-2 px-4">
//                                         <SearchForm data={data} />
//                                     </div>
//                                 </div>
//                             </div>
//                     )
//                 });
// };

export default MonumentsSearchContainer;