var div = document.createElement("div");
div.setAttribute("class", "container");
var h2 = document.createElement("h2");
h2.innerHTML = "Search for food-recipe";

var form = document.createElement("div");
form.setAttribute("class", "form-group");
var label = document.createElement("label");
label.innerHTML = "Enter a recipe name";
label.setAttribute("class", "label1")
var input = document.createElement("input");
input.type = "text";
input.setAttribute("class", "form-control");
input.setAttribute("id", "text");
var button = document.createElement("button");
button.type = "submit";
button.classList.add("btn", "btn-warning");
button.addEventListener("click", myfun);
button.innerHTML = "Search";

form.append(label, input)
div.append(h2, form, button);
document.body.append(div);
var div1 = document.createElement("div");
div1.setAttribute("class", "container");
var div2 = document.createElement("div");
div2.setAttribute("class", "row");

function myfun() {
    var val = document.getElementById("text").value;
    let url = (`https://api.edamam.com/search?q=${val}&app_id=1c66542b&app_key=1374196a62b5e878a86dad0e667ec8f1`);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.hits.forEach((obj) => {

                var div3 = document.createElement("div");
                div3.setAttribute("class", "col-3");
                var carddeck = document.createElement("div");
                carddeck.setAttribute("class", "card-deck");
                var card = document.createElement("div");
                card.setAttribute("class", "card");
                card.setAttribute("style", "width:18rem");
                var img = document.createElement("img");
                img.setAttribute("src", obj.recipe.image);
                var cardbody = document.createElement("div");
                cardbody.setAttribute("class", "card-body");
                var cardtitle = document.createElement("h5");
                cardtitle.setAttribute("class", "card-title");
                cardtitle.innerHTML = `<b> Health Labels:</b>${obj.recipe.label}`;
                var cardtext = document.createElement("p");
                cardtext.setAttribute("class", "card-text");
                cardtext.innerHTML = `<b> Health Labels:</b>${obj.recipe.healthLabels}`;
                var cardtext1 = document.createElement("p");
                cardtext1.setAttribute("class", "card-text");
                cardtext1.innerHTML = `<b> Ingredient Lines:</b>${obj.recipe.ingredientLines}`;
                var cardtext2 = document.createElement("p");
                cardtext2.setAttribute("class", "card-text");
                cardtext2.innerHTML = `<b> calories:</b>${obj.recipe.calories}`;

                cardbody.append(cardtitle, cardtext, cardtext1, cardtext2);
                card.append(img, cardbody);
                carddeck.append(card);
                div3.append(carddeck);
                div2.append(div3);
                div1.append(div2);
                document.body.append(div1);
            });
        });
}