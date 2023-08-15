from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('delete_image/<int:uid>/', delete_image, name='delete_image'),
    path('update_image/', update_image, name='update_image'),
    # path('<str:array>/', delete_multiple_img, name='delete_multiple_img'),
    path('delete_multiple_img/', delete_multiple_img, name='delete_multiple_img'),
]
