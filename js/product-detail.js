//Get the query string into variables
var queryString = location.search.substring(1);
// var a = queryString.split("|");
// var value1 = a[0];

//Request data from https://fakestoreapi.com/products
fetch(`https://fakestoreapi.com/products/${queryString}`).then((data)=>{
    //convert json data to object data
    return data.json();
    //Store data from fakestoreapi's response 
}).then((values)=>{
    document.title = `${values.title}`;
    let data1="";
    let clothTitle="";
        clothTitle = `${values.title}`;
        //replace space in product's name with hyphens
        clothTitle = clothTitle.replaceAll(" ","-");
        //Show product's title, image, and price on products.html
        data1 =
        `
        <header class="product-header">
            <div class="detail-header-1">
                <img class="left-arrow" src="../images/left-arrow.png" alt="">
            </div>
            <div class="detail-header-2">
                <h1 class="product-title">Product</h1>
            </div>
            <div class="detail-header-3">
                <img src="../images/plus.png" alt="">
            </div>
        </header>
        <div class="content">
            <img src=${values.image} alt="">
        </div>
        <div class="product-info">
            <p style="margin-bottom: 2px;">${values.title}</p>
            <p>$${values.price}</p>
        </div>
        `;
    document.getElementById("product-detail").innerHTML=data1;
    //If there is an error, console log will show error message
}).catch((err)=>{
    console.log(err);
})