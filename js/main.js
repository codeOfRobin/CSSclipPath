
new ScrollMagic.Scene({
        duration: 600,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("#s1") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
    var scene = new ScrollMagic.Scene({
    							triggerElement: "#s2"
    						})
    						.setTween("#heading", 0.5, {backgroundColor: "blue", scale: 2.5}) // trigger a TweenMax.to tween
    						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    						.addTo(controller);
