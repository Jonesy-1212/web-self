//800 100
//240

$.prototype.accordion = function(){
    
    var _this = this
    // var oLis = document.querySelectorAll("li")
    
    arguments[0].colors.forEach(function(item,index){
        $(_this.find("li")[index]).css("background-color",item)
    })
    // console.log(this.children().children())


    //最下值在第二个参数
    var minWidth = arguments[1] || 100
    //初始值为总长除以个数
    var orgWidth = $("#wrap").width()/$("#wrap li").length
    console.log(orgWidth)

    var maxWidth = $("#wrap").width() - minWidth*($("#wrap li").length-1)
    console.log(maxWidth)

    this.find("li").css("width",orgWidth)

    this.find("li").on("mouseenter",function(){
        $(this).stop(true).animate({width:maxWidth})
        $(this).siblings().stop(true).animate({width:minWidth})
    })
    this.on("mouseleave",function(){
        $(this).find("li").stop(true).animate({width:orgWidth})
        // $(this).siblings().stop(true).animate({width:100})
    })
}