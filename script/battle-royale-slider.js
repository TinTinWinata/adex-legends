

function lingkaranSlide(slide)
{
  changeSlide(slide);
  var allLingkaran = document.getElementsByClassName('lingkaran');
  for(let i = 0; i < allLingkaran.length; i++)
  {
    allLingkaran[i].style.backgroundColor = 'rgba(61, 0, 0, 0.932)';
  }
  var lingkaranId = document.getElementById(slide);
  lingkaranId.style.backgroundColor = 'rgba(160, 0, 0, 0.932)';
}



function changeSlide(slide){
  if(slide == 'lingkaran-1')
  {
    document.getElementById('map-image').src="../asset/map/battle-royale-map/kings-kanyon.png";
    document.getElementById('arena-title').innerHTML="Kings Kanyon.";
    document.getElementById('arena-paragraph').innerHTML="It features an abundance of areas varying from military facilities to slums, with a river dividing it down the middle. It is an island filled with Creatures, and surrounded by water on all sides, with hazardous cliffs that drop to the sea level below.";
  }
  else if(slide == 'lingkaran-2'){
    document.getElementById('map-image').src="../asset/map/battle-royale-map/olympus.png";
    document.getElementById('arena-title').innerHTML="Olympus";
    document.getElementById('arena-paragraph').innerHTML="Olympus was a city built on dreams. Built in 2640 by billionaire humanitarian Lillian Peck, this utopia floating in clouds above Psamathe was once a place where the brightest minds in the Outlands could gather and exchange ideas, leading to breakthroughs in the sciences and arts.";
  } 
  else if(slide == 'lingkaran-3'){
    document.getElementById('map-image').src="../asset/map/battle-royale-map/storm-point.png";
    document.getElementById('arena-title').innerHTML="Storm Point";
    document.getElementById('arena-paragraph').innerHTML="This deserted island wasn't always so deserted. Part of the New Antillia Archipelago, this beautiful island teeming with plentiful resources was one of the first places where early IMC expeditions made landfall on the planet Gaea. However, the area was isolated and beset by tropical storms. A permanent settlement was established on a nearby coastline – today known as the city of Suotamo";

  } 
  else if(slide == 'lingkaran-4'){
    document.getElementById('map-image').src="../asset/map/battle-royale-map/world-edge.png";
    // document.getElementById('map-image').style.marginLeft="200px";
    document.getElementById('arena-title').innerHTML="World Edge";
    document.getElementById('arena-paragraph').innerHTML="A harsh planet beset by intense volcanic activity, Talos was once deemed uninhabitable, and only small luddite settlements took root there. However, it became a hotbed of IMC activity when a rare mineral compound was discovered beneath its surface. Heat-reducing towers were built to super-cool its natural lava flows to allow resource extraction.";
  } 
}