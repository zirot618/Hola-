from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
        return HttpResponse("Hola, este es el mensaje de prueba para view.")

@csrf_exempt
def test_post(request):
    texto = 'Hello, "%s"' % request.body
    return HttpResponse(texto)