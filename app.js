

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search').value;

    // data load 
    const loadData = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data);
                    displayData(data.meals);
                }
                else {
                    document.getElementById('not-found').style.display = 'block';

                }
            })
            .catch(err => {
                console.error(err);
            })
    }
    loadData();
})


// show display data 
const displayData = (data) => {
    // console.log(data);
    const mealsContainer = document.getElementById('meals-container');
    data.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-4';
        mealDiv.innerHTML = `
            <div  id="" class="text-center single-meal m-3">
                <img  class="meal-img" src=${meal.strMealThumb} alt="meal" />
                <h3 class="my-3">${meal.strMeal}</h3>
                <button onclick="foodDetailsDataLoad(${meal.idMeal})" type="button" class="btn btn-primary">Details</button>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);

    })
}


// meals details
const foodDetailsDataLoad = (idMeal) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            singleFoodDetails(data.meals[0]);
        })
        .catch(err => {
            console.log(err);
        })
}


// single food details
const singleFoodDetails = (data) => {
    console.log(data);
    const footDetails = document.getElementById('food-details');
    const foodDiv = document.createElement('div');
    foodDiv.innerHTML = `
        <div class="row single-meal">
            <div  id="" class=" col-md-6">
                <img src=${data.strMealThumb} alt="" />
                <h3 class="my-3">${data.strMeal}</h3>
            </div>
            <div class="col-md-6">
                sds
            </div>
        </div>

    `;
    footDetails.appendChild(foodDiv);
}