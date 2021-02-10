const shapeProduct = (raw, reviews = []) => {
  let avgReview = 0;
  reviews.forEach((review) => {
    avgReview += review.rating;
  });
  avgReview = avgReview === 0 ? 0 : (avgReview /= reviews.length).toFixed(2);
  return {
    _id: raw.productid,
    productName: raw.productname,
    imgUrl: raw.imgurl,
    rating: avgReview,
    ratingCount: reviews.length,
    fit: raw.fit,
    activities: raw.activities,
    reviews,
  };
};

const shapeReview = (rawReview) => {
  const properties = `${rawReview.casualwear ? 'Casual-Wear,' : ''}${rawReview.climbing ? 'Climbing,' : ''}${rawReview.yoga ? 'Yoga,' : ''}${rawReview.fishing ? 'Fishing,' : ''}${rawReview.hiking ? 'Hiking,' : ''}${rawReview.biking ? 'Biking,' : ''}${rawReview.snowwear ? 'Snow-Wear,' : ''}${rawReview.surfing ? 'Surfing,' : ''}${rawReview.recommended ? 'recommended,' : ''}`.split(',');
  return {
    _id: rawReview.reviewid,
    rating: rawReview.rating,
    recommended: rawReview.recommended,
    title: rawReview.title,
    author: rawReview.author,
    body: rawReview.body,
    productInfo: {
      size: rawReview.size,
      fit: rawReview.fit,
      height: rawReview.height,
    },
    properties: properties.slice(0, properties.length - 1),
    createdAt: rawReview.createdat,
  };
};

module.exports = {
  shapeProduct,
  shapeReview,
};
