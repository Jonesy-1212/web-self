//800 100
//240

jQuery.prototype.accordion = function(){
    this.children().children().css("width",240)
    var _this = this
    // var oLis = document.querySelectorAll("li")
    
    arguments[0].colors.forEach(function(item,index){
        _this.children().children()[index].style.backgroundColor = item
    })
    // console.log(this.children().children())

    this.children().children().on("mouseenter",function(){
        $(this).stop(true).animate({width:800})
        $(this).siblings().stop(true).animate({width:100})
    })
    this.on("mouseleave",function(){
        $(this).children().children().stop(true).animate({width:240})
        // $(this).siblings().stop(true).animate({width:100})
    })
}