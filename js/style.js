
$(function () {
//导航
    function show(btn,pop){
        var speed  = 500;
        var bl = true;
        $(btn).click(function(){
            if(bl==true){
                $('html').css({"overflow":"hidden"});
                $(pop).animate({left:0,opacity:'1'}, speed);
                bl=false;
            }else{
                $('html').css({"overflow":"visible"});
                $(pop).animate({left:-80+'%',opacity:'0'}, speed);
                bl=true;
            }
        })
    }
    show('.topNav','.navPop');


    /*tab栏切换*/
    function tabChage(parm1,parm2){
        $(parm2).eq(0).show().siblings("ul").hide();
        $(parm1).on("click",function(){
            var index = $(this).index();
            $(parm2).eq(index).show().siblings().hide();
        })
    }
    //nesInfor.html
    tabChage(".hdTi .ti",".newsList ul")

})


