<?php
require ("config/index.php");
$path = trim($_SERVER['REQUEST_URI'], '/');
$path = parse_url($path, PHP_URL_PATH);

$routes =[
    'event' => 'views/event.php',
];

if (array_key_exists($path, $routes))
{
    require $routes[$path];
} else {
    // require "404.php";
}