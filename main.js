$(function () {

     $("#btn-avadakedabra").dblclick(function () {
        alert("avada kedabra?");
        alert("seguro...");
        $("p4").show();
        $("p1").css({ "background-color": "red" });
       
    });

    $("#btn-ahoranomeven").click(function (){
        
        alert("puf, puf, puf...");
        
        $("p").css({ "background-color": "white" });
        $("p2, p4").hide();

    });

    $("#btn-ahorameves").click(function (){

        alert("puf, puf, puf...");
        $("p2").show();
     });


 $("#btn-ahorameves2").click(function (){

        
        $("p4").show();
        $("p4, p1").css({ "background-color": "red" });
     
     });

     


});

