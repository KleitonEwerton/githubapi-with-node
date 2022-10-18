export default function baseLayout(props:Array<any>){
    return "<!DOCTYPE html>"+
    "<html lang='en'>"+
    "<head>"+
        "<meta charset='UTF-8'>"+
        "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Contributors</title>"+
        "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>"+
        "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script>"+
        "<style>*{margin:0;padding:0;color:white;}body{display:flex; flex-direction:column; min-height:100vh; align-items:center;justify-content:center; background-color:#323232;} h3{text-transform:uppercase;margin-bottom:10px;}</style>"+
    "</head>"+
    "<body>"+
        props.map(prop=>"<div style='margin: 50px; border: 1px solid dark;'" + prop + "</div>") +
    "</body>"+
    "</html>"
}