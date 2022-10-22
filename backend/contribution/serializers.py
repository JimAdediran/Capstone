from rest_framework import serializers
from .models import Contribution

class ContributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contribution
        fields = ['id', 'user', 'type', 'item', 'date_received', 'marked_for_shipment']
