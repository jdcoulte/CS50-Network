from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("post", views.post, name="post"),
    path("users/<str:username>", views.view_user, name="view_user"),
    path("follow/<int:followerid>/<int:followeeid>", views.follow, name="follow"),
    path("unfollow/<int:followerid>/<int:followeeid>", views.unfollow, name="follow")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
