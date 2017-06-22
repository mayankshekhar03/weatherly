$(document).ready(function(){
   /* $.ajax({
    url: 'https://simple-weather.p.mashape.com/weather?lat=26.8467&lng=80.9462', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'text/plain',
    success: function(data) { document.getElementById('weather').innerHTML = data.source ; },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "dNnULvXBm5mshHJ6MJqtHYoa98Bop16nooWjsnhv9HCEBHvpy5"); // Enter here your Mashape key
    }
}); */
$.ajax({
    headers: {
      "X-Mashape-Key": "dNnULvXBm5mshHJ6MJqtHYoa98Bop16nooWjsnhv9HCEBHvpy5",
      Accept: "text/plain",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://simple-weather.p.mashape.com/weather?lat=26.8467&lng=80.9462',
    success: function(r) {
        document.getElementById('weather').innerHTML = r;
    },
    error: function(err) { alert(err); }
    });
});