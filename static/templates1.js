function addNewWEField(){
    // console.log("adding new field"):
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
 
    let weob=document.getElementById("we");
    let weAddbuttonob=document.getElementById("weAddbutton");
    
    weob.insertBefore(newNode,weAddbuttonob);
 }
 
 function addNewAQField(){
     let newNode=document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("weField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
  
     let aqob=document.getElementById("aq");
     let aqaddbuttonob=document.getElementById("aqaddbutton");
     
     aqob.insertBefore(newNode,aqaddbuttonob);
 
 }
 // generating cv
 function generatecv(){
    // console.log("hene")
    let nameField=document.getElementById("nameField").value;
    let namet=document.getElementById("namet");
    namet.innerHTML=nameField;
    document.getElementById("namet2").innerHTML=nameField;
    document.getElementById("contactt").innerHTML=document.getElementById("contactField").value;
    //address
    document.getElementById("addresst").innerHTML=document.getElementById("addressField").value;
    document.getElementById("emailt").innerHTML=document.getElementById("emailField").value;
    document.getElementById("fbt").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instat").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedt").innerHTML=document.getElementById("linkedField").value;
    //objectives
    document.getElementById("obt").innerHTML=document.getElementById("obField").value;
    //work exp
    let wes=document.getElementsByClassName("weField");
    let str="";
     for(let e of wes){
         str=str+ `<li> ${e.value} </li>`
         document.getElementById("wet").innerHTML=str;
     }
     let aq=document.getElementsByClassName("aqField");
    let str1="";
     for(let e of aq){
         str1=str1+ `<li> ${e.value} </li>`
         document.getElementById("aqt").innerHTML=str;
     }
      //code for image
      let file=document.getElementById("imgfeild").files[0];
      //console.log("pngfile")
      let reader=new FileReader();
    //let files=file.length;
    //console.log(files);
     // if(file.value==0)
        // alert("choose a pic")
      reader.readAsDataURL(file);
      //set img into template profile pic
      reader.onloadend=function(){
         document.getElementById("imgt").src=reader.result;     
     };
 
 
     document.getElementById("cv-form").style.display="none";
     document.getElementById("cv-templates").style.display="block";
 
     //printcv
     
 }
 function printcv(){
     window.print();
 }
 function registor(){
    let username=document.getElementById("username").value;
    if(username==""){
        alert("fills the Empty feilds")
    }
 }