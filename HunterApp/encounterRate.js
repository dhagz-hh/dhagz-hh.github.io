    function calculate() {
		// Checkbox if checked
		var gmChecked = document.getElementById("GM").checked;
		var honeyChecked = document.getElementById("Honey").checked;
		var hcChecked = document.getElementById("HCharm").checked;
		var rcChecked = document.getElementById("RCharm").checked;
		var sChecked = document.getElementById("Shiny").checked;
		var eChecked = document.getElementById("Event").checked;

		// Value
        var encounterInput = parseInt(document.getElementById("encounterInput").value);

        // Encounter Rates
	    var LEGENDARY = 0.999992;
		var SHINY = 0.999999999;
		var SGM = 0.9999999985;
		var SH = 0.9999999988;
		var SHGM = 0.9999999979;
		var SHC = 0.9999999988;
		var SRC = 0.9999999989;
		var SGMHC = 0.9999999978;
		var SGMRC = 0.9999999984;
		var SHHC = 0.9999999985;
		var SHRC = 0.9999999985;
		var SHGMRC = 0.999999998;
		var SHGMHC = 0.9999999978;
	    var EVENT = 0.99999;		
	    var GM = 0.999988;
	    var HONEY = 0.99999;
		var RCHARM = 0.9999912;
		var HCHARM = 0.9999903999;
		var RCHARMGM = 0.9999867999;
		var RCHARMHONEY = 0.999989;
		var EVENTGM = 0.9999849998;
		var EVENTGMHCHARM = 0.9999819998;
		var EVENTGMRCHARM = 0.9999835;
		var EVENTHONEYSHINY = 0.9999999973;
		var EVENTGMSHINY = 0.9999999982;
		var EVENTHONEY = 0.9999875;
		var EVENTHCHARM = 0.999988;
		var EVENTRCHARM = 0.999989;
		var EVENTGMHONEY = 0.9999812499;
		var EVENTHONEYHCHARM = 0.9999849998;
		var EVENTHONEYRCHARM = 0.9999862499;
		var EVENTGMHONEYHCHARM = 0.9999774998;
		var EVENTGMHONEYRCHARM = 0.9999793746;
		var EVENTGMHONEYSHINY = 0.9999999978;
		var EGHHCS = 0.9999999973;
		var EGHRCS = 0.9999999975;
		var EGHCS = 0.9999999974;
	    var GMHONEY = 0.9999849998;
		var EIHONEY = 0.999988;
		var HCGM = 0.9999855999;
		var HCHONEY = 0.9999879998;
		var GMHONEI = 0.9999819998;
		var GMHONRCHARM = 0.9999835;
		var GMHONHC = 0.9999819998;

		// HONEY
		if (!gmChecked && honeyChecked && !hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(HONEY, encounterInput))
			
		// EVENT
		} else if (!gmChecked && !honeyChecked && !hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENT, encounterInput))
			
		// SHINY
		} else if (!gmChecked && !honeyChecked && !hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHINY, encounterInput))

		// GM
		} else if (gmChecked && !honeyChecked && !hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(GM, encounterInput))

		// HCHARM
		} else if (!gmChecked && !honeyChecked && hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(HCHARM, encounterInput))

		// RCHARM
		} else if (!gmChecked && !honeyChecked && !hcChecked && rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(RCHARM, encounterInput))

		// SHINY + HCHARM 
		} else if (!gmChecked && !honeyChecked && hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHC, encounterInput))
			
		// SHINY + RCHARM 
		} else if (!gmChecked && !honeyChecked && !hcChecked && rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SRC, encounterInput))

		// GM + SHINY
		} else if (gmChecked && !honeyChecked && !hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SGM, encounterInput))

		// GM + RCHARM
		} else if (gmChecked && !honeyChecked && !hcChecked && rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(RCHARMGM, encounterInput))

		// GM + HONEY
		} else if (gmChecked && honeyChecked && !hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(GMHONEY, encounterInput))

		// EVENT + GM
		} else if (gmChecked && !honeyChecked && !hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGM, encounterInput))

		// EVENT + HONEY
		} else if (!gmChecked && honeyChecked && !hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTHONEY, encounterInput))

		// EVENT + HCHARM
		} else if (!gmChecked && !honeyChecked && hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTHCHARM, encounterInput))

		// EVENT + RCHARM
		} else if (!gmChecked && !honeyChecked && !hcChecked && rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTRCHARM, encounterInput))

		// EVENT + SHINY
		} else if (!gmChecked && !honeyChecked && !hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(SHGM, encounterInput))

		// EVENT + GM + HONEY
		} else if (gmChecked && honeyChecked && !hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMHONEY, encounterInput))
			
		// EVENT + GM + SHINY
		} else if (gmChecked && !honeyChecked && !hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMSHINY, encounterInput))			
		
		// EVENT + HONEY + SHINY
		} else if (!gmChecked && honeyChecked && !hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTHONEYSHINY, encounterInput))		
		
		// GM + HCHARM
		} else if (gmChecked && !honeyChecked && hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(HCGM, encounterInput))

		// HONEY + SHINY
		} else if (!gmChecked && honeyChecked && !hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SH, encounterInput))
			
		// HONEY + RCHARM
		} else if (!gmChecked && honeyChecked && !hcChecked && rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(RCHARMHONEY, encounterInput))

		// HONEY + HCHARM
		} else if (!gmChecked && honeyChecked && hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(HCHONEY, encounterInput))

		// INVALID  RCHARM + HCHARM
		} else if (!gmChecked && !honeyChecked && hcChecked && rcChecked && !sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// INVALID  RCHARM + HCHARM + SHINY
		} else if (!gmChecked && !honeyChecked && hcChecked && rcChecked && sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";
		
		// INVALID  RCHARM + HCHARM + HONEY
		} else if (!gmChecked && honeyChecked && hcChecked && rcChecked && !sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";
			
		// INVALID  RCHARM + HCHARM + GM
		} else if (gmChecked && !honeyChecked && hcChecked && rcChecked && !sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";
			
		// INVALID HONEY + GM + HCHARM + RCHARM
		} else if (gmChecked && honeyChecked && hcChecked && rcChecked && !sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";
			
		// INVALID SHINY + GM + HCHARM + RCHARM
		} else if (gmChecked && !honeyChecked && hcChecked && rcChecked && sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// INVALID SHINY + HONEY + HCHARM + RCHARM
		} else if (!gmChecked && honeyChecked && hcChecked && rcChecked && sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// INVALID SHINY + HONEY + HCHARM + RCHARM + GM
		} else if (gmChecked && honeyChecked && hcChecked && rcChecked && sChecked && !eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// INVALID EVENT + GM + HONEY + HCHARM + RCHARM
		} else if (gmChecked && honeyChecked && hcChecked && rcChecked && !sChecked && eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// INVALID EVENT + GM + HONEY + HCHARM + RCHARM + SHINY
		} else if (gmChecked && honeyChecked && hcChecked && rcChecked && sChecked && eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// HCHARM + GM + SHINY
		} else if (gmChecked && !honeyChecked && hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SGMHC, encounterInput))
			
		// RCHARM + GM + SHINY
		} else if (gmChecked && !honeyChecked && !hcChecked && rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SGMRC, encounterInput))

		// HONEY + GM + SHINY
		} else if (gmChecked && honeyChecked && !hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHGM, encounterInput))
			
		// SHINY + HONEY + HCHARM
		} else if (!gmChecked && honeyChecked && hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHHC, encounterInput))
			
		// SHINY + HONEY + RCHARM
		} else if (!gmChecked && honeyChecked && !hcChecked && rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHRC, encounterInput))
			
		// HONEY + GM + RCHARM
		} else if (gmChecked && honeyChecked && !hcChecked && rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(GMHONRCHARM, encounterInput))

		// HONEY + GM + HCHARM
		} else if (gmChecked && honeyChecked && hcChecked && !rcChecked && !sChecked && !eChecked) {
			return returnOutput(calculateRate(GMHONHC, encounterInput))
			
		// SHINY + HONEY + GM + RCHARM
		} else if (gmChecked && honeyChecked && !hcChecked && rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHGMRC, encounterInput))

		// SHINY + HONEY + GM + HCHARM
		} else if (gmChecked && honeyChecked && hcChecked && !rcChecked && sChecked && !eChecked) {
			return returnOutput(calculateRate(SHGMHC, encounterInput))

		// EVENT + GM + HCHARM
		} else if (gmChecked && !honeyChecked && hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMHCHARM, encounterInput))

		// EVENT + GM + RCHARM
		} else if (gmChecked && !honeyChecked && !hcChecked && rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMRCHARM, encounterInput))

		// EVENT + HONEY + HCHARM
		} else if (!gmChecked && honeyChecked && hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTHONEYHCHARM, encounterInput))
			
		// EVENT + HONEY + RCHARM
		} else if (!gmChecked && honeyChecked && !hcChecked && rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTHONEYRCHARM, encounterInput))

		// INVALID EVENT + GM + RCHARM + HCHARM
		} else if (gmChecked && !honeyChecked && hcChecked && rcChecked && !sChecked && eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";
			
		// INVALID EVENT + HONEY + RCHARM + HCHARM
		} else if (!gmChecked && honeyChecked && hcChecked && rcChecked && !sChecked && eChecked) {
			document.getElementById("result").innerHTML="Choose 1 Item only";

		// EVENT + HONEY + HCHARM + SHINY
		} else if (!gmChecked && honeyChecked && hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EHHCS, encounterInput))

		// EVENT + GM + HCHARM + SHINY
		} else if (gmChecked && !honeyChecked && hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EGHCS, encounterInput))

		// EVENT + GM + HONEY + HCHARM
		} else if (gmChecked && honeyChecked && hcChecked && !rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMHONEYHCHARM, encounterInput))

		// EVENT + GM + HONEY + SHINY
		} else if (gmChecked && honeyChecked && !hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMHONEYSHINY, encounterInput))

		// EVENT + GM + HONEY + RCHARM
		} else if (gmChecked && honeyChecked && !hcChecked && rcChecked && !sChecked && eChecked) {
			return returnOutput(calculateRate(EVENTGMHONEYRCHARM, encounterInput))

		// EVENT + GM + HONEY + HCHARM + SHINY
		} else if (gmChecked && honeyChecked && hcChecked && !rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EGHHCS, encounterInput))

		// EVENT + GM + HONEY + RCHARM + SHINY
		} else if (gmChecked && honeyChecked && !hcChecked && rcChecked && sChecked && eChecked) {
			return returnOutput(calculateRate(EGHRCS, encounterInput))

		// NORMAL
		} else if (!(gmChecked && honeyChecked && hcChecked && rcChecked && sChecked && eChecked)) {
			return returnOutput(calculateRate(LEGENDARY, encounterInput))
		}
	}

	function calculateRate(val, first_number) {
		var value = (1 - Math.pow(val, first_number)) * 100;

		return value.toFixed(2);
	}

	/**
	 * @param {boolean} checkBoxes
	 * @param {number} rate
	 */
	function returnOutput(result) {
		if(!isNaN(result)) {
			return document.getElementById("result").innerHTML=result +"%"+" Chance!";
		} else {
			document.getElementById("result").innerHTML="Input your lle first!";
		}
	}
