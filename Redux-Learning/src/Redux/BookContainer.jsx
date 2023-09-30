import { useDispatch, useSelector } from "react-redux";
import { buy_book, sell_book } from "./Actions.jsx";

const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1> BookConatiner</h1>
        <h2>No Of Books - {noOfBooks} </h2>
        <button onClick={() => {dispatch(buy_book())}}>Buy Book</button>
        <button onClick={() => {dispatch(sell_book())}}>Sell Book</button>
      </div>
    </>
  );
};

export default BookContainer;
