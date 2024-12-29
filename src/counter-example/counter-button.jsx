import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../Store/Slices/counter";

function CounterButton() {

    const dispatch = useDispatch();

  function handleClick() {
    dispatch(handleIncreaseCountAction({
        id:1,
        name:"Nishat"
    }));
  }

 
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
    >
      Increase Count
    </button>
  );
}

export default CounterButton;
