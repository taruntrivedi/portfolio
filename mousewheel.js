(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('work_cards').scrollLeft -= (delta*40); // Multiplied by 40
       
       if((delta > 0 && document.getElementById('yourDiv').scrollLeft > 0) || 
       (delta < 0 && document.getElementById('yourDiv').offsetWidth+document.getElementById('yourDiv').scrollLeft < el.scrollWidth)) {
        e.preventDefault();
       }
       
    }
    if (document.getElementById('work_cards').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('work_cards').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('work_cards').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('work_cards').attachEvent("onmousewheel", scrollHorizontally);
    }
})();