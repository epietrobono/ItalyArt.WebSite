import News from "../../../components/news";
import NewsData from "../../../data/news.json";

const NewsContainer = () => {
    const data = NewsData.it;
    return (
        <div className="news py-4">
            <h2 className="text-center">{data.title}</h2>
            <div className="row row-cols-3 justift-content-center">
                {
                    data.news.map((val, key)=>{
                        return(
                            <div className="col" key={key}>
                                <News data={val}></News>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default NewsContainer;