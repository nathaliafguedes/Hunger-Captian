# Generated by Django 3.2.4 on 2022-09-19 23:44

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('img', cloudinary.models.CloudinaryField(max_length=255)),
                ('categories', models.CharField(choices=[('hot', 'Hot'), ('bagel', 'Bagel'), ('cold', 'Cold')], max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated Datetime')),
            ],
        ),
    ]
