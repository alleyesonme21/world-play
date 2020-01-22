$(document).ready(function(){
    $("form#enter").submit(function(){
        var sentence = $("#sentence").val();

        sentence = sentence.split(" ");

       
        var newSentence = []; 

        sentence.forEach(function(x){
            if (x.length >= 3){
                newSentence.push(x);
            }
            // return newSentence;

        });

        newSentence.reverse();
        // sentence.join(newSentence);

        newSentence.forEach(function(x){
            sentence.push(x);
        })



        $(".sentence").text(sentence.slice(5,8));
        event.preventDefault();
    });
    
})
