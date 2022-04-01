function Time() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sessions = document.getElementById('SESSIONS');

    if (hrs >= 12) {
        sessions.innerHTML = 'PM';
    } else {
        sessions.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('HOURS').innerHTML = hrs;
    document.getElementById('MINUTES').innerHTML = min;
    document.getElementById('SECONDS').innerHTML = sec;
}

setInterval(Time, 1000);




function setTime() {

    var timeSelect = document.getElementById('timeSelect').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(./GoodMorning.png)";
        document.getElementById('message').style.visibility = "visible";
        document.getElementById('message').innerHTML = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementById('message').style.fontSize = "25px";
        document.getElementById('message').style.top = "252px";
        document.getElementById('ge').innerHTML = "GOOD MORNING !! WAKE UP !!";
        document.getElementById('ge').style.width = "482px";
        document.getElementById('timeList1').style.color="white"
    }

    var invalue = document.getElementById('timeSelect');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('timeList1').innerHTML = "Wake Up Time: " + value;


    var timeSelect = document.getElementById('timeSelect2').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(./GoodAfternoon.png)";
        document.getElementById('message').style.visibility = "visible";
        document.getElementById('message').innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById('message').style.fontSize = "25px";
        document.getElementById('message').style.top = "252px";
        document.getElementById('ge').innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById('ge').style.width = "500px";
        document.getElementById('ge').style.fontSize = "25px";
        document.getElementById('timeList2').style.color="white"
    }

    var invalue = document.getElementById('timeSelect2');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('timeList2').innerHTML = "Lunch Time: " + value;


    var timeSelect = document.getElementById('timeSelect3').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(./GoodEvening.png)";
        document.getElementById('message').style.visibility = "visible";
        document.getElementById('message').innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById('message').style.fontSize = "25px";
        document.getElementById('message').style.top = "232px";
        document.getElementById('ge').innerHTML = "GOOD EVENING !!";
        document.getElementById('ge').style.width = "482px";
        document.getElementById('timeList3').style.color="white"
    }

    var invalue = document.getElementById('timeSelect3');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('timeList3').innerHTML = "Nap Time: " + value;

}


