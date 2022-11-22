// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var Gradient = '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#A15919"/><stop offset="70%" stop-color="#F4C53B"/><stop offset="110%" stop-color="#4CB12F"/></linearGradient></defs>';

var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 6,
 // color: '#FFEA82',
  color: 'url(#gradient)',
  trailColor: '#eee',
  trailWidth: 6,
  easing: 'easeInOut',
  duration: 3000,
  svgStyle: {
  	strokeLinecap: 'round'
  },
	text: {
    value: '',
    alignToBottom: false
  },
  // Set default step function for all animate calls
	step: (state, bar) => {
    //bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 850);
    if (value <= 600) {
      bar.setText('<div style="text-align:center">' + value + '<br><small style="display: block; font-size: .75rem">Bad</small></div>');
    } else if(value > 601 && value < 800) {
      bar.setText('<div style="text-align:center">' + value + '<br><small style="display: block; font-size: .75rem">Moderate</small></div>');
    } else {
      bar.setText('<div style="text-align:center">' + value + '<br><small style="display: block; font-size: .75rem">Excellent</small></div>');
    }
  
    bar.text.style.color = '#1A3464'
  }
});

bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
bar.svg.insertAdjacentHTML('afterbegin', Gradient);

// run it
setTimeout(function(){
  bar.animate(0.952, function() {

   // need to add final score label and score increase
   document.querySelector('.credit-score-block').classList.add('finished');
    
  });  // Number from 0.0 to 1.0  
}, 1000)

