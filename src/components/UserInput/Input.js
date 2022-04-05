import classes from "./Input.module.css";

const Input = () => {
  return (
    <form className={classes.form}>
      <input placeholder="거주 지역을 입력해주세요" />
      <button>다음</button>
    </form>
  );
};

export default Input;
