<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class QueryController extends AbstractController
{
    #[Route('/query', name: 'app_query')]
    public function index(): Response
    {
        return $this->render('query/index.html.twig', [
            'controller_name' => 'QueryController',
        ]);
    }
}
