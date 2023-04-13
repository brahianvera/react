import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick(e) {
    setIndex(index + 1);
  }

  function handleBackClick(e) {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  let disabledNextButton = index === 10 ? "disabled" : "";
  let disabledBackButton = index === 0 ? "disabled" : "";
  return (
    <>
      <button onClick={handleBackClick} disabled={disabledBackButton}>
        Back
      </button>
      <button onClick={handleNextClick} disabled={disabledNextButton}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
