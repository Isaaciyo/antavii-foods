const apiKey = "f3bf557b60622ab1d9bc7e8919373e84";
const apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=";
const appId = "58b5c5f3";

let diets = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium']
for (let d of diets){
    $('#diet').append(`<option value='${d}'>${d}</option>`)
}

let cuisines = ['American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle East', 'Nordic', 'South American', 'South East Asia']
for (let c of cuisines){
    $('#cuisine').append(`<option value='${c}'>${c}</option>`)
}

let meals = ['Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime']
for (let m of meals){
    $('#meal').append(`<option value='${m}'>${m}</option>`)
}





// Navbar search box

$(".nav_search_box").on("focus", function() {

    $(document).on('keypress',function(e) {

        if(e.which == 13) {
            if ($('#nav_search_box').val() != ''){

                    $(".intro_img").attr('src', "Images/Pasta.jpg")
                    $(".intro_img").css('height', "400px")
                    $(".section2_header").html(`Test your skills with our collection of ${$("#nav_search_box").val()}!`)
                    $(".categories").css("display", 'none')
                    $(".latest_recipes_div").css("display", 'none')
                    $(".search_div").css("display", 'none')
                    $(".result_hero_name_div").css("display", 'block')
                    $(".filters").css("display", 'flex')
        
                    getRecipeWithoutFilter($("#nav_search_box").val())
        
                    $('#filter_search').on('click', function() {
        
                        getRecipeWithFilter($("#nav_search_box").val())
                    })
        
                    $('#clear_filter').on('click', function() {
        
                        getRecipeWithoutFilter($("#nav_search_box").val())
                        $('.cuisine').html() = `<option value="">Cuisine</option>` 
                    })

                } else {
                    alert('Empty search box!!')
                    }
            }
        
    });
    
});


// Home page search box

$(".search_box").on("focus", function() {

    $(document).on('keypress',function(e) {

        if(e.which == 13) {
            if ($('#search_box').val() != ''){

                    $(".intro_img").attr('src', "Images/Pasta.jpg")
                    $(".intro_img").css('height', "400px")
                    $(".section2_header").html(`Test your skills with our collection of ${$("#search_box").val()}!`)
                    $(".categories").css("display", 'none')
                    $(".latest_recipes_div").css("display", 'none')
                    $(".search_div").css("display", 'none')
                    $(".result_hero_name_div").css("display", 'block')
                    $(".filters").css("display", 'flex')
        
                    getRecipeWithoutFilter($("#search_box").val())
        
                    $('#filter_search').on('click', function() {
        
                        getRecipeWithFilter($("#search_box").val())
                    })
        
                    $('#clear_filter').on('click', function() {
        
                        getRecipeWithoutFilter($("#search_box").val())
                        $('.cuisine').html() = `<option value="">Cuisine</option>` 
                    })

                } else {
                    alert('Empty search box!!')
                    }
            }
        
    });
    
});


// Salads catagory box on home page

$(".salads").on("click", function()  {

    $(".intro_img").attr('src', "https://c.wallhere.com/photos/2a/5e/food_vegetables_tomatoes_salad_Pepper_Garlic_Paprika-1949021.jpg!d")
    $(".intro_img").css('height', "400px")
    $(".section2_header").html(`Test your skills with our collection of salads!`)
    $(".categories").css("display", 'none')
    $(".latest_recipes_div").css("display", 'none')

    // $(".search_div").css("display", 'none')
    $(".result_hero_name_div").css("display", 'none')
    // $(".result_hero_name").html("Salads")
    $(".search_div").css("display","none")

    getRecipeWithoutFilter('salads')
})


// Pasta catgeory box on home page

$(".pasta").on("click", function()  {

    $(".intro_img").attr('src', "Images/Pasta.jpg")
    $(".intro_img").css('height', "400px")
    $(".section2_header").html(`Test your skills with our collection of pasta!`)
    $(".categories").css("display", 'none')
    $(".latest_recipes_div").css("display", 'none')

    // $(".search_div").css("display", 'none')
    $(".result_hero_name_div").css("display", 'none')
    // $(".result_hero_name").html("Pasta")
    $(".search_div").css("display","none")

    getRecipeWithoutFilter('pasta')
})


// Pies category box on home page

$(".pies").on("click", function()  {

    $(".intro_img").attr('src', "https://wallpapers.com/images/featured/pie-40ycselx1ffw8fkf.jpg")
    $(".intro_img").css('height', "400px")
    $(".section2_header").html(`Test your skills with our collection of pies!`)
    $(".categories").css("display", 'none')
    $(".latest_recipes_div").css("display", 'none')

    // $(".search_div").css("display", 'none')
    $(".result_hero_name_div").css("display", 'none')
    // $(".result_hero_name").html("Pies")
    $(".search_div").css("display","none")

    getRecipeWithoutFilter('pies')
})


// Cakes category box on home page

$(".cakes").on("click", function()  {

    $(".intro_img").attr('src', "https://img.freepik.com/premium-photo/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday_116377-452.jpg")
    $(".intro_img").css('height', "400px")
    $(".section2_header").html(`Test your skills with our collection of cakes!`)
    $(".categories").css("display", 'none')
    $(".latest_recipes_div").css("display", 'none')

    // $(".search_div").css("display", 'none')
    $(".result_hero_name_div").css("display", 'none')
    // $(".result_hero_name").html("Cakes")
    $(".search_div").css("display","none")

    getRecipeWithoutFilter('cakes')
})


// Meat category box on home page

$(".meat").on("click", function()  {

    $(".intro_img").attr('src', "https://w0.peakpx.com/wallpaper/904/402/HD-wallpaper-juicy-ribeyes-tomato-brown-abstract-steak-ribeyes-cook-grilled-carrot-meat-juicy.jpg")
    $(".intro_img").css('height', "400px")
    $(".section2_header").html(`Test your skills with our collection of meat!`)
    $(".categories").css("display", 'none')
    $(".latest_recipes_div").css("display", 'none')

    // $(".search_div").css("display", 'none')
    $(".result_hero_name_div").css("display", 'none')
    // $(".result_hero_name").html("Meat")
    $(".search_div").css("display","none")

    getRecipeWithoutFilter('meat')
})

// Cajun category box on home page

$(".cajun").on("click", function()  {

    $(".intro_img").attr('src', "https://media.istockphoto.com/id/537314539/photo/spicy-homemade-cajun-jambalaya.jpg?s=612x612&w=0&k=20&c=pYEoXeQ5fJ4Mzqw9wUFxAEHOd7dBSw95lNV4mtf_uaY=")
    $(".intro_img").css('height', "400px")
    $(".section2_header").html(`Test your skills with our collection of Cajun!`)
    $(".categories").css("display", 'none')
    $(".latest_recipes_div").css("display", 'none')

    // $(".search_div").css("display", 'none')
    $(".result_hero_name_div").css("display", 'none')
    // $(".result_hero_name").html("Cajun")
    $(".search_div").css("display","none")

    getRecipeWithoutFilter('cajun')
})


// $(".dropdown_butn").on("click", function() {
//     $('.dropdown_div').css("display", 'none')

//     if ($('.dropdown_div').css("display", 'none') == true) {
//         $(".dropdown_butn").on("click", function() {
//             $('.dropdown_div').css("display", 'flex')
//         })
//     }
// })







// Below are the functions called above





// Getting recipes without using filters
// Basically for the home page

const getRecipeWithoutFilter = async (food) => {

    const response = await fetch(apiUrl + food + `&app_id=${appId}&app_key=${apiKey}`)
    const data = await response.json()
    console.log(data)
    const recipes = data.hits
    // console.log(recipes)

    let output = ''
    for(let each of recipes) {
        output += `
        <div class="recipe">
            <div class="recipe_image_div">
            <img class="recipe_image" src="${each.recipe.image}" alt="">
            <button class="text-white recipes_mini_button">RECIPES</buton>
            </div>
            <div class="recipe_brief_div">
                <b>${each.recipe.label}</b>
                <br>
                <p class="p-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit ab dicta.</p>
            </div>
        </div>`
    }
    $(".recipe_results").html(output)

}

// Getting results when filters are applied
// Note: Find out how to do it without havin`g to choose all filters

const getRecipeWithFilter = async (appetite) => {

    const diet = $('#diet').val()
    const cuisine = $('#cuisine').val()
    const meal = $('#meal').val()

    const response = await fetch(apiUrl + appetite + `&app_id=${appId}&app_key=${apiKey}&diet=${diet}&cuisineType=${cuisine}&mealType=${meal}`)
    const data = await response.json()
    console.log(data)
    const recipes = data.hits
    // console.log(recipes)

    let output = ''
    for(let each of recipes) {
        output += `
        <div class="recipe">
            <div class="recipe_image_div">
            <img class="recipe_image" src="${each.recipe.image}" alt="">
            <button class="text-white recipes_mini_button">RECIPES</buton>
            </div>
            <div class="recipe_brief_div">
                <b>${each.recipe.label}</b>
                <br>
                <p class="p-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit ab dicta.</p>
            </div>
        </div>`
    }

    $(".recipe_results").html(output)

}

// category_list = document.getElementsByClassName("category")

// for (var i = 0; i < category_list.length; i++) {
//     if (category_list[i].className == 'pasta') {

//         category_list[i].on("click", function() {
//             getRecipeWithoutFilter('pasta')

//         })
//     }
// }


// To display latest recipes in the home page

const getLatestResults = async () => {

    const response = await fetch(apiUrl + 'latest' + `&app_id=${appId}&app_key=${apiKey}`)
    const data = await response.json()
    console.log(data)
    const recipes = data.hits
    // console.log(recipes)

    let output = ''
    let tile = 1
    for(let each of recipes) {
        if (tile <= 4) {
            output += `
            <div class="recipe">
                <div class="latest_recipe_image_div">
                <img class="latest_recipe_image" src="${each.recipe.image}" alt="">
                <button class="text-white recipes_mini_button">RECIPES</buton>
                </div>
                <div class="recipe_brief_div">
                    <b>${each.recipe.label}</b>
                    <br>
                    <p class="p-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit ab dicta.</p>
                </div>
            </div>`
            tile += 1
        } else {
            break
        }
    }
    $(".latest_recipes_div").html(output)

}

getLatestResults()

