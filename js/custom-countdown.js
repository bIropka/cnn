$(document).ready(function () {

    /* get the current time and increases by one hour */
    function getDate() {

        var now = new Date(), inHour = new Date();
        inHour.setHours(now.getHours() + 1);

        return '' + (inHour.getMonth() + 1) + '/' + inHour.getDate() + '/' + inHour.getFullYear() + ' ' + inHour.getHours() + ':' + inHour.getMinutes() + ':' + inHour.getSeconds();

    }

    /* you can input custom values */
    var date = getDate();
    var localOffset = - (new Date().getTimezoneOffset()) / 60;

    $('#timer').countdown({
        date: date,
        offset: localOffset,
        day: '',
        days: '',
        hour: '',
        hours: '',
        minute: '',
        minutes: '',
        second: '',
        seconds: ''
    });

});
