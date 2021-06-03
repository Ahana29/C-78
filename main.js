var imgarray=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg"];
var namearray=["my family book","Subhajit Mukherjee","Swagata Mukherjee","Ahana Mukherjee","Aabir Mukherjee"];
var i=0;
function next_member(){
    if(i==5){
        i=0;
    }
    document.getElementById("family_member").src=imgarray[i];
    document.getElementById("member_name").innerHTML=namearray[i];
    i++;
}