// JavaScript Document// JavaScript Document
$(function(){
    //������ҳ���жϣ����С��5ҳ������ʾ����ҳ�����������5ҳ������ʾ5ҳ�����ݵ�ǰ�����ҳ������

    var pageCount = 10;//ģ���̨��ҳ��
    //���ɷ�ҳ��ť
    if(pageCount>5){
        page_icon(1,5,0);
    }else{
        page_icon(1,pageCount,0);
    }

    //�����ҳ��ť����
    $("#pageGro li").live("click",function(){
        if(pageCount > 5){
            var pageNum = parseInt($(this).html());//��ȡ��ǰҳ��
            pageGroup(pageNum,pageCount);
        }else{
            $(this).addClass("on");
            $(this).siblings("li").removeClass("on");
        }
    });

    //�����һҳ����
    $("#pageGro .pageUp").click(function(){
        if(pageCount > 5){
            var pageNum = parseInt($("#pageGro li.on").html());//��ȡ��ǰҳ
            pageUp(pageNum,pageCount);
        }else{
            var index = $("#pageGro ul li.on").index();//��ȡ��ǰҳ
            if(index > 0){
                $("#pageGro li").removeClass("on");//�������ѡ��
                $("#pageGro ul li").eq(index-1).addClass("on");//ѡ����һҳ
            }
        }
    });

    //�����һҳ����
    $("#pageGro .pageDown").click(function(){
        if(pageCount > 5){
            var pageNum = parseInt($("#pageGro li.on").html());//��ȡ��ǰҳ
            pageDown(pageNum,pageCount);
        }else{
            var index = $("#pageGro ul li.on").index();//��ȡ��ǰҳ
            if(index+1 < pageCount){
                $("#pageGro li").removeClass("on");//�������ѡ��
                $("#pageGro ul li").eq(index+1).addClass("on");//ѡ����һҳ
            }
        }
    });
});

//�����תҳ��
function pageGroup(pageNum,pageCount){
    switch(pageNum){
        case 1:
            page_icon(1,5,0);
            break;
        case 2:
            page_icon(1,5,1);
            break;
        case pageCount-1:
            page_icon(pageCount-4,pageCount,3);
            break;
        case pageCount:
            page_icon(pageCount-4,pageCount,4);
            break;
        default:
            page_icon(pageNum-2,pageNum+2,2);
            break;
    }
}

//���ݵ�ǰѡ��ҳ����ҳ������ť
function page_icon(page,count,eq){
    var ul_html = "";
    for(var i=page; i<=count; i++){
        ul_html += "<li>"+i+"</li>";
    }
    $("#pageGro ul").html(ul_html);
    $("#pageGro ul li").eq(eq).addClass("on");
}

//��һҳ
function pageUp(pageNum,pageCount){
    switch(pageNum){
        case 1:
            break;
        case 2:
            page_icon(1,5,0);
            break;
        case pageCount-1:
            page_icon(pageCount-4,pageCount,2);
            break;
        case pageCount:
            page_icon(pageCount-4,pageCount,3);
            break;
        default:
            page_icon(pageNum-2,pageNum+2,1);
            break;
    }
}

//��һҳ
function pageDown(pageNum,pageCount){
    switch(pageNum){
        case 1:
            page_icon(1,5,1);
            break;
        case 2:
            page_icon(1,5,2);
            break;
        case pageCount-1:
            page_icon(pageCount-4,pageCount,4);
            break;
        case pageCount:
            break;
        default:
            page_icon(pageNum-2,pageNum+2,3);
            break;
    }
}