<?php

require ("config/database.php");
require ("controller/database.php");
require ("controller/event.php");
require ("controller/error.php");

$event = new Event;
$error = new Err;