const digitalClock = () =>{
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = "AM";

    //For Date
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();

    if(hr == 12){
        hr =0;
    }


    if(hr > 12){
        hr = hr - 12;
        session = "PM";
    }

    hr = (hr< 10)? "0"+ hr: hr;
    min = (min< 10)? "0"+ min: min;
    sec = (sec< 10)? "0"+ sec: sec;

    let timeformat = `${hr}:${min}:${sec} ${session}`;
    let dateformat = `${day}/${month}/${year}`
    let clock = document.getElementById("clock");
    clock.innerText = timeformat;
    let date = document.getElementById("date");
    date.innerText = dateformat;

    setInterval(digitalClock, 1000);

}

digitalClock();