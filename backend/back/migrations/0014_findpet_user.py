# Generated by Django 4.2 on 2023-05-17 16:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('back', '0013_findpet_category_findpet_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='findpet',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
