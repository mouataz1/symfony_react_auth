<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ExeptionSubscriber implements EventSubscriberInterface
{
    public function onKernelExeption($event): void
    {
        $exeption = $event->getThrowable();
        if($exeption instanceof HttpException){
            $data = [
                'status' => $exeption->getStatusCode(),
                'message' => $exeption->getMessage()
            ];
            $event->setResponse(new JsonResponse($data));
        }else{
            $data = [
                'status' => 500,
                'message' => $exeption->getMessage()
            ];
            $event->setResponse(new JsonResponse($data));
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            'kernel.exeption' => 'onKernelExeption',
        ];
    }
}
