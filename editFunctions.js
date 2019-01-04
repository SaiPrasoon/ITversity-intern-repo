var edit,save,discard,summary,oldText;
    function funcEdit(tagid){
        if(tagid=="summary"){
            save=document.getElementById("Save_Summary");
            discard=document.getElementById("Discard_Summary");       }
        else{
            save=document.getElementById("Save_Exp");
            discard=document.getElementById("Discard_Exp");
        }
        save.style.color="blue";
        save.style.backgroundColor="white";
        save.style.borderColor="white";
        save.disabled=false;

        discard.style.color="red";
        discard.style.backgroundColor="white";
        discard.style.borderColor="white";
        discard.disabled=false;

        summary=document.getElementById(tagid);
        oldText=summary.innerHTML;
        summary.contentEditable=true;

    }

    function funcDiscard(){
        summary.contentEditable=false;
        summary.innerHTML=oldText;
        rollBackButtons();
    }

    function funcSave(){
        summary.contentEditable=false;
        var newText=summary.innerHTML;
        summary.innerHTML=newText;
        oldText=newText;
        
    }

     function rollBackButtons(){
         
        save.style.color=transparent;
        save.style.backgroundColor=transparent;
        save.style.borderColor=transparent;
        save.disabled=true;

        discard.style.color=transparent;
        discard.style.backgroundColor=transparent;
        discard.style.borderColor=transparent;
        discard.disabled=true;
    }
