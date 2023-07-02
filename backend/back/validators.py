import re
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

def validate_email(email):
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        raise ValidationError("Enter a valid email address.")
    if User.objects.filter(email=email).exists():
        raise ValidationError("A user with that email address already exists.")
