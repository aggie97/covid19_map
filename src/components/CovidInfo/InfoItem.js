const InfoItem = ({ deathCnt, defCnt, stdDay, location }) => {
  return (
    <li>
      지역 : {location} / 확진자 수 : {defCnt}명 / 사망자 수 : {deathCnt}명 /
      기준 날짜 : {stdDay}
    </li>
  );
};

export default InfoItem;
