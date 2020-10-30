function abc()
{
    var temp= confirm("Do You Want To Submit?");
    if(temp==true)
        {
            alert("Thank You For Your Feedback!");
        }
    else
        {
            return false;
        }
}

function uncheck()
{
    var ele1 = document.getElementsByName("rate");
    for(var a=0;a<ele1.length;a++)
        {
            ele1[a].checked = false;
        }
        
    var ele2 = document.getElementsByName("rated");
    for(var b=0;b<ele2.length;b++)
        {
            ele2[b].checked = false;
        }    
    
    var ele3 = document.getElementsByName("rater");
    for(var c=0;c<ele3.length;c++)
        {
            ele3[c].checked = false;
        }
        
    var ele4 = document.getElementsByName("rat");
    for(var d=0;d<ele4.length;d++)
        {
            ele4[d].checked = false;
        }    
    
    var ele5 = document.getElementsByName("raty");
    for(var e=0;e<ele5.length;e++)
        {
            ele5[e].checked = false;
        }
        
    var ele6 = document.getElementsByName("rati");
    for(var f=0;f<ele6.length;f++)
        {
            ele6[f].checked = false;
        }

    var ele7 = document.getElementsByName("ratin");
    for(var g=0;g<ele7.length;g++)
        {
            ele7[g].checked = false;
        }
        
    var ele8 = document.getElementsByName("rating");
    for(var h=0;h<ele8.length;h++)
        {
            ele8[h].checked = false;
        }
        
    var ele9 = document.getElementsByName("gen");
    for(var i=0;i<ele9.length;i++)
        {
            ele9[i].checked = false;
        }
        
    var ele10 = document.getElementsByName("nam");
    for(var j=0;j<ele10.length;j++)
        {
            ele10[j].checked = false;
        }    
    
    var ele11 = document.getElementsByName("ra");
    for(var k=0;k<ele11.length;k++)
        {
            ele11[k].checked = false;
        }
        
    var ele12 = document.getElementsByName("na");
    for(var l=0;l<ele12.length;l++)
        {
            ele12[l].checked = false;
        }    
    
    var ele13 = document.getElementsByName("cha");
    for(var m=0;m<ele13.length;m++)
        {
            ele13[m].checked = false;
        }
        
    var ele14 = document.getElementsByName("char");
    for(var n=0;n<ele14.length;n++)
        {
            ele14[n].checked = false;
        }
}

function def()
{
    var temp= prompt("Enter Your Unique GuestID","");
    if(temp==null||temp=="")
    {
        alert("GuestID can't be Blank");
        def();
        return false;
    }
    else
    {
        return true;
    }
}