let pizzaArray = ["Pepperoni", "Cheese", "Meat Lovers", "Veggie", "Hawaian"];
populateMenus();

function populateMenus() {
    for (i in pizzaArray) {
        let pizzaDropDown = document.getElementById("pizzas")
        let pizza = pizzaArray[i]
        let option = document.createElement("option");

        option.innerHTML = pizza;
        option.value = pizza;

        pizzaDropDown.appendChild(option);

    }

    for (let i = 0; i < 10; i++) {
        let amountDropDown = document.getElementById("pizzaAmount");
        let num = i + 1;
        let numOption = document.createElement("option");

        numOption.innerHTML = `${num}`;
        numOption.value = num;

        console.log(num);
        amountDropDown.appendChild(numOption);
    }
}

document.getElementById("formButton").addEventListener("click", () => {
    orderInfo.clear();
    //get the form
    let form = document.getElementById("form");

    //first name
    let firstName = form.fname.value;
    console.log(firstName);
    let lastName = form.lname.value;
    console.log(lastName);
    let phoneNumber = form.phoneNum.value;
    console.log(phoneNumber);
    let pizzaType = form.pizzas.value;
    console.log(pizzaType);
    let pizzaAmount = form.pizzaAmount.value;
    console.log(pizzaAmount);
})

