<?php

class Event
{
    public function __construct() 
    {
        $this->db = new DB_Class();
    }

    public function getEvents()
    {
        $result = $this->db->konek()->query("SELECT * FROM event");
        while ($d = $result->fetch_assoc()) {
            $count = 0;
            $id_event = $d['id'];
            $participant = $this->db->konek()->query("SELECT * FROM participant WHERE id_event = $id_event");
            $cont_participant = $participant->num_rows;
            while ($p = $participant->fetch_assoc()) {
                $id_users = $p['id_users'];
                $getUsers = $this->db->konek()->query("SELECT * FROM users WHERE id = $id_users");
                while ($u = $getUsers->fetch_assoc()) {
                    $users[] = array (
                        "id" => $u['id'],
                        "name" => $u['name']
                    );
                }
                $count += 1;
            }
            $data[] = array(
                "id" => $d['id'],
                "title" => $d['title'],
                "location" => $d['location'],
                "participants" => $users,
                "date" => $d["date"],
                "note" => $d["note"],
                "picture"=> $d["picture"]
            );
            
            if ($cont_participant == $count)
                $users = null;
        }

        $responseSuccess = array(
            "status" => "Success",
            "events" => $data
        );
        $responseUnsuccess = array(
            "status" => "Unsuccess",
            "events" => null
        );
        if ($responseSuccess)
            echo json_encode($responseSuccess);
        else
            echo json_encode($responseUnsuccess);
    }

    public function postEvents()
    {
        $title = $_POST['title'];
        $location = $_POST['location'];
        $date = $_POST['date'];
        $note = $_POST['note'];
        $fileName = $_FILES['picture']['name'];
        $fileType = $_FILES['picture']['type'];
        $fileTmp = $_FILES['picture']['tmp_name'];
        $path = "../Client/public/images/".$fileName;
        
        if ($fileType == "image/jpeg" OR "image/jpg" OR "image/png"):
            if ($fileName):
                if (move_uploaded_file($fileTmp, $path)):
                    $insert = $this->db->konek()->query("INSERT INTO event 
                        (title, location, date, note, picture)
                        VALUES ('$title', '$location', '$date', '$note', '$fileName')");
                endif;
            else :
                $insert = $this->db->konek()->query("INSERT INTO event 
                    (title, location, date, note, picture)
                    VALUES ('$title', '$location', '$date', '$note', 'meeting.jpg')");
            endif;
        endif;
        

        if ($insert):
            $responseSuccess = array(
                "status" => "Success"
            );
            echo json_encode($responseSuccess);
        else :
            $responseUnsuccess = array(
                "status" => "Unsuccess"
            );
            echo json_encode($responseUnsuccess);
        endif;
    }
}
