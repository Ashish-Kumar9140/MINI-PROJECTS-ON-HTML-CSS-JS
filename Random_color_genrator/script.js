let btn= document.querySelector("button");

btn.addEventListener("click" , function(){
    let h1 = document.querySelector("h1");
    let randomColor = get_ran_col();
    h1.innerText = randomColor;

    let div = document.getElementById("mainbox");
    div.style.backgroundColor = randomColor;

})


function get_ran_col(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    let color = `RGB( ${red} , ${green}, ${blue})`;
    return color;

}