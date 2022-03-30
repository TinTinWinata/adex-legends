


var currSlide = 1;
var maxSlide = 4;

function minus()
{
  currSlide -= 1;
  if(currSlide <= 0)
  {
    currSlide = 1;
  }
  showSlide(currSlide, false);
}


function plus()
{
  currSlide += 1;
  if(currSlide > 4)
  {
    currSlide = 4;
  }
  showSlide(currSlide, true);
}

function showSlide(slide, plus)
{
  var allSlide = document.getElementsByClassName('slide-content');
  if(plus){
    allSlide[currSlide - 2].style.display ="none";
    allSlide[currSlide- 1].style.display ="block";
  }
  else{
    allSlide[currSlide].style.display ="none";
    allSlide[currSlide - 1].style.display ="block";
  }
}