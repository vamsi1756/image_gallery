var allimages=document.images
console.log(allimages);

for(i=0;i<=allimages.length-1;i++){
    allimages[i].src=`../tasks/gallery/${i}.jpg`
}
function fun(imagepath){
    document.getElementById("bigimage").style.backgroundImage=`url(${imagepath})`
}
fun(imagepath)