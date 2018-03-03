from django.conf.urls import include, url
from rest_framework import routers

from .api import NoteViewSet

router = routers.DefaultRouter()
router.register('notes', NoteViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]
