
export const getRating = (rating) => {
    const totaRating = 5;
    const star = [];
    const unRating = totaRating - rating;
    for (let i = 0; i < rating; i++) {
      star.push("MdStar");
    }
    if (unRating > 0) {
      for (let i = 0; i < unRating; i++) {
        star.push("MdStarBorder");
      }
    }
    return star;
  };