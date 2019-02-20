// Author: Max Radke
// Date: Febuary 17, 2019
// Class: CS 290
// Description: Sal doesn't have fancy meme editting software, so he has to use
//              Javascript, CSS, and html. Making him tonight's... Bigest loser.


// Background Switch
var BackMenu = document.getElementById('Selector');
BackMenu.onclick = function()
{
    var BackSelect = BackMenu.selectedIndex;
    switch(BackMenu.options[BackSelect].text)
    {
        case '--Choose Background--':
            ChangeBackgroundColor(255, 255, 255);
            break;
        case 'Red':
            ChangeBackgroundColor(255, 0, 0);
            break;
        case 'Blue':
            ChangeBackgroundColor(0, 0, 255);
            break;
        case 'Green':
            ChangeBackgroundColor(0, 255, 0);
            break;
        case 'Black':
            ChangeBackgroundColor(0, 0, 0);
            break;
        default:
            console.log("!!!SWITCH ERROR!!!");
            break;
    }
}
function ChangeBackgroundColor(Red, Green, Blue)
{
    var BackColor = 'rgb(' + Red + ',' + Green + ',' + Blue + ')';
    document.body.style.backgroundColor = BackColor;
}

var RainButton = document.getElementById('Rainbow');
RainButton.onclick = function ()
{
    var Red = 0;
    var Green = 0;
    var Blue = 0;

    const frequency = .3;
    (function theLoop (x) { //Delayed loop
        setTimeout(function () {
            //Loop arguments
            Red   = Math.sin(frequency*x + 0) * 127 + 128;
            Green = Math.sin(frequency*x + 2) * 127 + 128;
            Blue  = Math.sin(frequency*x + 4) * 127 + 128;
            ChangeBackgroundColor(Red, Green, Blue);
            console.log("x = " + x);
            //End loop arguments
            if (--x) {          //If i > 0, keep going
                theLoop(x);       //Call the loop again, and pass it the current value of i
            }
        }, 60); //Delay time
    })(100); //Total loops
}


// Img size changer
let SalImg = document.getElementById('SalImg');
let ImgSize = 460;
let Increasing = true;
const MaxSize = 920;

function ChangeImgSize()
{
    if(ImgSize < 460)
    {
        Increasing = true;
    }
    if(ImgSize > MaxSize)
    {
        Increasing = false;
    }

    if(Increasing == true)
    {
        SalImg.width = ImgSize;
        ImgSize += 2;
    }
    else
    {
        SalImg.width = ImgSize;
        ImgSize -= 2;
    }
}

setInterval(ChangeImgSize, 10);