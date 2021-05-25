<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
header('content-type: application/json; charset=utf-8');
 
$method = $_SERVER['REQUEST_METHOD'];
