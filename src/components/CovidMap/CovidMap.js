import React, { useEffect, useState } from "react";
import classes from "./CovidMap.module.css";
import Card from "../UI/Card";

const { kakao } = window;

const CovidMap = ({ location }) => {
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
    var places = new kakao.maps.services.Places();

    places.keywordSearch(location, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          // displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    console.log("loading kakamap");
  }, [location]);

  return (
    <Card>
      <div className={classes.container}>
        <div id="map" style={{ width: "100%", height: "30rem" }}></div>
      </div>
    </Card>
  );
};

export default CovidMap;
