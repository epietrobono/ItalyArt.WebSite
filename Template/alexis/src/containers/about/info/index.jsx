import InfoData from "../../../data/info.json";
import CardWithButton from "../../../components/card-with-button";

const InfoContainer = ()=>{
    const data = InfoData.it;
    return (
        <div className="row my-5">
            <CardWithButton data={data}></CardWithButton>
        </div>
    );

};

export default InfoContainer;