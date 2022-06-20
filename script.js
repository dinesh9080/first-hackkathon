async function completed() {
    try {
      let res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
      let res1 = await res.json();
      console.log(res1);
      for (var i = 0; i < 99; i++) {
        work(
          res1[i].brand,
          res1[i].name,
          res1[i].price,
          res1[i].image_link,
          res1[i].product_link,
          res1[i].description
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
 

  let total = create("div", "box");
  let divcontainer = create("div", "container");
  let divrow = create("div", "row");
  let title = create("h3", "title");
  title.innerHTML = "Implement the Makeup API using async/await with fetch.";
  
  let title1 = create("h3", "title1");
  title1.innerHTML =
    "Display the brand, name, price, imagelink, productlink, description.";
  
  let Mtdiv = create("div", "MT");
  
  let searchbar = create("input", "searchbar");
  searchbar.setAttribute("placeholder", "Search by brand");
  searchbar.setAttribute("id", "Searchtext");
  
  let searchbutton = create("button", "button");
  searchbutton.innerHTML = "SEARCH";
  searchbutton.addEventListener("click", (fun) => {
    fun.preventDefault();
    redirect();
  });

  
  divcontainer.append(title, title1, searchbar, searchbutton, Mtdiv, divrow);
  total.append(divcontainer);
  document.body.append(total);

  completed();
  
  function create(tag,class1){
let back=document.createElement(tag);
back.setAttribute("class",class1)
return back;
  }

  function work(brand1,name1,price1,image_link1,product_link1,description1){

    let rest = create("div","col-lg-6");
    rest.setAttribute("id","col1");
    let brand2 = create("h5","h5brand");
    brand2.innerHTML=`Brand :<span>${brand1}<span>`;

    let hr = create("hr","line1");

    let name2 = create("h5","h5brand");
    name2.innerHTML = `Name :<span>${name1}<span>`;

    let hr1 = create("hr","line1");

    let price2 = create("h5","h5brand");
    price2.innerHTML = `Price :<span>${price1}<span>`;

    let hr2 = create("hr","line1");

    let image_link2 = create("h5","h5brand");
    image_link2.innerHTML = `Image_link :<span>${image_link1}<span>`; 

    let hr3 = create("hr","line1");

    let product_link2 = create("h5","h5brand");
    product_link2.innerHTML = `Product_link :<span>${product_link1}<span>`; 

    
    let hr4 = create("hr","line1");

    let description2 = create("h5","h5brand");
    description2.innerHTML = ` Description :<span>${ description1}<span>`;

    let hr5 = create("hr","line1");



    rest.append(brand2,hr,name2 ,hr1,price2,hr2,image_link2,hr3,product_link2,hr4,description2,hr5);
    divrow.append(rest)

}

async function redirect() {
    let direct = document.getElementById("Searchtext").value;
    let re = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${direct}`
    );
    let re1 = await re.json();
    let ansdiv = create("div", "ans");
    let h6 = create("h6", "ans1");
        h6.innerHTML = `Brand: ${re1[0].brand}
        Name : ${re1[0].name}
        <br>
        Price : ${re1[0].price}
    <br>
        image_link : ${re1[0].image_link}
    <br>
    product_link : ${re1[0].product_link}
    <br>
    description: ${re1[0].description}
          
      `;

    ansdiv.append(h6);
    Mtdiv.append(ansdiv);
  }
