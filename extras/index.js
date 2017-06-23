function getLink(){
    navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position) {
    var l = 'https://simple-weather.p.mashape.com/weatherdata?lat=' + String(position.coords.latitude) + '&lng=' + String(position.coords.longitude);
    $.ajax({
        headers: {
          "X-Mashape-Key": "dNnULvXBm5mshHJ6MJqtHYoa98Bop16nooWjsnhv9HCEBHvpy5",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: l,
        success: function(r) {
            document.getElementById('weather').innerHTML = r;
        },
        error: function(err) { alert(err); }
    });
}
$(document).ready(function(){
    getLink();
});