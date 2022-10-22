from django.db import models
from authentication.models import User

# Create your models here.

#item field based on 4 item types

item_choices = (
    ('money', 'MONEY'),
    ('services', 'SERVICES'),
    ('products', 'PRODUCTS'),
    ('food', 'FOOD'),
)

class Contribution(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=8, choices=item_choices)
    item = models.CharField(max_length=255)
    date_received = models.DurationField()
    marked_for_shipment = models.BooleanField()
