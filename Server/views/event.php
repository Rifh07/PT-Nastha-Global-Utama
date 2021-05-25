<?php 
    require_once ("config/header.php");

    if ($method == "GET")
        $event->getEvents();
    elseif ($method == "POST") 
        $event->postEvents();
    else
        $error->getError();

        