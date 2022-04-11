import React, { useEffect } from "react";
import classes from "./CovidMap.module.css";
import Card from "../UI/Card";

const { kakao } = window;

const CovidMap = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(36.450701, 127.870667),
      level: 13,
    };

    var map = new kakao.maps.Map(container, options);

    map.setMaxLevel(13);
    map.setMinLevel(12);
    map.setDraggable(false);
    map.setZoomable(false);
    // 도대체 왜 라이브러리 적용이 안되는 거냐.......
    // var places = new kakao.map.services.Places();

    // var callback = function (result, status) {
    //   if (status === kakao.maps.services.Status.OK()) {
    //     console.log(result);
    //   }
    // };

    // places.keywordSearch("판교 치킨", callback);

    console.log("loading kakamap");
  }, []);

  return (
    <Card>
      <div className={classes.container}>
        <div id="map" style={{ width: "100%", height: "30rem" }}></div>
      </div>
    </Card>
  );
};

export default CovidMap;
