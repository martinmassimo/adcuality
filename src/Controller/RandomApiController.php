<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use \Datetime;
    /**
     * @Route("/random/by-month/{year}", name="random-by-month", methods={"GET"}, requirements={"page": "\d+"})
     */

class RandomApiController 
{
    public function showRandomByMonth($year)
    {
        $arreglo = array();
        for ($i = 1; $i <= 12; $i++){
            $date = DateTime::createFromFormat('!m', $i)->format('M');
            $arreglo[$date] = random_int(0, 1000);
        }
        $response = new JsonResponse($arreglo);
        return $response;
    }

    public function showRandomByDay($month)
    {
        $days = cal_days_in_month(CAL_GREGORIAN, $month, 2019);
        $arreglo = array();
        for ($i = 1; $i <= $days; $i++){
            $arreglo[$i] = random_int(500, 800);
        }
        $response = new JsonResponse($arreglo);
        return $response;
    }
}