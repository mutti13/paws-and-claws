# Generated by Django 4.2 on 2023-05-17 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0011_alter_findpet_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='findpet',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
