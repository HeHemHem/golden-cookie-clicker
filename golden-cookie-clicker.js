setInterval(function() {

Game.shimmers.forEach(function(shimmer) {
if (shimmer.type == "golden") { shimmer.pop() }
})

}, 500);
