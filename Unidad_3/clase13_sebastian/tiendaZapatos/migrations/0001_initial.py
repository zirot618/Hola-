# Generated by Django 4.1.3 on 2023-05-28 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Zapatos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marcaZ', models.CharField(max_length=255)),
                ('modeloZ', models.CharField(max_length=255)),
                ('coloZ', models.CharField(max_length=255)),
            ],
        ),
    ]