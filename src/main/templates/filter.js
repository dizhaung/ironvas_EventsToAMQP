importPackage(Packages.java.lang);
importPackage(Packages.de.fhhannover.inform.trust.ironvas);

/* The 'filter'-Method gets called by ironvas, if it returns
 * false for the given vulnerability the vulnerability is
 * discarded from further processing.
 */
function filter(vulnerability) {
	return true; // default process all vulnerability
	//return filterByThreatLevel(vulnerability);
}


//*****************************************************************************

function filterByThreatLevel(vulnerability) {
	var minLevel = ThreatLevel.Low;

	if (vulnerability.getThreat().compareTo(minLevel) < 0) {
		return false;
	}
	else {
		return true;
	}
}

