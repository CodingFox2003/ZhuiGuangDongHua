window.onload = function(){
    // 声明一个变量，用于存储当前显示的图片的索引
    var current_index = 0;
    // 声明一个变量，用于存储定时器的ID
    var timer = window.setInterval(autoChange,4000);
    // 获取按钮列表
    var button_li = document.getElementById("button").getElementsByTagName("li");
    // 声明一个变量，用于存储图片列表
    var pic_div = document.getElementById("banner_pic").getElementsByTagName("div");
    // 遍历按钮列表
    for(var i=0;i<button_li.length;i++){
        // 为每个按钮添加鼠标进入事件
        button_li[i].onmouseover = function(){
            if(timer){
                clearInterval(timer);
            }
            // 遍历元素
            for(var j=0;j<pic_div.length;j++){
                if(button_li[j] == this){
                    current_index = j;
                    button_li[j].className = "current";
                    pic_div[j].className = "current";
                }
                else{
                    button_li[j].className = "but";
                    pic_div[j].className = "pic";
                }
            }
        }
        // 添加鼠标离开事件
        button_li[i].onmouseout = function(){
            timer=window.setInterval(autoChange,4000);
        }
    }
    /*
     * 自动切换函数
     * 该函数会在指定时间间隔后自动切换到下一张图片          
     */
    function autoChange(){
        // 增加当前索引值
        ++current_index;
        // 如果当前索引值等于按钮列表的长度，则重置为0
        if(current_index==button_li.length){
            current_index = 0;
        }
        // 遍历按钮列表
        for(var I=0;I<button_li.length;I++){
            // 如果当前索引值等于遍历的索引值，则将按钮和图片的类名设置为"current"
            if(I==current_index){
                button_li[I].className = "current";
                pic_div[I].className = "current";
            }
            // 否则，将按钮和图片的类名设置为"but"和"pic"
            else{
                button_li[I].className = "but";
                pic_div[I].className = "pic";
            }
        }
    }
}