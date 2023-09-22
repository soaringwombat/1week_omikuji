function omikuji(){
    var datetime = new Date();

    var omikuji = new Array("大吉","中吉","小吉","吉","凶","大凶");
    var result_sum = "";

    var object1 = document.getElementById("omikuji");
    
    for(var i = 0; i < 7; i++){
        datetime.setDate(datetime.getDate() + 1);
        var month = datetime.getMonth() + 1;
        var day = datetime.getDate();
        var date = month + "月" + day + "日の運勢は・・・";

        var num = Math.floor(Math.random() * 6);
        var result = omikuji[num];
        result_sum = result_sum + date + result + "\n";
    }

    object1.innerText = result_sum;
}
