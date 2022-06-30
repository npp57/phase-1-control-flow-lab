function scuberGreetingForFeet(feet){
  let result
  if (feet < 400) {
    result = "This one is on me!"

  } else if (feet < 2000) {
    result = "That will be twenty bucks."
  }else if (feet < 2500){
    result = "I will gladly take your thirty bucks."
  }else if (feet > 2500){
    result = "No can do."
  }

  return result
  
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.'// Write your code here!
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(rich){
 switch (rich) {
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return 'Bye.'
 }
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
scuberGreetingForFeet('thanks for everything');