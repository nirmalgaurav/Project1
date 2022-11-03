const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
var upd;

form.addEventListener('submit' , (e)=> {

  e.preventDefault();
  if(upd){
    clearTimeout(upd);
  }

  const cType = form.elements.coinType.value;

  console.log(cType);
  fetchPrice(cType);

})

const fetchPrice = async(cType) =>{

  const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${cType}?currency=INR`);
  console.log(r);
  const price =  r.data.coin.price;
  const volume = r.data.coin.volume;
  const change1hour = r.data.coin.priceChange1h;
  const rank = r.data.coin.rank;
  res.innerHTML = `<tr class="topRow">
    <th>
    <b>Properties</b>
    </th>
    <th><b>Values</b></th>
  </tr>

  <tr>
    <td>
      Rank
    </td>
    <td>${rank}</td>
  </tr>

  <tr>
    <td>
      Price
    </td>
    <td>${price}</td>
  </tr>

  <tr>
    <td>
      volume
    </td>
    <td>${volume}</td>
  </tr>

  <tr>
    <td>
      Price Change in 1 Hour
    </td>
    <td>${change1hour}</td>
  </tr>
`
upd = setTimeout(()=>fetchPrice(cType),10000);


}
