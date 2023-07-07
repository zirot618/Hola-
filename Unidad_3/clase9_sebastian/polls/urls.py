from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("post", views.test_post, name="post"),

]