
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById("second").innerHTML = s;

    setTimeout(startTime, 1000);
}
const master = new Date();
const startDate = () => {
    let dayCal = master.getDay();
    console.log(dayCal);
    let dateCal = master.getDate();
    console.log(dateCal)
    let monthCal = master.getMonth();
    console.log(monthCal+1)
    let YearCal = master.getFullYear();
    console.log(YearCal)
    dayCal = checkTime(dayCal);
    monthCal = checkTime(monthCal);
    let convertedDay=convert(dayCal)
    document.getElementById("date").innerHTML = dateCal;
    document.getElementById("month").innerHTML = monthCal+1;
    document.getElementById("year").innerHTML = YearCal;
    document.getElementById("day").innerHTML ="\""+ convertedDay+"\"";
    setTimeout(startDate, 3.6e+6)
}
const convert =(a)=>{
    if(a==1) return("<h1>M</h1>onday");
    if(a==2) return("<h1>T</h1>uesday");
    if(a==3) return("<h1>W</h1>ednesday");
    if(a==4) return("<h1>T</h1>hursday");
    if(a==5) return("<h1>F</h1>riday");
    if(a==6) return("<h1>S</h1>aturday");
    if(a==7) return("<h1>S</h1>unday");

}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
startTime()
startDate()
function typeIt(words) {
    var letterIndex = 0;
    var wordIndex = 0;
    var h1 = $("#myTypingText");

    (function nextWord() {
        var SI = setInterval(function () {
            h1.append(words[wordIndex][letterIndex]);
            letterIndex++;
            if (letterIndex === words[wordIndex].length) {
                wordIndex = (wordIndex + 1) % words.length;
                letterIndex = 0;
                clearInterval(SI);
                setTimeout(function () {
                    h1.empty();
                    nextWord();
                }, 1000);  // delay between words
            }
        }, 100);        // delay between letters
    })();
}

typeIt(["Time waits for no one.",
    "Better three hours too soon than a minute too late.",
    "Lost time is never found again.",
    "Time is the most valuable thing a man can spend.",
    "The key is in not spending time, but in investing it.",
    "It is the time you have wasted for your rose that makes your rose so important.",
    "The trouble is, you think you have time.",
    "Suspect each moment, for it is a thief, tiptoeing away with more than it brings.",
    "The future is uncertain but the end is always near.",
    "Time takes it all, whether you want it to or not.",
    "You can\’t make up for lost time. You can only do better in the future.",
]);