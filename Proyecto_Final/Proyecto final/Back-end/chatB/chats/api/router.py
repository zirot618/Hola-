from rest_framework.routers import DefaultRouter
from chats.api.views import ChatsApiSet

router_chats = DefaultRouter()
router_chats.register(prefix= 'chats', basename= 'chats', viewset= ChatsApiSet)