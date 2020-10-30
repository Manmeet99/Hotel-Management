function myfun()
{
    var a = document.getElementById("GuestId").value;
    var b = document.getElementById("Password").value;
    var c = document.getElementById("mobile").value;
    if(a=="")
    {
       var errFirstName = document.getElementById("message1");
       errFirstName.style.visibility = 'visible';
       return false;
    }
    if(b=="")
    {
       var errLastName = document.getElementById("message2");
       errLastName.style.visibility = 'visible';
       return false;
    }
    if(c=="")
    {
       document.getElementById("message3").innerHTML="*Please Enter Mobile Number";
       var errNum1 = document.getElementById("message3");
       errNum1.style.visibility = 'visible';
       return false;
    }
    if(isNaN(c))
    {
        document.getElementById("message3").innerHTML="*Please Enter Number Only";
        var errNum2 = document.getElementById("message3");
        errNum2.style.visibility = 'visible';
        return false;
    }
    if(c.length<10 || c.length>10)
    {
        document.getElementById("message3").innerHTML="*Please Enter 10 Digits";
        var errNum3 = document.getElementById("message3");
        errNum3.style.visibility = 'visible';
        return false;
    }
    else
    {
             var temp= confirm("Do You Want To Submit?");
             if(temp==true)
             {
              alert("You have successfully submitted");
             }
             else
                {
                  return false;
                }
    }
}

function hide1()
{
    var err= document.getElementById("message1");
    err.style.visibility = 'hidden';
}

function hide2()
{
    var err= document.getElementById("message2");
    err.style.visibility = 'hidden';
}

function hide3()
{
    var err= document.getElementById("message3");
    err.style.visibility = 'hidden';
}




