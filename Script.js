//console.log("Hello!")

document.querySelector('.next').addEventListener('click',next);
function next() {
    //Get current image
    var imgNo = document.querySelector('.slider').dataset.img; // 1 , 2
    //Get next image no
    if (imgNo == 9) {
        var nextNo = 1
    }else{

        var nextNo = parseInt(imgNo) + 1;
    }
    //Get next image src
    var src = nextNo + ".jpg";
    //Change image
    document.querySelector('img').src = src;
    //Change data-Attribute
    document.querySelector('.slider').dataset.img = nextNo;
}

document.querySelector('.prev').addEventListener('click',prev);
function prev() {
    var imgNo = document.querySelector('.slider').dataset.img;
    if (imgNo == 9){
        var prevNo = 1
        if (imgNo == 1) {
            var prevNo  = 9
            var prevNo = parseInt(imgNo) - 1;
        }

    }else{
        var prevNo = 9
        prevNo = parseInt(imgNo) - 1;
    }
    var src = prevNo + ".jpg";
    document.querySelector('img').src = src;
    document.querySelector('.slider').dataset.img = prevNo;
    
}

//MODAL
document.querySelector('.bg-modal').style.display = 'flex';

document.querySelector('.close').addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display = "none";
    
});

//COLLAPSER
var accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
        
    };
    
}
var person = window.prompt ("Please Enter your Name");
    if (person != null)
    {
      
       document.write( "<p class='personname'>Welcome!" + " " +person+"<p>");
        
    }
























