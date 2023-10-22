function current_time() 
{
    //Today is 3:53pm on Wednesday, 3 November, 2027
    var new_date = new Date();
    var new_time = 'Time is '+(new_date.getHours()%12)+':'+new_date.getMinutes()+':'+new_date.getSeconds()+' on '+(new_date.getMonth()+1)+'-'+new_date.getDate()+'-'+new_date.getFullYear();
    document.getElementById("get_current_time").innerHTML = new_time;
}
setInterval(current_time, 1000); //activate function on one second interval.

function greeting() 
{
    var name = document.getElementById("name").value;
    var mood = document.getElementById("mood").value;
    document.getElementById("greeting").innerHTML ="The Laughing Pterodactyl welcomes you, "+name+"! We're glad you are doing "+mood;
}
function favorite_number() 
{
    var fav_number = document.getElementById("fav_number").value;
    fav_number = Math.abs(Math.round(fav_number));
    if (fav_number <= 0 || fav_number >10)
    { alert("Entered value is out of range, please try again.") }
    else
    {
        switch (fav_number) 
        {
            case 1:
                alert(fav_number+" side, is a monogon")
                break;
            case 2:
                alert(fav_number+" sides, is a bigon")
                break;
            case 3:
                alert(fav_number+" sides, is a triangle")
                break;
            case 4:
                alert(fav_number+" sides, is a quadrilateral")
                break;
            case 5:
                alert(fav_number+" sides, is a pentagon")
                break;
            case 6:
                alert(fav_number+" sides, is a hexagon")
                break;
            case 7:
                alert(fav_number+" sides, is a septagon")
                break;
            case 8:
                alert(fav_number+" sides, is a octagon")
                break;
            case 9:
                alert(fav_number+" sides, is a nonagon")
                break;
            case 10:
                alert(fav_number+" sides, is a decagon")
                break;
        }
    }
}
function button1()
{  
    var renameThis = prompt('What text would you like to add to the webpage?','Enter your message here.');
    var element = document.getElementById("function2_target");
    if (renameThis != "Enter your message here.")
    { element.textContent = renameThis; }
}
function button2() 
{
    var hexCode = "#" + Math.floor(Math.random()*16777215).toString(16);
    var element = document.getElementById("function1_target");
    element.style.backgroundColor = hexCode;
}
function button3() 
{
    var principal = prompt('Enter Principal Amount as Whole Number','(ex. 20000)');
    var rate = prompt('Enter Interest Rate as Decimal','(ex. 0.03 = 3%)');
    var time = prompt('Enter the Length in Years','(ex. 5, 10)');
    alert('The amount of interest you will pay is $'+Math.round((principal*rate*time)*100)/100);
}
function button4() 
{
    var randomNumber = Math.floor(Math.random() * 76) + 1;
    switch (randomNumber) {
        default:
            break;
        case 1:
            window.open("http://webpages.charlotte.edu/hachary1/itis3135/", "_blank");
            break;
            case 2:
            window.open("http://webpages.charlotte.edu/nadhika1/itis3135/", "_blank");
            break;
            case 3:
            window.open("http://webpages.charlotte.edu/rafriyie/itis3135/", "_blank");
            break;
            case 4:
            window.open("http://webpages.charlotte.edu/aalahme1/itis3135/", "_blank");
            break;
            case 5:
            window.open("http://webpages.charlotte.edu/ialzouby/itis3135/", "_blank");
            break;
            case 6:
            window.open("http://webpages.charlotte.edu/aames2/itis3135/", "_blank");
            break;
            case 7:
            window.open("http://webpages.charlotte.edu/aamir/itis3135/", "_blank");
            break;
            case 8:
            window.open("http://webpages.charlotte.edu/jarciga/itis3135/", "_blank");
            break;
            case 9:
            window.open("http://webpages.charlotte.edu/jbass36/itis3135/", "_blank");
            break;
            case 10:
            window.open("http://webpages.charlotte.edu/dbautist/itis3135/", "_blank");
            break;
            case 11:
            window.open("http://webpages.charlotte.edu/hbell12/itis3135/", "_blank");
            break;
            case 12:
            window.open("http://webpages.charlotte.edu/zbello/itis3135/", "_blank");
            break;
            case 13:
            window.open("http://webpages.charlotte.edu/jelbizri/itis3135/", "_blank");
            break;
            case 14:
            window.open("http://webpages.charlotte.edu/jboone31/itis3135/", "_blank");
            break;
            case 15:
            window.open("http://webpages.charlotte.edu/dbrisco1/itis3135/", "_blank");
            break;
            case 16:
            window.open("http://webpages.charlotte.edu/tbrow242/itis3135/", "_blank");
            break;
            case 17:
            window.open("http://webpages.charlotte.edu/tbusch1/itis3135/", "_blank");
            break;
            case 18:
            window.open("http://webpages.charlotte.edu/gcastil3/itis3135/", "_blank");
            break;
            case 19:
            window.open("http://webpages.charlotte.edu/gcawley/itis3135/", "_blank");
            break;
            case 20:
            window.open("http://webpages.charlotte.edu/achamb47/itis3135/", "_blank");
            break;
            case 21:
            window.open("http://webpages.charlotte.edu/pchang13/itis3135/", "_blank");
            break;
            case 22:
            window.open("http://webpages.charlotte.edu/cclar171/itis3135/", "_blank");
            break;
            case 23:
            window.open("http://webpages.charlotte.edu/fcontice/itis3135/", "_blank");
            break;
            case 24:
            window.open("http://webpages.charlotte.edu/sdo4/itis3135/", "_blank");
            break;
            case 25:
            window.open("http://webpages.charlotte.edu/jdormady/itis3135/", "_blank");
            break;
            case 26:
            window.open("http://webpages.charlotte.edu/gduale/itis3135/", "_blank");
            break;
            case 27:
            window.open("http://webpages.charlotte.edu/jfarr3/itis3135/", "_blank");
            break;
            case 28:
            window.open("http://webpages.charlotte.edu/lfrazee1/itis3135/", "_blank");
            break;
            case 29:
            window.open("http://webpages.charlotte.edu/jgaliger/itis3135/", "_blank");
            break;
            case 30:
            window.open("http://webpages.charlotte.edu/dgonza37/itis3135/", "_blank");
            break;
            case 31:
            window.open("http://webpages.charlotte.edu/bgoodri3/itis3135/", "_blank");
            break;
            case 32:
            window.open("http://webpages.charlotte.edu/bgorman3/itis3135/", "_blank");
            break;
            case 33:
            window.open("http://webpages.charlotte.edu/nhebert1/itis3135/", "_blank");
            break;
            case 34:
            window.open("http://webpages.charlotte.edu/jhowlade/itis3135/", "_blank");
            break;
            case 35:
            window.open("http://webpages.charlotte.edu/akarendy/itis3135/", "_blank");
            break;
            case 36:
            window.open("http://webpages.charlotte.edu/amabeny/itis3135/", "_blank");
            break;
            case 37:
            window.open("http://webpages.charlotte.edu/mkolibas/itis3135/", "_blank");
            break;
            case 38:
            window.open("http://webpages.charlotte.edu/kkoneni/itis3135/", "_blank");
            break;
            case 39:
            window.open("http://webpages.charlotte.edu/akoukunt/itis3135/", "_blank");
            break;
            case 40:
            window.open("http://webpages.charlotte.edu/jkruege4/itis3135/", "_blank");
            break;
            case 41:
            window.open("http://webpages.charlotte.edu/jlee341/itis3135/", "_blank");
            break;
            case 42:
            window.open("http://webpages.charlotte.edu/aleng/itis3135/", "_blank");
            break;
            case 43:
            window.open("http://webpages.charlotte.edu/amccomas/itis3135/", "_blank");
            break;
            case 44:
            window.open("http://webpages.charlotte.edu/nmedehal/itis3135/", "_blank");
            break;
            case 45:
            window.open("http://webpages.charlotte.edu/mmeem/itis3135/", "_blank");
            break;
            case 46:
            window.open("http://webpages.charlotte.edu/cmeiden1/itis3135/", "_blank");
            break;
            case 47:
            window.open("http://webpages.charlotte.edu/jmudani/itis3135/", "_blank");
            break;
            case 48:
            window.open("http://webpages.charlotte.edu/cnaylor2/itis3135/", "_blank");
            break;
            case 49:
            window.open("http://webpages.charlotte.edu/dngo5/itis3135/", "_blank");
            break;
            case 50:
            window.open("http://webpages.charlotte.edu/cnwosu2/itis3135/", "_blank");
            break;
            case 51:
            window.open("http://webpages.charlotte.edu/jpate152/itis3135/", "_blank");
            break;
            case 52:
            window.open("http://webpages.charlotte.edu/jpell1/itis3135/", "_blank");
            break;
            case 53:
            window.open("http://webpages.charlotte.edu/tpeople5/itis3135/", "_blank");
            break;
            case 54:
            window.open("http://webpages.charlotte.edu/wperry12/itis3135/", "_blank");
            break;
            case 55:
            window.open("http://webpages.charlotte.edu/mpetter2/itis3135/", "_blank");
            break;
            case 56:
            window.open("http://webpages.charlotte.edu/lphinne1/itis3135/", "_blank");
            break;
            case 57:
            window.open("http://webpages.charlotte.edu/asamsomb/itis3135/", "_blank");
            break;
            case 58:
            window.open("http://webpages.charlotte.edu/gscardo/itis3135/", "_blank");
            break;
            case 59:
            window.open("http://webpages.charlotte.edu/eschwalb/itis3135/", "_blank");
            break;
            case 60:
            window.open("http://webpages.charlotte.edu/zshahza1/itis3135/", "_blank");
            break;
            case 61:
            window.open("http://webpages.charlotte.edu/cshultz/itis3135/", "_blank");
            break;
            case 62:
            window.open("http://webpages.charlotte.edu/kspark12/itis3135/", "_blank");
            break;
            case 63:
            window.open("http://webpages.charlotte.edu/asteene/itis3135/", "_blank");
            break;
            case 64:
            window.open("http://webpages.charlotte.edu/ksuthar3/itis3135/", "_blank");
            break;
            case 65:
            window.open("http://webpages.charlotte.edu/mtadess1/itis3135/", "_blank");
            break;
            case 66:
            window.open("http://webpages.charlotte.edu/rthomp89/itis3135/", "_blank");
            break;
            case 67:
            window.open("http://webpages.charlotte.edu/stiwar16/itis3135/", "_blank");
            break;
            case 68:
            window.open("http://webpages.charlotte.edu/ltran28/itis3135/", "_blank");
            break;
            case 69:
            window.open("http://webpages.charlotte.edu/ivargasc/itis3135/", "_blank");
            break;
            case 70:
            window.open("http://webpages.charlotte.edu/aveerade/itis3135/", "_blank");
            break;
            case 71:
            window.open("http://webpages.charlotte.edu/jvelasc3/itis3135/", "_blank");
            break;
            case 72:
            window.open("http://webpages.charlotte.edu/awaghcho/itis3135/", "_blank");
            break;
            case 73:
            window.open("http://webpages.charlotte.edu/ewilki24/itis3135/", "_blank");
            break;
            case 74:
            window.open("http://webpages.charlotte.edu/kwils178/itis3135/", "_blank");
            break;
            case 75:
            window.open("http://webpages.charlotte.edu/ewurste1/itis3135/", "_blank");
            break;
            case 76:
            window.open("http://webpages.charlotte.edu/jogundel/itis3135/", "_blank");
            break;
    }
}