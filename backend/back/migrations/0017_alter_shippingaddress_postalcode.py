# Generated by Django 4.2 on 2023-05-18 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0016_alter_shippingaddress_postalcode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shippingaddress',
            name='postalCode',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
