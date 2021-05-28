// 存放了跟todo相关的业务逻辑的代码
// 刚学完jquery. 为了练习. 就通过这个案例,利用jquery对页面的元素进行增删改查

// 需求1: 在文本框中 todo-header input  输入内容,按下回车键,表示输入完成,将输入的内容,添加到任务列表中

//1. 获取 todo-header input . 然后注册键盘抬起事件

$(".todo-header input").on("keyup", function (e) {
  if (e.keyCode === 13) {
    var val = $(".todo-header input").val().trim()
    if (!val) return;
    var str = ' <li>\
    <label>\
      <input type="checkbox" />\
      <span>' + val + '</span>\
    </label>\
    <button class="btn btn-danger">删除</button>\
  </li>'
    $(".todo-main").append(str)
    $(".todo-header input").val("")

    var len1 = $(".todo-main input:checked").length
    var len2 = $(".todo-main input").length
    // console.log(len1)
    // console.log(len2)

    if (len1 === 0) {
      $(".todo-footer input").prop("checked", false)
    }else{
      $(".todo-footer input").prop("checked", len1 === len2)
    }

    
    $(".todo-footer>span").html('<span>已完成' + len1 + '</span> / 全部' + len2)
  }
})




$(".todo-main").on("click", "li input", function () {
  $(this).next().toggleClass("isDoes")

  var len1 = $(".todo-main input:checked").length
  var len2 = $(".todo-main input").length
  // console.log(len1)
  // console.log(len2)

  if (len1 === 0) {
    $(".todo-footer input").prop("checked", false)
  }else{
    $(".todo-footer input").prop("checked", len1 === len2)
  }

  
  $(".todo-footer>span>span").text("已完成" + len1)

})


//全选
$(".todo-footer input").on("click", function () {
  $(".todo-main input").prop("checked", $(this).prop("checked"));

  $(this).prop("checked") ? $(".todo-main input").next().addClass("isDoes") : $(".todo-main input").next().removeClass("isDoes")


  var len1 = $(".todo-main input:checked").length
  $(".todo-footer>span>span").text("已完成" + len1)

})

//删除
$(".todo-main").on("click", ".btn", function () {
  $(this).parent().remove()

  var len1 = $(".todo-main input:checked").length
  var len2 = $(".todo-main input").length
  // console.log(len1)
  // console.log(len2)

  if (len1 === 0) {
    $(".todo-footer input").prop("checked", false)
  }else{
    $(".todo-footer input").prop("checked", len1 === len2)
  }
  
  $(".todo-footer>span").html('<span>已完成' + len1 + '</span> / 全部' + len2)

})

//清除全部

$(".todo-footer button").on("click", function () {
  $(".todo-main input:checked").parent().parent().remove()

  var len1 = $(".todo-main input:checked").length
  var len2 = $(".todo-main input").length
  // console.log(len1)
  // console.log(len2)

  if (len1 === 0) {
    $(".todo-footer input").prop("checked", false)
  }else{
    $(".todo-footer input").prop("checked", len1 === len2)
  }

  
  $(".todo-footer>span").html('<span>已完成' + len1 + '</span> / 全部' + len2)
})