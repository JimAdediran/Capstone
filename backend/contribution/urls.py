from django.urls import path
from contribution import views

urlpatterns = [
    path('<str:products>/', views.mark_shipment_not_food),
    path('get/', views.get_contribution)
]