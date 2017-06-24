function getLink(){
    navigator.geolocation.getCurrentPosition(getPosition);
}

function getIcon(condid) {
    switch(condid) {
    case '0': var icon  = '<i class="wi wi-tornado"></i>';
    break;
    case '1': var icon  = '<i class="wi wi-storm-showers"></i>';
    break;
    case '2': var icon  = '<i class="wi wi-tornado"></i>';
    break;
    case '3': var icon  = '<i class="wi wi-thunderstorm"></i>';
    break;
    case '4': var icon  = '<i class="wi wi-thunderstorm"></i>';
    break;
    case '5': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '6': var icon  = '<i class="wi wi-rain-mix"></i>';
    break;
    case '7': var icon  = '<i class="wi wi-rain-mix"></i>';
    break;
    case '8': var icon  = '<i class="wi wi-sprinkle"></i>';
    break;
    case '9': var icon  = '<i class="wi wi-sprinkle"></i>';
    break;
    case '10': var icon  = '<i class="wi wi-hail"></i>';
    break;
    case '11': var icon  = '<i class="wi wi-showers"></i>';
    break;
    case '12': var icon  = '<i class="wi wi-showers"></i>';
    break;
    case '13': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '14': var icon  = '<i class="wi wi-storm-showers"></i>';
    break;
    case '15': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '16': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '17': var icon  = '<i class="wi wi-hail"></i>';
    break;
    case '18': var icon  = '<i class="wi wi-hail"></i>';
    break;
    case '19': var icon  = '<i class="wi wi-cloudy-gusts"></i>';
    break;
    case '20': var icon  = '<i class="wi wi-fog"></i>';
    break;
    case '21': var icon  = '<i class="wi wi-fog"></i>';
    break;
    case '22': var icon  = '<i class="wi wi-fog"></i>';
    break;
    case '23': var icon  = '<i class="wi wi-cloudy-gusts"></i>';
    break;
    case '24': var icon  = '<i class="wi wi-cloudy-windy"></i>';
    break;
    case '25': var icon  = '<i class="wi wi-thermometer"></i>';
    break;
    case '26': var icon  = '<i class="wi wi-cloudy"></i>';
    break;
    case '27': var icon  = '<i class="wi wi-night-cloudy"></i>';
    break;
    case '28': var icon  = '<i class="wi wi-day-cloudy"></i>';
    break;
    case '29': var icon  = '<i class="wi wi-night-cloudy"></i>';
    break;
    case '30': var icon  = '<i class="wi wi-day-cloudy"></i>';
    break;
    case '31': var icon  = '<i class="wi wi-night-clear"></i>';
    break;
    case '32': var icon  = '<i class="wi wi-day-sunny"></i>';
    break;
    case '33': var icon  = '<i class="wi wi-night-clear"></i>';
    break;
    case '34': var icon  = '<i class="wi wi-day-sunny-overcast"></i>';
    break;
    case '35': var icon  = '<i class="wi wi-hail"></i>';
    break;
    case '36': var icon  = '<i class="wi wi-day-sunny"></i>';
    break;
    case '37': var icon  = '<i class="wi wi-thunderstorm"></i>';
    break;
    case '38': var icon  = '<i class="wi wi-thunderstorm"></i>';
    break;
    case '39': var icon  = '<i class="wi wi-thunderstorm"></i>';
    break;
    case '40': var icon  = '<i class="wi wi-storm-showers"></i>';
    break;
    case '41': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '42': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '43': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '44': var icon  = '<i class="wi wi-cloudy"></i>';
    break;
    case '45': var icon  = '<i class="wi wi-lightning"></i>';
    break;
    case '46': var icon  = '<i class="wi wi-snow"></i>';
    break;
    case '47': var icon  = '<i class="wi wi-thunderstorm"></i>';
    break;
    case '3200': var icon  =  '<i class="wi wi-cloud"></i>';
    break;
    default: var icon  =  '<i class="wi wi-cloud"></i>';
    break;
  }
    return icon;
}

function editHtml(data){
    var i = data.query.results.channel.item.condition;
    var j = data.query.results.channel;
    var k = j['item']['forecast'];
    $('#city').html(j.location.city); 
    $('#temp0').html(i.temp);
    temp0 = i.temp;
    unit  = j.units.temperature;
    weacode  =  i.code;
    console.log(weacode);
    changeBg(weacode);
    $('#unit0').html(j.units.temperature);
    $('.unit').html(j.units.temperature);
    $('#text').html(i.text);
    $('.weaicon').html(getIcon(i.code));
    $('#we1').html(getIcon(j['item']['forecast'][1]['code']));
    $('#temp1-h').html(j['item']['forecast'][1]['high']);
    $('#temp1-l').html(j['item']['forecast'][1]['low']);
    $('#we2').html(getIcon(j['item']['forecast'][2]['code']));
    $('#temp2-h').html(j['item']['forecast'][2]['high']);
    $('#temp2-l').html(j['item']['forecast'][2]['low']);
    $('#we3').html(getIcon(j['item']['forecast'][3]['code']));
    $('#temp3-h').html(j['item']['forecast'][3]['high']);
    $('#temp3-l').html(j['item']['forecast'][3]['low']);
    $('#we4').html(getIcon(j['item']['forecast'][4]['code']));
    $('#temp4-h').html(j['item']['forecast'][4]['high']);
    $('#temp4-l').html(j['item']['forecast'][4]['low']);
    $('#we5').html(getIcon(j['item']['forecast'][5]['code']));
    $('#temp5-h').html(j['item']['forecast'][5]['high']);
    $('#temp5-l').html(j['item']['forecast'][5]['low']);
    $('#we6').html(getIcon(j['item']['forecast'][6]['code']));
    $('#temp6-h').html(j['item']['forecast'][6]['high']);
    $('#temp6-l').html(j['item']['forecast'][6]['low']);
    $('#we7').html(getIcon(j['item']['forecast'][7]['code']));
    $('#temp7-h').html(j['item']['forecast'][7]['high']);
    $('#temp7-l').html(j['item']['forecast'][7]['low']);
    
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
            rjson = JSON.parse(r);
            editHtml(rjson);
        },
        error: function(err) { alert(err); }
    });
}

function changeBg(code) {
    switch(code) {
        case '34':
            $('body').css('background-image', 'url(images/fairday.jpg)');
            break;
        case '33':
            $('body').css('background-image', 'url(images/fairnight.jpg)');
            break;
        case '4':
            $('body').css('background-image', 'url(images/thunderstorm.jpg)');
            break;
        case '3':
        case '47':
            $('body').css('background-image', 'url(images/sthunderstorm.jpg)');
            break;
        case '11':
        case '12':
            $('body').css('background-image', 'url(images/rain.jpg)');
            break;
        case '1':
            $('body').css('background-image', 'url(images/tstorm.jpg)');
            break;
        
        default:
            break;
    }
}

$(document).ready(function(){
    getLink();
    $('.temp-toggle').click(function(){
        if (unit == 'C'){
            temp0 = (temp0 * 9/5) + 32;
            unit  = 'F';
            $('#temp0').html(temp0);
            $('#unit0').html(unit);
        }else if (unit == 'F') {
            temp0 = (temp0 - 32) * 5/9;
            unit = 'C';
            $('#temp0').html(temp0);
            $('#unit0').html(unit);
        }
    });
});