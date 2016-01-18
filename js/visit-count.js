// ---------------------
// UPDATERS
// ---------------------

var updateVisitCount = function(visitNumber) {
  document.getElementById('visit-count').innerHTML = visitNumber
  localStorage.setItem('visitNumber', visitNumber)
}

// ------------------------
// START
// -------------------------

var start = function() {
  var visitNumber = localStorage.getItem('visitNumber')
  if (visitNumber === null) {
    visitNumber = 1
  }
  else {
    visitNumber = parseInt(visitNumber) + 1
  }
  updateVisitCount(visitNumber)
}

start()
