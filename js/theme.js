// -----------------------
// UPDATERS
// -----------------------

var updateAll = function(theme) {
  updateBody(theme)
  updateCheckbox(theme)
  localStorage.setItem('theme', theme)
}

var updateBody = function(theme) {
   document.body.className = theme;
 }

var updateCheckbox = function(theme) {
  document.getElementById('myonoffswitch').checked = theme === 'day'
}

// ------------------------
// START
// -------------------------

var start = function() {
  var theme = localStorage.getItem('theme')
  if (theme === null) {
    theme = "night"
  }
  updateAll(theme)
}

start()

// ------------------------
// EVENTS
// ------------------------

document.getElementById('myonoffswitch').onclick = function(){
  var theme = this.checked ? 'day' : 'night'
  updateAll(theme)
}
