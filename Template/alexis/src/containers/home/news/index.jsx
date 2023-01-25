import News from "../../../components/news";
import NewsData from "../../../data/news.json";

const NewsContainer = () => {
    const data = NewsData.it;
    return (
        <div className="news ">
        <div className="news py-5 section-margin delete-margin mob-news">
            <h2 className="text-center mob-h2">{data.title}</h2>
            <div className="row justify-content-center">
                {
                    data.news.map((val, key)=>{
                        return(
                            
                                <News data={val}  key={key}></News>
                            
                        );
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default NewsContainer;