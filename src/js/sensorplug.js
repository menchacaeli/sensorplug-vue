var Device = function() {
    function orientation() {
        if (!('ondeviceorientation' in window)) {
            // document.getElementById('do-unsupported').classList.remove('hidden');
         } else {
            // document.getElementById('do-info').classList.remove('hidden');
            window.addEventListener('deviceorientation', function(event) {
               document.getElementById('beta').innerHTML = Math.round(event.beta);
            });
         }
         console.log(this); 
    }
    return {
        orientation: orientation
    }
}()