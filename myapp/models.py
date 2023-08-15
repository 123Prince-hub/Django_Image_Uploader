from django.db import models
from django.core.validators import FileExtensionValidator

# Create your models here.
class Category(models.Model):
    category = models.CharField(max_length=50, default='category', null=True)    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class Image(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    photo = models.ImageField(upload_to="images", validators=[FileExtensionValidator(['jpg', 'jpeg', 'png'])])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return self.photo
    
