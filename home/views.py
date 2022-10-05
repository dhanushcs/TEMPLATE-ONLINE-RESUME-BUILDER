from contextlib import nullcontext
from email import message
from pyexpat.errors import messages
from wsgiref.util import request_uri
from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User,auth
from django.db import IntegrityError


# Create your views here.
def index(request):
    return render(request,'index.html')
def signup(request):
     if request.method == 'POST':
         usernamesu=request.POST['username']
         emailsu=request.POST['email']
         passwordsu=request.POST['password']
        # passwordrepeat=request.POST['password']
         if(usernamesu==""):
            return HttpResponse("PLEASE ENTER EMPTY FEILDS")
              
         #create user
         user=User.objects.create_user(
            username=usernamesu,
            email=emailsu,
            password=passwordsu,
            #password_repeat=passwordrepeat
            ) 
        # myuser.save()
         print("user created")
         #messages.sucess(request,"your accout is sucessfully created..login to acess templates")
         return redirect('/login')
     else:
         return render(request,'signup.html')  
    #return HttpResponse("this is signup")    
     #return render(request,'signup.html')

def login(request):
   if request.method=='POST':
      username=request.POST['username']
      password=request.POST['password']
      
      user=auth.authenticate(username=username,password=password)

      if user is not None:
         auth.login(request,user)
         return redirect('/templates')
      else:
        #messages.info(request,'invalid')
        return redirect('/login')   

   # return HttpResponse("this is login") 
   else:
     return render(request,'login.html')

def templates(request):
    #return HttpResponse("this is templates")   
    return render(request,'templates.html')      
def templates1(request):
    #return HttpResponse("this is templates")   
    return render(request,'templates1.html')
def templates2(request):
    #return HttpResponse("this is templates")   
    return render(request,'templates2.html')    
         