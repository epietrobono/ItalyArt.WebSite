import ZigZagData from "../../../data/zigzag.json";
import Image from 'react-bootstrap/Image';
import Card from "../../../components/card";

const ZigZagContainer = ()=>{
    const data = ZigZagData.it;
    const projectInfo = data.projectInfo;
    const biographies = data.biographies;
    return (
        <div>
            <Card data={projectInfo}></Card>
            <div className="row justify-content-around m-5">
                {
                    biographies.map((val, key)=>{
                        if (key % 2 == 0) {
                            return (
                                <div key={key} className="my-4">
                                    <Card data={val} right={true}></Card>
                                </div>
                            )
                        } else {
                            return (
                                <div key={key} className="my-4">
                                    <Card data={val}></Card>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default ZigZagContainer;