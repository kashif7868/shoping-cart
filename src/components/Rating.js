import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  // Round the rating to the nearest integer
  const roundedRating = Math.round(rating);

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick && onClick(i + 1)} style={style}>
          {roundedRating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
