$(document).ready(function () {
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
  const headers = new Headers({'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'});
  fetch('https://api.smartable.ai/coronavirus/stats/PH', {headers: headers})
  	.then((resp) => resp.json())
  	.then(data => {
		let update = data.updatedDateTime;
		let cases = numberWithCommas(data.stats.newlyConfirmedCases);
		let deaths = numberWithCommas(data.stats.newDeaths);
		let totalcases = numberWithCommas(data.stats.totalConfirmedCases);
		let totaldeaths = numberWithCommas(data.stats.totalDeaths);
		let recovered = numberWithCommas(data.stats.totalRecoveredCases);
		let newrecover = numberWithCommas(data.stats.newlyRecoveredCases);

		document.getElementById("datetime").innerHTML = `${update}`;
		document.getElementById("coronas").innerHTML = "There are " + `${cases}` +
		 " confirmed positive to COVID-19, " + `${deaths}` + " deaths and " + `${newrecover}`
		 + " recovered.";
		document.getElementById("totalcases").innerHTML = `${totalcases}`;
		document.getElementById("totaldeaths").innerHTML = `${totaldeaths}`;
		document.getElementById("totalrecovered").innerHTML = `${recovered}`;		
	})
  .catch(function(error) {
    console.log(error);
  })
})