from django import forms
from .models import *

class ImageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['title'].widget.attrs['placeholder'] = 'Image Title'            

    class Meta:
        model = Image
        fields = '__all__'
        labels = {'photo':'', 'title':'Title'}

    
    
    
    