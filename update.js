  
var yesterdayRecovered = null;

$(document).ready(function () {
	initYesterdayRecovered().then(() => {
		fetchData();
	});
})

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const h3 = document.getElementById('coronas');
  
function fetchData() {
	fetch('https://corona.lmao.ninja/v2/countries/PHL')
  	.then((resp) => resp.json())
  	.then(data => {
  		const dateYouNeed = moment(data.updated).format("MMMM DD, YYYY dddd hh:mm A");
		let update = dateYouNeed;
		let cases = numberWithCommas(data.todayCases);
		let deaths = numberWithCommas(data.todayDeaths);
		let totalcases = numberWithCommas(data.cases);
		let totaldeaths = numberWithCommas(data.deaths);
		let recovered = numberWithCommas(data.recovered);
		let newrecover = numberWithCommas(data.recovered - yesterdayRecovered);

		document.getElementById("datetime").innerHTML = `${update}`;
		document.getElementById("coronas").innerHTML = "There are " + `${cases}` +
		 " confirmed positive COVID-19 cases, " + `${deaths}` + " deaths and " + `${newrecover}`
		 + " recovered.";
		document.getElementById("totalcases").innerHTML = `${totalcases}`;
		document.getElementById("totaldeaths").innerHTML = `${totaldeaths}`;
		document.getElementById("totalrecovered").innerHTML = `${recovered}`;		
	})
  .catch(function(error) {
    console.log(error);
  })
}


// Initialize yesterdayRecovered
async function initYesterdayRecovered(){

	return await fetch('https://corona.lmao.ninja/v2/countries/PHL?yesterday=true')
  	.then((resp) => resp.json())
  	.then(data => {
  		yesterdayRecovered = data.recovered;
	})
}