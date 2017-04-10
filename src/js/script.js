
//Show and hide list items for songs
function hide() {
    var listData = document.getElementById("list-items").getElementsByTagName("li");
    console.log("Len= "+listData.length);
    for (var i=3; i < listData.length; i++)
    {
      listData[i].className  = 'hide';
    }
    switchButtons('more');
};


function more() {
  var listData = document.getElementById("list-items").getElementsByTagName("li");
    console.log("Len= "+listData.length);
    for (var i=3; i < listData.length; i++)
    {
      listData[i].className  = 'more';
    }
    switchButtons('less');
};

function switchButtons(str) {
  if(str == 'more'){
      document.getElementById('showLessBtn').style.display = 'none';
      document.getElementById('showMoreBtn').style.display = 'block';
    }
    else
    {
    	document.getElementById('showMoreBtn').style.display = 'none';
      document.getElementById('showLessBtn').style.display = 'block';
    }
};



document.getElementById("showLessBtn").addEventListener("click", function(){
  hide();
});

document.getElementById("showMoreBtn").addEventListener("click", function(){
  more();
});


//toggle menu bar icon and desktop-menu
function toggleClass(className) {
  var elem=document.getElementById("desktop-menu"),
  iconElem=document.getElementById("mobile-menu");

  if(!elem.classList.contains("responsive")){
    elem.className += " responsive ";
    iconElem.children[0].style.display='none';
    iconElem.children[1].style.display='block';
  }
  else {
    elem.classList.remove("responsive");
    iconElem.children[1].style.display='none';
    iconElem.children[0].style.display='block';
  }
};
