// // functions
// function multiTextType1(){
//   var typingEffect = new Typed(".multiText1", {
//     strings : [
//       "to: baby", 
//       "to: Joy", 
//       "to: bayo's weirdo", 
//       "to: windshield warrior", 
//       "to: witch",
//       "to: homeless queen",
//       "to: mama", 
//       "to: baby girl", 
//       "to: best friend", 
//       "to: christian sister", 
//       "to: Mary's friend",
//       "to: obsessed over me person", 
//       "to: my number #1 fan",
//       "to: bayo's babe", 
//       "to: bayo's baby girl",  
//       "to: bayo's little weirdo",
//       "forehead french fries",      
//     ],
//     loop : false,
//     typeSpeed : 90,
//     backSpeed : 80,
//     backDelay : 200,
//   })
// }

// function multiTextType2(){
//   var typingEffect = new Typed(".multiText2", {
//     strings : [
//        "so, like i wanted to make this typing effect, cause i know you'd like to read this. <br/>hopefully, i was right. Enjoy.",
//        "<p><span>things i like ",
//        "<p><span>things i love about bayo's little weirdo (in no particular order)</p><ul><li>her eyes</li><li>her nose</li><li>her lips</li><li>her eyebrows</li><li>her toes</li><li>her fingers</li><li>her fingernails</li><li>her toenails</li><li>her smile</li><li>her huuuuuuge windshield",
//        "<p><span>things i love about bayo's little weirdo (in no particular order)</p><ul><li>her eyes</li><li>her nose</li><li>her lips</li><li>her eyebrows</li><li>her toes</li><li>her fingers</li><li>her fingernails</li><li>her toenails</li><li>her smile that can make me sell my family house</li><li>her forehead</li><li>her walk</li><li>her talk</li><li>her voice omg omg omg omg omggggggggggg</li><li>her laugh</li><li>her tote bag (the one with the cute butterfly that one absolute genius must have designed)</li><li>her family</li><li>her legs</li><li>her spiritual life</li><li>her dress sense</li></ul>and many more...<br><br><br><p><span>things i don't like ...</p><li>her glo sim card that nobody uses ever</li><li>her school that's located waaaaaaay too far from me</li>",
//        "<p><span>things i love about bayo's little weirdo (in no particular order)</p><ul><li>her eyes</li><li>her nose</li><li>her lips</li><li>her eyebrows</li><li>her toes</li><li>her fingers</li><li>her fingernails</li><li>her toenails</li><li>her smile that can make me sell my family house</li><li>her forehead</li><li>her walk</li><li>her talk</li><li>her voice omg omg omg omg omggggggggggg</li><li>her laugh</li><li>her tote bag (the one with the cute butterfly that one absolute genius must have designed)</li><li>her family</li><li>her legs</li><li>her spiritual life</li><li>her dress sense</li></ul>and many more...<br><br><br><p><span>things i don't like ...</p><li>her glo sim card that nobody uses ever</li><li>her school that's located waaaaaaay too far from me</li><br/><br/><p><span>i hope with this mini demo you've gotten to see how my mind works) i hope you're doing awesome, and that you have an awesome birthday, and always, i love you."
//     ],
//     loop : false,
//     typeSpeed : 90,
//     backSpeed : 80,
//     backDelay : 1000,
//   })
// }


// const presentEl = document.querySelector(".present");

// presentEl.addEventListener("click", function(){
//   this.classList.toggle("open");
// })

// const infoParagraph = document.querySelector(".info-p");
// const infoHeading2 = document.querySelector(".info-h2");

// infoHeading2.innerHTML = "i love you, mama.";
// infoParagraph.innerHTML = "you're awesome!";

// function showPresent () {
//   presentEl.style.display = "block"
// }

// const lastPart = document.querySelector(".last-part");
// function showLastPart () {
//   lastPart.style.display = "block"
// }


// // calling them
// setTimeout(multiTextType1, 1000);
// setTimeout(multiTextType2, 4000);
// setTimeout(showPresent, 35000);
// setTimeout(showLastPart, 45000);


// deactivated section

function deactivatedh3(){
  var typingEffect = new Typed(".deactiv-h3", {
    strings : [
      "d3",
      "dea",
      "deaC",
      "deacti",
      "deactiv@",
      "deactiva",
      "deactivat3D",
      "deactivated",
      "deactivated.",
      ],
    loop : false,
    typeSpeed : 50,
    backSpeed : 30,
    backDelay : 10,
  })
}

function deactivatedp(){
  var typingEffect = new Typed(".deactiv-p", {
    strings : [
       "this page has been deactivated<br /><br /><br /><br /><br /><em>...although my love for her hasn't, and never will</em> ;)",
      ],
    loop : false,
    typeSpeed : 90,
    backSpeed : 80,
    backDelay : 1000,
  })
}

deactivatedh3();
setTimeout(deactivatedp, 3000);
