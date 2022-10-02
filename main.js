var images = ["https://sm.ign.com/t/ign_latam/screenshot/default/hakai2_c7su.600.jpg","https://static.wikia.nocookie.net/meme/images/e/ee/Originaltroll.png/revision/latest?cb=20181024174336", "mi mama.png" , "https://static.wikia.nocookie.net/dragonball/images/7/7c/Beerus_DBS_Broly_Artwork.png/revision/latest?cb=20180812215445&path-prefix=es", "https://static.wikia.nocookie.net/dragonball/images/7/7c/Beerus_DBS_Broly_Artwork.png/revision/latest?cb=20180812215445&path-prefix=es", "https://i.pinimg.com/originals/fd/5c/09/fd5c09d2ce4ec228b749621f8924c93c.jpg"];
           
var names = ["mi familia","mi perra", "mi mama", "mi papa", "mi hermano", "yo"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 6
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
