

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
    document.getElementById('map-image').src="../asset/map/arena-map/encore.png";
    document.getElementById('arena-title').innerHTML="Encore";
    document.getElementById('arena-paragraph').innerHTML="Found on the planet Boreas, Encore is the Arena where Seer made his name. Treated as a cursed outcast after being blamed for his planet’s moon being struck by a meteor, he slowly gathered a following of outsiders who would come to watch him compete. Over time, the Encore Arena became more and more designed to reflect the style of its star competitor.";
  }
  else if(slide == 'lingkaran-2'){
    document.getElementById('map-image').src="../asset/map/arena-map/habitat.png";
    document.getElementById('arena-title').innerHTML="Habitat";
    document.getElementById('arena-paragraph').innerHTML="Storm Point is just one of many islands in the New Antillia archipelago. Habitat 4 is one of the smallest islands in the chain, and is best known as a Leviathan breeding ground. Early IMC research groups were surprised to find that a large population of local Leviathans gravitated toward the island, and designated Habitat 4 as an ethology base to study the creatures’ behavior";
  } 
  else if(slide == 'lingkaran-3'){
    document.getElementById('map-image').src="../asset/map/arena-map/overflow.png";
    document.getElementById('arena-title').innerHTML="Overflow";
    document.getElementById('arena-paragraph').innerHTML="After trace amounts of Branthium were discovered in magma flows on Talos, Hammond Robotics began aggressively pursuing various means of mining it. One was an automated processing rig--officially referred to as Hephaestus Station, it’s affectionately referred to as Overflow. It hasn't seen any human activity for the majority of its operation";

  } 
  else if(slide == 'lingkaran-4'){
    document.getElementById('map-image').src="../asset/map/arena-map/Phase Runner.png";
    document.getElementById('arena-title').innerHTML="Phase Runnner";
    document.getElementById('arena-paragraph').innerHTML="The Phase Runner on Olympus is unique, but it wasn’t the first of its kind: the Outlands scientific community had to test the technology before it was safe to install on Lilian Peck’s intellectual paradise. They built a research center in a remote section of Talos where they tested a truncated prototype of the Phase Runner.";
  } 
}