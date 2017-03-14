"use strict";
document.addEventListener('DOMContentLoaded', function(){
    /*Typed.new('#title', {
      strings: ["iamlee"],
      typeSpeed: 0
    });
    Typed.new('#quote', {
      strings: ["its not a bug its a feature."],
      typeSpeed: 0
    });*/
    Typed.new('#specialisms', {
      strings: ["web development, web design, motion graphics, animation, stuff on the web."],
      typeSpeed: 50
    });
});

var tl = new TimelineMax({paused:true});

tl.staggerFrom('.logo', .5, {x: -200, opacity: 0, ease:Elastic.easeOut.config(1.1, 1)}, .1);

setTimeout(function(){ tl.play(); }, 12000);
