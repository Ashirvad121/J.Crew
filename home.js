document.getElementById("help").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

// search js------------>
var arr=["men","women"];
// var input=document.querySelector("#search");
input.addEventListener("submit",search);

search();
function search(event){
    event.preventDefault();
    let input= document.querySelector("#search").value;
    // console.log(input)
    for(var i=0;i<input.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            var str=arr[j];
            for(var k=0;k<str.length;k++)
            {
                if(str[k]==input[i])
                {
                    console.log(str);
                }
            }
        }
    }
    
}
   



















//     input=input.toLowerCase();
//     let x=document.querySelectorAll(".category").value; 

//     for(var i=0; i<x.length; i++){
//         if(!x[i].innerHTML.toLowerCase().includes(input)){
//             x[i].style.display="none";
//         }
//         else{
//             x[i].style.display="block"
//         }
//     }
// }
