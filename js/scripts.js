$(document).ready(function() {
    $("form#things").submit(function(event) {
        event.preventDefault();
        var thing1 = $("#1").val();
        var thing2 = $("#2").val();
        var thing3 = $("#3").val();
        var thing4 = $("#4").val();

        var array = [thing1, thing2, thing3, thing4]
        console.log(thing1);
        console.log(thing2);
        console.log(thing3);
        console.log(thing4);
        console.log(array);
        var newArray = [];
        newArray.push(array[1]);

        $(".outputText").append(newArray);
         console.log("this is the new array: " + newArray);
         $(".output").show();
    });
});