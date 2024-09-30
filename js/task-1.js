const categoriesList = document.querySelector("#categories");

// Count numbers of categories
const categoriesCount = categoriesList.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesCount}`);

// Loop through each category
categoriesList.querySelectorAll(".item").forEach((category) => {
  // Find and log the category title
  const categoryTitle = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);

  // Count and log the number of items in the category
  const itemsCount = category.querySelectorAll("li").length;
  console.log(`Number of items: ${itemsCount}`);
});
