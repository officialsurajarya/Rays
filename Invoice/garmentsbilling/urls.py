"""
URL configuration for garmentsbilling project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from billingmachinapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home, name="home"),
    path('stocklist/',views.stocklist),
    path('stocklistform/',views.stocklistform),
    path('addgarments/',views.addgarments,name='addgarments'),
    path('billingform/',views.billingform,name='billingform'),
    path('shoplist/',views.shoplist), 
    path('shoplistform/',views.shoplistform),
    path('shoplistupdate/<id>/',views.shoplistupdate),
    path('category/',views.category), 
    path('categoryform/',views.categoryform),
    path('categoryupdate/',views.categoryupdate),
    path('customer/',views.customer, name="customer"), 
    path('customerform/',views.customerform), 
    path('orderdetails/',views.orderdetails),
    path('product/',views.product),
    path('productform/',views.productform),
    path('orderdetailsform/',views.orderdetailsform),
    path('login/',views.login),
    path('signup/',views.signup),
    path('forgetpassword/',views.forgetpassword),
    path('invoice/',views.invoice),
    path('updateProduct/<id>/',views.updateProduct),
    path('searchProduct/',views.searchProduct),
]
