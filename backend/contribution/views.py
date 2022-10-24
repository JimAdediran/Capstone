from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Contribution
from .serializers import ContributionSerializer
from rest_framework import status
from rest_framework.response import Response
from datetime import date, datetime, timedelta

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_contribution(request):
    contributions = Contribution.objects.all()
    serializer = ContributionSerializer(contributions, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def mark_shipment_not_food(request, contribution_type, food):
    contributions = Contribution.objects.filter(contribution_type!=food)
    serializer = ContributionSerializer(contributions, many=True)
    str_d1= datetime.now()
    str_d2= Contribution.date_received
    d1=datetime.strptime(str_d1, "%Y/%m/%d")
    d2=datetime.strptime(str_d2, "%Y/%m/%d")
    delta= d1-d2
    if delta.days >= 90:
        return Contribution.marked_for_shipment == True 
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def mark_shipment_food(request, contribution_type, food):
    contributions = Contribution.objects.filter(contribution_type==food)
    serializer = ContributionSerializer(contributions, many=True)
    delta = date - Contribution.date_received
    if delta.days >= 30:
        return Contribution.marked_for_shipment == True
    return Response(serializer.data, status=status.HTTP_200_OK)
