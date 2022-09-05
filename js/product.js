//Request data from https://fakestoreapi.com/products
fetch('https://fakestoreapi.com/products').then((data)=>{
    //convert json data to object data
    return data.json();
    //Store data from fakestoreapi's response 
}).then((completedata)=>{
    let data1="";
    let clothTitle="";
    completedata.map((values)=>{
        clothTitle = `${values.title}`;
        //replace space in product's name with hyphens
        clothTitle = clothTitle.replaceAll(" ","-");
        clothTitle = clothTitle.replaceAll("/","-");
        //Show product's title, image, and price on products.html
        data1 +=`<a id=${values.id} onclick="getId(this)" href="${clothTitle}-${values.id}.html?${values.id}"><div class="card"><img src=${values.image} 
        alt=""><p style="color: black;"class="product-name">${values.title}</p>
        <p class="product-category">${values.category}</p>
        <p class="product-price">$${values.price}</p></div></a>`
    });
    document.getElementById("products").innerHTML=data1;
    //If there is an error, console log will show error message
}).catch((err)=>{
    console.log(err);
})
// function getId(linked){
//     alert(linked.id);
// }