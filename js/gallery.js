
onload = init();


function init()
{	curImage = document.getElementById("photo");
	counter=1;
	galleryStarter = setInterval("startGallery()", 3000);
}


function startGallery()
{	curImage.src = "images/"+counter+".jpg";
	counter ++;
	if (counter > 5)
	{	counter = 1
	}
}