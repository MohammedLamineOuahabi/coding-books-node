//console.log(Books);
function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '&hellip;' : str;
}

function productTemplate(product) {
  let r =
    (product.rating >= 1
      ? '<span class="fa fa-star checked"></span>'
      : product.rating >= 0.5
      ? '<span class="fa fa-star-half-alt checked"></span>'
      : '<span class="fa fa-star"></span>') +
    (product.rating >= 2
      ? '<span class="fa fa-star checked"></span>'
      : product.rating >= 1.5
      ? '<span class="fa fa-star-half-alt checked"></span>'
      : '<span class="fa fa-star"></span>') +
    (product.rating >= 3
      ? '<span class="fa fa-star checked"></span>'
      : product.rating >= 2.5
      ? '<span class="fa fa-star-half-alt checked"></span>'
      : '<span class="fa fa-star"></span>') +
    (product.rating >= 4
      ? '<span class="fa fa-star checked"></span>'
      : product.rating >= 3.5
      ? '<span class="fa fa-star-half-alt checked"></span>'
      : '<span class="fa fa-star"></span>') +
    (product.rating === 5
      ? '<span class="fa fa-star checked"></span>'
      : product.rating >= 4.5
      ? '<span class="fa fa-star-half-alt checked"></span>'
      : '<span class="fa fa-star"></span>');

  return `
     
  <div class="product-card">
    <div class="product-image">
     <a href="${product.affiliate_link}"> <img src="${product.img_link}"></a>
    </div>
    <div class="product-info">
      <p class="author">${truncate(product.author, 15)}</p>
        <p class="price">$${product.price}</p>  
        <p class="rating">${r}</p>   
     </div>
    </div>  
      
`;
}
const insertProductFilter = () => {
  document.getElementById('product-filter').innerHTML = `
  
<h1> Books found : <span> ${list.length}</span></h1>

<div class="sort">

  <!-- 
  <div class="collection-sort">
    <label>Filter by</label>
    <select>
    <option value="/">All Books</option>
    <option value="/">Price</option>
    <option value="/">Rate</option>
    </select>
  </div>-->

  <div class="collection-sort">
    <label>Sort by</label>
    <select>
    <option value="/">All Books</option>
    <!--
    <option value="/">Price</option>
    <option value="/">Rate</option>
    -->
    </select>
  </div>

</div> 

`;
};

function insertProducts(list) {
  let s = '';
  for (let i = 0; i < list.length; i++) s = s + `${productTemplate(list[i])}`;

  document.getElementById('books').innerHTML = s;
}
// filter only height rating books
var l = Books.filter(b => parseFloat(b.rating).toFixed(2) >= 4.5);
insertProducts(l);

const searchInput = document.getElementById('searchInput');

//filter products

searchInput.addEventListener('input', function (evt) {
  let result = Books.filter(
    b =>
      b.title.toLowerCase().includes(this.value.toLowerCase()) &&
      parseFloat(b.rating).toFixed(2) >= 4
  );
  insertProducts(result);
  // if (l.length > 0) {
  //   svg.classList.add("hide");
  // }
});
