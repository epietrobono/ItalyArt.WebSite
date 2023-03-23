import { React, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import SearchForm from "../../../components/search-form";
// import HomeMonumentsData from "../../../data/home-monuments.json";

const MonumentsSearchContainer = () => {

    const [data, setData] = useState({ //ti ho aggiunto un valore di default
        Banners: [],
        Title: ''
    });
    const [loading, setLoading] = useState(true); //e ho trovato anche un use state in caso il caricamento dele immagini fosse lento

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
            try { //ho aggiunto un try per poter mettere gli errori in caso non funzionasse il collegamento e per aggiungere il loading
                const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Banner`, settings);
                if (!response.ok) {
                    throw new Error(`errore HTTP ${response.status}`);
                }
                const responseJson = await response.json();
                setData(responseJson.results);
                console.log('risultati : ' +responseJson.results)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
            

        getBanners();
        }, []);
    
        return (
            <div className="home-global">
            {loading ? (
                <Carousel className="home-banners" indicators={false}>
                    <Carousel.Item style={{width: "100%"}}>
                        <div className="row monuments-search align-content-center justify-content-center  home-initial"
                            style={{backgroundColor: `rgba(0, 0, 0, 0.15)`}}>
                            <div className="home-overlay"></div>  
                        </div>
                    </Carousel.Item>
                </Carousel>
            ) : (
                <Carousel className="home-banners" indicators={false}>
                    {data?.Banners?.map((banner, key) => {
                        return (
                            <Carousel.Item style={{width: "100%"}} key={key}>
                                <div className="row monuments-search align-content-center justify-content-center  home-initial"
                                    style={{backgroundImage: `url(http://${banner.BackgroundImage})`}}>
                                    <div className="home-overlay"></div>  
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            )}

                
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