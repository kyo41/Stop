 
msec = 0;
sec  = 0;
min  = 0;
hour = 0;

$(function() {
 
    // スタート
    $('#stopWatch #startButton').click(function() {
        timer = setInterval("countUp()", 100);
      
        $(this).attr('disabled','disabled');
        $('#stopWatch #stopButton').removeAttr('disabled');
    });
    
    // ストップ
    $('#stopWatch #stopButton').click(function() {
        clearInterval(timer);
 
        $(this).attr('disabled','disabled');
        $('#stopWatch #startButton').removeAttr('disabled');
        $('#stopWatch #resetButton').removeAttr('disabled');
    });
 
 
    // リセット
    $('#stopWatch #resetButton').click(function() {
 
        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;
 
        $('#stopWatch .time').html('0:0:0:0');
        clearInterval(timer);
 
        $(this).attr('disabled','disabled');
        $('#stopWatch #stopButton').attr('disabled','disabled');
        $('#stopWatch #startButton').removeAttr('disabled');
    });
});
 
function countUp ()
{
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    msecNumber = msec;
 
    if (sec < 10) {
        secNumber =  sec.toString();
    } else {
        secNumber = sec;
    }
 
    if (min < 10) {
        minNumber = min.toString();
    } else {
        minNumber = min;
    }
 
    if (hour < 10) {
        hourNumber = hour.toString();
    } else {
        hourNumber = hour;
    }
 
    $('#stopWatch .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}
