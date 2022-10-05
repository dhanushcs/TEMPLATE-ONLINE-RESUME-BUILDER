//funtion for education
function addNewEDField(){
    // console.log("adding new field"):
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",'2');
 
    let edob=document.getElementById("ed");
    let edAddbuttonob=document.getElementById("edAddbutton");
    
    edob.insertBefore(newNode,edAddbuttonob);
 }
 //fubntion for we
 function addNewWEField(){
    // console.log("adding new field"):
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",'2');
 
    let weob=document.getElementById("we");
    let weAddbuttonob=document.getElementById("weAddbutton");
    
    weob.insertBefore(newNode,weAddbuttonob);
 }
  //fubntion for technical skills feild
  function addNewTEField(){
    // console.log("adding new field"):
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("teField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",'1');
 
    let teob=document.getElementById("te");
    let teAddbuttonob=document.getElementById("teaddbutton");
    
    teob.insertBefore(newNode,teAddbuttonob);
 }
 //fubntion for technical skills feild
 function addNewPRField(){
    // console.log("adding new field"):
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",'1');
 
    let teob=document.getElementById("pr");
    let teAddbuttonob=document.getElementById("praddbutton");
    
    teob.insertBefore(newNode,teAddbuttonob);
 }
 // generating cv
 function generatecv(){
    // console.log("hene")
     //code for image
      let file=document.getElementById("imgfeild").files[0];
     //console.log("pngfile")
     let reader=new FileReader();

     reader.readAsDataURL(file);
     //set img into template profile pic
     reader.onloadend=function(){
        document.getElementById("imgt").src=reader.result;     
    };
    // name
    let nameField=document.getElementById("nameField").value;
    let namet=document.getElementById("namet");
    namet.innerHTML=nameField;

    //contact
    document.getElementById("contactt").innerHTML=document.getElementById("contactField").value;

   //email
   document.getElementById("emailt").innerHTML=document.getElementById("emailField").value;
   //links
   document.getElementById("fbt").innerHTML=document.getElementById("fbField").value;
   document.getElementById("instat").innerHTML=document.getElementById("instaField").value;
   document.getElementById("linkedt").innerHTML=document.getElementById("linkedField").value;
   //objective
   document.getElementById("obt").innerHTML=document.getElementById("obField").value;
   //education
   let eds=document.getElementsByClassName("edField");
   let str="";
    for(let e of eds){
        str=str+ `<li> ${e.value} </li>`
        document.getElementById("edt").innerHTML=str;
    }
   //work experine
   let wes=document.getElementsByClassName("weField");
   let str1="";
    for(let e of wes){
        str1=str1+ `<li> ${e.value} </li>`
        document.getElementById("wet").innerHTML=str1;
    }

     //technical skilss
     let tes=document.getElementsByClassName("teField");
     let str3="";
      for(let e of tes){
          str3=str3+ `<li> ${e.value} </li>`
          document.getElementById("tet").innerHTML=str3;
      }



//projects
    let aq=document.getElementsByClassName("prField");
   let str2="";
    for(let e of aq){
        str2=str2+ `<li> ${e.value} </li>`
        document.getElementById("prt").innerHTML=str2;
    }


    //internship
     //email
   //document.getElementById("itt").innerHTML=document.getElementById("itField").value;


   //languages
   document.getElementById("lat").innerHTML=document.getElementById("laField").value;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-temp1").style.display="block";

 }

 function printcv(){
    window.print();
}

 