document.addEventListener("touchmove", (e) => {
  // this is for prevent multiple touches but you can add condition to prevent certain situations
  if (e.touches.length > 1) {  
       e.preventDefault();
  }
  else{
    document.documentElement.style.overflow = "hidden";
    touchstartX = e.changedTouches[0].screenX;
    //this is a function for getting element based on x and y location of the html
    var endTarget = document.elementFromPoint(
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY
    );
    //this will print the id but u can get something as else
    //such as endTarget.class, endTarget.style.background and etc
    console.log(endTarget.id);
    // this if condition below is for ignoring certain id but you can set it up for example in comment above
    if (
      endTarget.id != "td4" &&
      endTarget.id != ""
    ) {
      //this is where you should call your function here
      dostuff(endTarget.id);
    }
    //enable this if you want the function to return id or any properties
    //return endTarget.id
  }
});
//this is for when user lift their finger after swiping element
document.addEventListener("touchend", (e) => {
  document.documentElement.style.overflow = "auto";
}, {passive: false});
//from here and onward, you can basically do anything you want, so enjoy
function dostuff(argument) {
  alert(argument)
}