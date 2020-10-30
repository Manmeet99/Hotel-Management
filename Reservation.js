function myfun()
{
    var a = document.getElementById("first_name").value;
    var b = document.getElementById("last_name").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("mobile").value;
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
       var errEmail = document.getElementById("message3");
       errEmail.style.visibility = 'visible';
       return false;
    }
    if(d=="")
    {
       document.getElementById("message4").innerHTML="*Please Enter Mobile Number";
       var errNum = document.getElementById("message4");
       errNum.style.visibility = 'visible';
       return false;
    }
    if(isNaN(d))
    {
        document.getElementById("message4").innerHTML="*Please Enter Number Only";
        var errNum = document.getElementById("message4");
        errNum.style.visibility = 'visible';
        return false;
    }
    if(d.length<10 || d.length>10)
    {
        document.getElementById("message4").innerHTML="*Please Enter 10 Digits";
        var errNum = document.getElementById("message4");
        errNum.style.visibility = 'visible';
        return false;
    }
    else
    {
             var temp= confirm("Do You Want To Submit?");
             if(temp==true)
             {
              alert("Your Room Has Been Reserved!")
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

function hide4()
{
    var err= document.getElementById("message4");
    err.style.visibility = 'hidden';
}



function CheckFare(val)
{
 if(val=='1')
  document.getElementById("a").value="Rs.30,000/Day";
 if(val=='2')
  document.getElementById("a").value="Rs.25,000/Day";
 if(val=='3')
  document.getElementById("a").value="Rs.20,000/Day";
 if(val=='4')
  document.getElementById("a").value="Rs.15,000/Day";
 if(val=='5')
  document.getElementById("a").value="Rs.10,000/Day";
 if(val=='6')
  document.getElementById("a").value="Rs.8,000/Day";
}