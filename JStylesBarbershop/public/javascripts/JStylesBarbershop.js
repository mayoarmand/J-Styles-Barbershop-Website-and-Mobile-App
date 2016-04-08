if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}

/*$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();
});

//Create Animation for 0.5s
var tween = TweenMax.to('#animation', 0.5, {
    backgroundColor: 'rgb(255, 39, 46)',
    scale: 7,
    rotation: 360
});

//Create the Scene and trigger when visible with ScrollMagic
var scene = new ScrollScene({
    triggerElement: '#scene',
    offset: 150  offset the trigger 150px below #scene's top 
})
.setTween(tween)
.addTo(scrollMagicController);*/

/* Using jQuery */
(function($) {
 
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
           
        }
    });
 
})(jQuery);


// Create scene
$("section").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addIndicators({
	    colorStart: "rgba(255,255,255,0.5)",
	    colorEnd: "rgba(255,255,255,0.5)", 
	    colorTrigger : "rgba(255,255,255,1)",
	   
})
    .addTo(ctrl);
 
});

