<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UsersController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private Security $security,
        private SerializerInterface $serializer,
    )
    {
        
    }

    #[Route('/api/users', name: 'app_users')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/UsersController.php',
        ]);
    }

    #[Route('/api/register', name: 'app_register_users', methods: ['POST']) ]
    public function register(Request $request, ValidatorInterface $validator, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        //$jsonData = json_decode($request->getContent());
        //$user = $this->userRepository->create($jsonData);
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $errors = $validator->validate($user);
        if($errors->count() > 0){
            return new JsonResponse(
                $serializer->serialize($errors,'json'), 
                JsonResponse::HTTP_BAD_REQUEST,
                [],
                true
            );
        }
        $em->persist($user);
        $em->flush();
        $user = $serializer->serialize($user, 'json', ['groups' => 'getUser']);
        return new JsonResponse(
            $user,
                Response::HTTP_OK,
                [],
                true
        );
    }
}
