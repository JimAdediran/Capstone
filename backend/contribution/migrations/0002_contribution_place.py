# Generated by Django 4.0.4 on 2022-10-23 22:22

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0001_initial'),
        ('contribution', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contribution',
            name='place',
            field=models.ForeignKey(default="", on_delete=django.db.models.deletion.CASCADE, to='place.place'),
            preserve_default=False,
        ),
    ]