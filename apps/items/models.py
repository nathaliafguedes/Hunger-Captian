from django.db import models
from cloudinary.models import CloudinaryField
from config.constants import *

# Create your models here.

class Item(models.Model):
    name = models.CharField(
        "Name", max_length = 100, blank = False, 
    )
    price = models.DecimalField(
        "Price",
        decimal_places = 2,
        max_digits = 6,
        blank = False,
    )
    img = CloudinaryField(
        "Image",
        blank = False,
        null = False,
    )
    categories = models.CharField(
        "Category",
        max_length = 100, blank = False,
        choices = CATEGORIES,
    )
    created_at = models.DateTimeField(
        'Created Datetime', 
        blank=True, 
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime',
         blank=True,
         auto_now=True
    )
    status = models.CharField(
        'Status', blank=False, default='draft', max_length=50, db_index=True, choices=STATUS
    )
   