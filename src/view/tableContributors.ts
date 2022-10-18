
export default function tableContributors(props: Array<any>){
    
    return (
    "<div class='container'>"+
    "<h3>Contributors: " + props.length +"</h3>" +
        "<div style='height:500px; max-width:99wh;overflow: scroll;'>"+
          "<table class='table'>"+
            "<thead>" +
              "<tr>" +
                "<th scope='col'>ID</th>"+
                "<th scope='col'>Name</th>"+
                "<th scope='col'>Contributions</th>"+
                "<th scope='col'>GITHUB API</th>"+

              "</tr>" +
            "</thead>" +
            "<tbody>" +

              props.map(prop => "<tr><th scope='row'>"+ prop['id'] +"</th><td>"+ prop['login'] +"</td><td>"+ prop['contributions'] +"</td><td><a href="+ prop['url'] +">Complete</a></td></tr>").join('')+ 
              
            "</tbody>"+
          "</table>" +
        "</div>"+
    "</div>"
    );
    
}

