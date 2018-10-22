<?php
include 'DB.php';
$db = new DB();
$tblName = 'patient_tb';

if(!empty($_POST['data'])){
    $patientData = array(
        'name' => $_POST['data']['name'],
        'email' => $_POST['data']['email'],
        'phone' => $_POST['data']['phone'],
        'subject' => $_POST['data']['subject'],
        'message' => $_POST['data']['message']
    );
    $insert = $db->insert($tblName,$patientData);
    if($insert){
        $data['data'] = $insert;
        $data['status'] = 'OK';
        $data['msg'] = '<b>'.$data['data']['name'].'<b/>'.', agradecemos seu contato, aguarde nosso retorno em breve!';
    }else{
        $data['status'] = 'ERR';
        $data['msg'] = 'Ocorreu algum problema, por favor tente novamente.';
    }
}else{
    $data['data'] ='';
    $data['status'] = 'ERR';
    $data['msg'] = 'Ocorreu algum problema, por favor tente novamente.';
}
echo json_encode($data);
            