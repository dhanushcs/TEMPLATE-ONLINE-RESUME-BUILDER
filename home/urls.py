from django.contrib import admin
from django.urls import path,include
from home import views
urlpatterns = [
    path("", views.index,name='home'),
    path("signup", views.signup,name='signup'),
    path("login", views.login,name='login'),
    path("templates", views.templates,name='templates'),
   # path("signup", views.handlesignup,name='handlesignup'),
    path("templates1", views.templates1,name='templates1'),
    path("templates2", views.templates2,name='templates2'),
]