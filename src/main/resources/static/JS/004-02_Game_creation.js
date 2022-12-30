function gc_resize() {
    hsize = $(window).height() - 64;
    wsize = $(window).width();
    if (wsize > 1266 && hsize <= 730) {
        $("#main").css("width", "auto");
        $("#main").css("height", "");
        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");
        $("#left_element").css("height", "670");
        $(".panel").css("height", "670");
        $("#blocklyDiv").css("height", "670");//一番上
        $("#right_element").css("height", "730");
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
        $("#left_element").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        //Blocklyワークスペースのリサイズ
        let w = document.getElementById("blocklyDiv").style.width;
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.width = w;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    } else if (wsize > 1266) {
        $("#main").css("width", "auto");
        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");
        $("#left_element").css("height", hsize + "px");
        $(".panel").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("height", hsize - 60 + "px");
        $("#right_element").css("height", hsize + "px");
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

        $("#left_element").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");

        $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置

        //Blocklyワークスペースのリサイズ
        let w = document.getElementById("blocklyDiv").style.width;
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.width = w;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    } else if (wsize <= 1266 && hsize > 730) {
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");
        $("#left_element").css("height", hsize + "px");
        $("#left_element").css("width", "624");
        $(".panel").css("height", hsize - 60 + "px");
        $(".panel").css("width", "624");
        $("#blocklyDiv").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("width", "624");

        $("#right_element").css("height", hsize + "px");
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
        //Blocklyワークスペースのリサイズ
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;
        document.getElementsByClassName("blocklySvg")[0].style.width = "624px";
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    } else {
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");
        $("#left_element").css("height", "670");
        $("#left_element").css("width", "624");
        $(".panel").css("height", "670");
        $(".panel").css("width", "624");
        $("#blocklyDiv").css("height", "670");//一番上
        $("#blocklyDiv").css("width", "624");
        $("#right_element").css("height", "730");
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
        //Blocklyワークスペースのリサイズ
        let h = document.getElementById("blocklyDiv").style.height;
        document.getElementsByClassName("blocklySvg")[0].style.height = h;
        document.getElementsByClassName("blocklySvg")[0].style.width = "624px";
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    }
}

$(window).resize(function () {
    gc_resize();
    gc_resize();
});
function Ready() {
    hsize = $(window).height() - 64;
    wsize = $(window).width();
    if (wsize > 1266 && hsize <= 730) {
        $("#main").css("width", "auto");
        $("#main").css("height", "");
        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");
        $("#left_element").css("height", "670");
        $(".panel").css("height", "670");
        $("#blocklyDiv").css("height", "670");//一番上
        $("#right_element").css("height", "730");
        $("#property").css("height", 730 - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() -8 + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");
        $("#left_element").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", $("#left_element").width());
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    } else if (wsize > 1266) {
        $("#main").css("width", "auto");
        $(".home-section").css("width", "");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "");
        $("#left_element").css("height", hsize + "px");
        $(".panel").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("height", hsize - 60 + "px");
        $("#right_element").css("height", hsize + "px");
        $("#property").css("height", hsize - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() -8 + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");
        $("#left_element").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $("#blocklyDiv").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $(".panel").css("width", wsize - parseInt($("#right_element").css("width")) - 8 + "px");
        $("#search").css("left", wsize / 2 - $("#search").width() / 2 + "px");//トップバーの検索欄の位置
        $("#blocklyDiv").css("width", $("#left_element").width());
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    } else if (wsize <= 1266 && hsize > 730) {
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");
        $("#left_element").css("height", hsize + "px");
        $(".panel").css("height", hsize - 60 + "px");
        $("#blocklyDiv").css("height", hsize - 60 + "px");
        $("#right_element").css("height", hsize + "px");
        $("#property").css("height", hsize - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() - 8 + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");
        $("#blocklyDiv").css("width", $("#left_element").width());
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    } else {
        $("#main").css("width", "1266");
        $(".home-section").css("width", "auto");
        $(".home-section").css("height", "auto");
        $(".header").css("width", "1266");
        $("#left_element").css("height", "670");
        $(".panel").css("height", "670");
        $("#blocklyDiv").css("height", "670");//一番上
        $("#right_element").css("height", "730");
        $("#property").css("height", 730 - 60 - $("#field").height() + "px");
        $("#Oinformation").css("height", $("#property").height() - 8 + "px");
        $("#objects").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("height", $("#Oinformation").height() - $("#OJ_Info").height() + "px");
        $("#objects_top").css("left", $("#objects").css("left") + "px");
        $("#objects_top").css("top", $("#objects").css("top") + "px");
        $("#BGinformation").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("height", $("#property").height() - 8 + "px");
        $("#BGinformation_top").css("left", $("#BGinformation").css("left") + "px");
        $("#BGinformation_top").css("top", $("#BGinformation").css("top") + "px");
        //Blocklyワークスペースのリサイズ
        $("#blocklyDiv").css("width", $("#left_element").width());
        $(".load").css("margin", "11px 0px 0px " + ($("#blocklyDiv").width() - 450 - 8 - 80 - 80) + "px");//loadボタンのマージン設定
    }

}