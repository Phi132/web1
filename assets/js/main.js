function clickHeart(param) {
    var click = document.querySelector("#btn-heart");
    if (click.classList.contains("far")) {
        console.log("chua like");
        click.classList.remove("far");
        click.classList.add("fas");
    }

    else {
        console.log("da like");
        click.classList.remove("fas");
        click.classList.add("far");
        

    }


    //     click.setAttribute("class", "fas fa-heart");
    // click.style.color = "red";

}