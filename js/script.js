document.getElementById('myonoffswitch').onclick = function(){
  if ( document.body.className === 'day' ) {
    document.body.className = 'night'
  }
  else {
    document.body.className = 'day'
  }
}
