(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

if (typeof js == "undefined" || !js) {
	console.log("No code was supplied!");
} else {
	eval(js);
}

window.addEventListener("unhandledrejection", function(err) {
	console.dir(err);
	console.log(`Caught unhandled promise: ${err.reason}`);
});
