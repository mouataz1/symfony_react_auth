<?php
namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationFailureEvent;
use Symfony\Component\HttpFoundation\JsonResponse;

class JwtAuthenticationFailureListener
{
    public function onJwtAuthenticationFailure(AuthenticationFailureEvent $event)
    {
        $data = [
            'message' => 'Email or password incorrect !',
        ];

        $response = new JsonResponse($data, 401);

        $event->setResponse($response);
    }
}