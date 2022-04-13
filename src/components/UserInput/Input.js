import { useRef } from "react";
import classes from "./Input.module.css";

const Input = ({ onSubmitLocation }) => {
  const inputValue = useRef();

  return (
    <form className={classes.form} onSubmit={onSubmitLocation}>
      <input ref={inputValue} placeholder="거주 지역을 입력해주세요" />
      <button>다음</button>
    </form>
  );
};

export default Input;
