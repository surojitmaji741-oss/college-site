<!--r('Content-Type: application/json');
if (isset($_GET["deptcode"])) {
    echo getcourse($_GET["deptcode"]);
}
function getDepartments()
{
    global $conn;
    $stmt = $conn->prepare("SELECT deptcode, dept_name FROM dept");
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($data);
}
echo getDepartments();
function connection(){
    $mysqli=new mysqli('localhost','admin','','svu');
    if($mysqli->connect_errno!=0){
        die("Error connecting database".$mysqli->connect_error);
    }
    return $mysqli;
}
function getdept()
{
    include("./connection.php");
    $stmt = $conn->prepare("SELECT course_name FROM course WHERE deptcode = :deptcode");
    $stmt->bindValue(':deptcode', $deptcode, PDO::PARAM_STR);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($data);
    $mysqli=connection();
    if(!$mysqli){
        return false;
    }
    $res=$mysqli->query("SELECT * FROM dept");
    $data = [];
    while($row = $res->fetch_assoc()){
        $data[]=$row;
    }
    return json_encode($data);
}
if (isset($_GET["deptcode"])) {
    echo getcourse($_GET["deptcode"]);
}
function getcourse($deptcode)
{
    $mysqli=connection();
    if(!$mysqli){
        return false;
    }
    $deptcode = htmlspecialchars($deptcode);
    $res=$mysqli->query("SELECT * FROM course WHERE deptcode='$deptcode'");
    $data = [];
    $stmt = $mysqli->prepare("SELECT * FROM course WHERE deptcode = ?");
    $stmt->bind_param("s", $deptcode);
    $stmt->execute();
    $res = $stmt->get_result();
    while($row = $res->fetch_assoc()){
        $data[]=$row;
    }
    return json_encode($data);
}
