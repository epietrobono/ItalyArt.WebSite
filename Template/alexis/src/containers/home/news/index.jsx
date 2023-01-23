import News from "../../../components/news";
import NewsData from "../../../data/news.json";

const NewsContainer = () => {
    const data = NewsData.it;
    return (
        <div className="news py-4 section-margin">
            <h2 className="text-center">{data.title}</h2>
            <div className="row justify-content-center">
                {
                    data.news.map((val, key)=>{
                        return(
                            <div className="col col-3 px-4 mx-4" key={key}>
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