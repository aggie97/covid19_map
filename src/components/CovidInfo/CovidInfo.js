import InfoItem from "./InfoItem";
import classes from "./CovidInfo.module.css";
const CovidInfo = ({ datas }) => {
  console.log(datas);
  return (
    <div className={classes.information}>
      <h1>Covid Information</h1>
      <ul>
        {datas.map((data) => {
          return (
            <InfoItem
              stdDay={data.stdDay}
              deathCnt={data.deathCnt}
              location={data.gubun}
              defCnt={data.defCnt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CovidInfo;
