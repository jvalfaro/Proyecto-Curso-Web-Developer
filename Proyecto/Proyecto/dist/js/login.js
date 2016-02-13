$(document).ready(function () {
    var $body = $('body');
    $body.css({ 'background-image': 'url("/dist/img/background_login.jpg")', 'background-size': 'cover', 'transition': '1.5s' });

    $(function () {

        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });


    });

    $('#btnLogin').click(function () {
        window.location = "../../index.html";
        return false;
    });

    animate = function () {

    }

    var cnt = 0, bg;
    //var $body = $('body');
    //var arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg'];
    var arr = [1,2,3,4,5,6,7];

    var bgrotater = setInterval(function () {
        if (cnt == 7) cnt = 0;
        //bg = 'url("' + arr[cnt] + '")';
        bg = 'url("/dist/img/' + arr[cnt] + '.jpg")';
        cnt++;
        $body.css({ 'background-image': bg, 'background-size': 'cover', 'transition': '2.5s' });
       }, 5000);
});