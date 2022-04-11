import "./App.css";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import MainHeader from "./components/MainHeader/MainHeader";
import CovidInfo from "./components/CovidInfo/CovidInfo";
import Input from "./components/UserInput/Input";
import CovidMap from "./components/CovidMap/CovidMap";

// kakao js key : 3fc5757df7e681fdce2d1ff377f4d3ef
//     REST key : 83926bb5352d56d57fe5bf4ba9c2bfb2

function App() {
  const [datas, setDatas] = useState([]);

  const getCovidData = async () => {
    await axios
      .get(
        `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=et%2BHzIp9xULbk7BU%2F07ziyDd9rkLsS6ZqNDwPfF7v7a7XjnjWuyUqp9QZvicWD%2Fo1KZr3YmtyXkQAtnpqgqX9Q%3D%3D`
      )
      .then((response) => {
        const dataSet = response.data.response.body.items;
        setDatas(dataSet.item);
        console.log(response.data.response.header, dataSet.item);
      })
      .catch((response) => console.log(response));
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <Fragment>
      <MainHeader />
      <main className="main">
        <Input />
        <CovidMap />
      </main>
      <CovidInfo datas={datas} />
    </Fragment>
  );
}

export default App;
