import "./App.css";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import MainHeader from "./components/MainHeader/MainHeader";
import CovidInfo from "./components/CovidInfo/CovidInfo";
import Input from "./components/UserInput/Input";

// json 타입 체크
const isJsonString = (str) => {
  try {
    let json = JSON.parse(str);
    return typeof json === "object";
  } catch (e) {
    return false;
  }
};

function App() {
  const [datas, setDatas] = useState([]);
  const getAPI = async () => {
    axios
      .get(
        `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=et%2BHzIp9xULbk7BU%2F07ziyDd9rkLsS6ZqNDwPfF7v7a7XjnjWuyUqp9QZvicWD%2Fo1KZr3YmtyXkQAtnpqgqX9Q%3D%3D`
      )
      .then((response) => {
        const dataSet = response.data.response.body.items;
        console.log(isJsonString(dataSet.item));
        console.log(dataSet.item);
        setDatas(dataSet.item);
      });
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <Fragment>
      <MainHeader />
      <main className="main">
        <Input />
      </main>
      <CovidInfo datas={datas} />
    </Fragment>
  );
}

export default App;
