let reviews = [];

for (let index = 0; index < 10; index++) {
  reviews.push({
    key: Math.random()
      .toString(36)
      .substr(2, 9),
    review: `This is an auto generation of 10 sample reviews, each with its own unique id. This is item no: ${index +
      1}.`,
    image: require("../assets/salmon-dish-food-meal-46239.jpeg")
  });
}

module.exports = reviews;
