//Select all
const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //finds all checkbox elements //const creates a variable to hold them
const articles = document.querySelectorAll('article'); // finds all article elements //checkboxes and article are now lists of elements to work with

// create the filter function
function filterArticles(){
    const checkedValues = Array.from(checkboxes) //turns the list of checkboxes into real array so we can use array methode
    .filter(cb => cb.checked) // keeps only the checkboxes that are checked
    .map(cb => cb.value); // turns checkboxes into their values 

    //show/hide articles
    articles.forEach(article => {
        const categories = article.dataset.category.split(' ');
        if (checkedValues.length === 0 || categories.some(cat => checkedValues.includes(cat))){
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
}
//articles.forEach(article => { ... }) loops over every article on the page.
//article.dataset.category gets the data-category value of the article.
//.split(' ') turns it into an array of categories (so "cat1 cat2" becomes ["cat1", "cat2"]).
//The if statement decides whether to show or hide the article:
//checkedValues.length === 0 → no checkboxes are checked → show all articles.
//categories.some(cat => checkedValues.includes(cat)) → at least one category of the article is checked → show it.
//If neither is true → hide the article: article.style.display = 'none';
//article.style.display = '' resets it to normal (visible).

//run the filter when checkboxes change
checkboxes.forEach(cb => cb.addEventListener('change', filterArticles));
//forEach loops through every checkbox.
//cb.addEventListener('change', filterArticles) means: whenever this checkbox is clicked/changed, run the filterArticles function.
//This makes the filtering happen automatically when you check/uncheck boxes.
//This makes the filtering happen automatically when you check/uncheck boxes.

//✅ How it works together
//User checks a checkbox.
//The change event triggers filterArticles().
//filterArticles() looks at all checked boxes.
//It loops through every article and shows only the ones that match.










//burger menu
function showMenuMobile() {
    
  const menuItems = document.querySelectorAll('.menu-mobile ul li:nth-last-child(-n+3)');

  menuItems.forEach(item => {
    if (item.style.display === 'block') {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
}