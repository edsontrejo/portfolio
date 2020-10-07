<?
if(isset($_POST['submit'])){
    if(!empty($_POST[name])&&(!empty($_POST[email])&&(!empty($_POST[message])){
        $name = $_POST['name'];
        $email = 'edsontrejohdz@gmail.com';
        $message = $_POST['message'];
        $header = "From :noreply@example.com" . "\r\n";
        $header.= "Replu-To :noreply@example.com" . "\r\n";
        $header.= "X-Mailer: PHP/".phpversion();
        $mail = @mail($email,$message,$header);
        if($mail){
            alert('Submitted successfully');
        }
    }
}
?>