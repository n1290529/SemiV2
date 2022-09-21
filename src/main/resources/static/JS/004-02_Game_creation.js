// $(document).ready(function () {
//     hsize = $(window).height() -85;
//     wsize = $(window).width()-78;
//     $("#blocklyDiv").css("height", hsize + "px");
//     $("#blocklyDiv").css("width", wsize  - parseInt($("#left_element").css("width")) + "px");
//     $("#left_element").css("height", hsize + "px");
//     console.log("load" + (wsize  - parseInt($("#left_element").css("width"))) + "px");
// });

function gc_resize() {
    hsize = $(window).height() - 64;
    wsize = $(window).width();

    if (wsize > 1266 && hsize <= 730) {
        // console.log("(window).resize_else_if=3")
        $("#main").css("width", "auto");
        $("#main").css("height", "");

        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");

        $("#tst").css("height", "670");
        $(".panel").css("height", "670");
        $("#blocklyDiv").css("height", "670");//一番上

        $("#left_element").css("height", "730");
        $("#property").css("height", 730 - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        $("#tst").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");

        $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        //Blocklyワークスペースのリサイズ
        let w = document.getElementById("blocklyDiv").style.width;
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.width = w;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定

    } else if (wsize > 1266) {
        // console.log("(window).resize_if=1");
        // console.log("wsize,hsize"+wsize,hsize);
        $("#main").css("width", "auto");
        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");

        $("#tst").css("height", hsize + "px");
        $(".panel").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("height", hsize - 60 + "px");

        $("#left_element").css("height", hsize + "px");
        // console.log(hsize);
        // console.log($("#field").height());
        $("#property").css("height", hsize - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        $("#tst").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");

        $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置

        //Blocklyワークスペースのリサイズ
        let w = document.getElementById("blocklyDiv").style.width;
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.width = w;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定

        // console.log("resize");
        //window.location.reload();
        //$.getScript("01tst.js");

    } else if (wsize <= 1266 && hsize > 730) {
        console.log("(window).resize_else_if=2")
        // console.log("wsize,hsize=" + wsize, hsize);

        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");

        $("#tst").css("height", hsize + "px");
        $("#tst").css("width", "624");
        $(".panel").css("height", hsize - 60 + "px");
        $(".panel").css("width", "624");
        $("#blocklyDiv").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("width", "624");

        $("#left_element").css("height", hsize + "px");
        $("#property").css("height", hsize - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        // $("#tst").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        // $("#blocklyDiv").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        // $(".panel").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");

        if (wsize < 654){
            $("#search").css("left", "200");//トップバーの検索欄の位置
        } else {
            $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        }

        //Blocklyワークスペースのリサイズ
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;
        document.getElementsByClassName("blocklySvg")[0].style.width = "624px";


        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定

    } else {
        console.log("(window).resize_else")
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");

        $("#tst").css("height", "670");
        $("#tst").css("width", "624");
        $(".panel").css("height", "670");
        $(".panel").css("width", "624");
        $("#blocklyDiv").css("height", "670");//一番上
        $("#blocklyDiv").css("width", "624");

        $("#left_element").css("height", "730");
        $("#property").css("height", 730 - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        if (wsize < 654){
            $("#search").css("left", "200");//トップバーの検索欄の位置
        } else {
            $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        }
        //Blocklyワークスペースのリサイズ
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;
        document.getElementsByClassName("blocklySvg")[0].style.width = "624px";

        // document.getElementsByClassName("blocklyMainBackground")[0].width=624;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    }
}

// var aaa=0

$(window).resize(function () {
    // aaa = window.setTimeout(gc_resize(), 1000);
    // console.log("aaa=" + aaa)
    // if (aaa > 1) {
    //     console.log("if___aaa=" + aaa)

    //     window.clearTimeout(aaa);
    //     aaa=0;
    //     console.log("if___aaa=" + aaa)
    //     gc_resize();
    // }
    gc_resize();
    gc_resize();

});
function Ready() {
    hsize = $(window).height() - 64;
    wsize = $(window).width();
    if (wsize > 1266 && hsize <= 730) {
        // console.log("Ready()_else_if=3")
        $("#main").css("width", "auto");
        $("#main").css("height", "");

        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");

        $("#tst").css("height", "670");
        $(".panel").css("height", "670");
        $("#blocklyDiv").css("height", "670");//一番上

        $("#left_element").css("height", "730");
        $("#property").css("height", 730 - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        $("#tst").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");

        $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        //Blocklyワークスペースのリサイズ
        // let w = document.getElementById("blocklyDiv").style.width;
        // let h = document.getElementById("blocklyDiv").style.height;
        $("#blocklyDiv").css("width", $("#tst").width());
        // $("#blocklyDiv").css("height", $("#tst").height());
        // document.getElementsByClassName("blocklySvg")[0].style.width = w;
        // document.getElementsByClassName("blocklySvg")[0].style.height = h;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定

    } else if (wsize > 1266) {
        // console.log("Ready()_if=1");
        // console.log(wsize);
        $("#main").css("width", "auto");
        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");

        $("#tst").css("height", hsize + "px");
        $(".panel").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("height", hsize - 60 + "px");

        $("#left_element").css("height", hsize + "px");
        // console.log(hsize);
        // console.log($("#field").height());
        $("#property").css("height", hsize - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        $("#tst").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#left_element").css("width")) - 8 + "px");

        $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置

        //Blocklyワークスペースのリサイズ
        // let w = document.getElementById("blocklyDiv").style.width;
        // let h = document.getElementById("blocklyDiv").style.height;
        $("#blocklyDiv").css("width", $("#tst").width());
        // $("#blocklyDiv").css("height", $("#tst").height());
        // document.getElementsByClassName("blocklySvg")[0].style.width = w;
        // document.getElementsByClassName("blocklySvg")[0].style.height = h;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定

        // console.log("resize");
        //window.location.reload();
        //$.getScript("01tst.js");

    } else if (wsize <= 1266 && hsize > 730) {
        console.log("Ready()_else_if=3")
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");

        $("#tst").css("height", hsize + "px");
        $(".panel").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("height", hsize - 60 + "px");

        $("#left_element").css("height", hsize + "px");
        $("#property").css("height", hsize - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        if (wsize < 654){
            $("#search").css("left", "200");//トップバーの検索欄の位置
        } else {
            $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        }

        //Blocklyワークスペースのリサイズ
        // let h = document.getElementById("blocklyDiv").style.height;
        $("#blocklyDiv").css("width", $("#tst").width());
        // document.getElementsByClassName("blocklySvg")[0].style.height = h;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定

    } else {
        console.log("Ready()_else")
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");

        $("#tst").css("height", "670");
        $(".panel").css("height", "670");
        $("#blocklyDiv").css("height", "670");//一番上

        $("#left_element").css("height", "730");
        $("#property").css("height", 730 - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() - 13 + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");

        if (wsize < 654){
            // $('.bx bx-search-alt-2')[0].css('overflow','auto');
            $("#search").css("width", "200");//トップバーの検索欄の位置
        } else {
            $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        }
        //Blocklyワークスペースのリサイズ
        // let h = document.getElementById("blocklyDiv").style.height;
        $("#blocklyDiv").css("width", $("#tst").width());
        // document.getElementsByClassName("blocklySvg")[0].style.height = h;

        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    }

}
// function Ready(){
//     hsize = $(window).height() -64;
//     wsize = $(window).width();
//     $("#tst").css("height", (hsize - 1 - 8) + "px");
//     $(".panel").css("height", hsize -50 + "px");
//     $("#blocklyDiv").css("height",  hsize -50 + "px");

//     $("#left_element").css("height", hsize + "px");
//     console.log(hsize);
//     console.log($("#field").height());
//     $("#property").css("height", hsize-50-$("#field").height() + "px");
//     $("#Oinformation").css("height", $("#property").height() + "px");
//     $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height()-15 + "px");
//     $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height()-15+ "px");
//     $("#objects_top").css("left", $("#objects").css("left")+"px");
//     $("#objects_top").css("top", $("#objects").css("top")+"px");
//     $("#BGinformation").css("height", $("#property").height() -5 + "px");
//     $("#BGinformation_top").css("height", $("#property").height() -5 + "px");
//     $("#BGinformation_top").css("left", $("#BGinformation").css("left")+"px");
//     $("#BGinformation_top").css("top", $("#BGinformation").css("top")+"px");

//     $("#tst").css("width", wsize  - parseInt($("#left_element").css("width"))-8 + "px");
//     $("#blocklyDiv").css("width", wsize  - parseInt($("#left_element").css("width"))-8 + "px");
//     $(".panel").css("width", wsize  - parseInt($("#left_element").css("width"))-8 + "px");

//     $("#search").css("left" , wsize/2 - $("#search").width()/2 + "px");//トップバーの検索欄の位置
//     console.log("Ready ok");
//     //window.location.reload();
//     //$.getScript("01tst.js");


// }