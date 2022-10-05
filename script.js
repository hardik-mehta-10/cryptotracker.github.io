const form = document.querySelector("#searchForm");
const res = document.querySelector("#tableResult");
const clear = document.querySelector("#reset")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //we're stopping the default work

  const ctype = form.elements.coinType.value;
  fetchPrice(ctype);
});

//async in only used so that we can use the await function
const fetchPrice = async (ctype) => {
  const r =
    //coinstats api
    await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD
    `);

  console.log(r);

  

  // $ -> to use any js variable, we use back tick, and jaha variable use karna hai add ${variable name}
  //axios is used for service hit (jis se api data de de hume)
  //await is used -> jab tak response na aa jaaye tab tak wait kare

  const name = r.data.coin.name;
  const price = r.data.coin.price;
  const volume = r.data.coin.volume;
  const change = r.data.coin.priceChange1d;
  const marketCap = r.data.coin.marketCap;

  res.innerHTML=`<tr style="background-color:skyblue; color:navy; font-weight:bolder; text-align:center;">
  <td>Property</td>
  <td>Value</td>
  </tr>
  <tr style="background-color:white;">
  <td style="color:green; font-weight:500;">Name</td>
  <td>${name}</td>
  </tr>
  <tr style="background-color:white";>
  <td style="color:green; font-weight:500;">Price</td>
  <td>${price}</td>
  </tr>
  <tr style="background-color:white";>
  <td style="color:green; font-weight:500;">Volume</td>
  <td>${volume}</td>
  </tr>
  <tr style="background-color:white";>
  <td style="color:green; font-weight:500;">Change</td>
  <td>${change}</td>
  </tr>
  <tr style="background-color:white";>
  <td style="color:green; font-weight:500 ">Market Cap</td>
  <td>${marketCap}</td>
  </tr>`

  clear.addEventListener('click', function(){
    res.innerHTML=" ";
  })
};
