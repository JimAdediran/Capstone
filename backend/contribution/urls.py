from django.urls import path
from contribution import views

urlpatterns = [
    path('<str:contribution_type>/<str:food>/', views.mark_shipment_not_food),
    path('get/', views.get_contribution)
]