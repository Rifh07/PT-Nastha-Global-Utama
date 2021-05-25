<?php

class Err
{
    public function getError()
    {
        $responseUnsuccess = array(
            "status" => "Unsuccess",
            "events" => null
        );
        echo json_encode($responseUnsuccess);
    }
}