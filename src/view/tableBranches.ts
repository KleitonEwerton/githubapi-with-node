
export default function tableBranches(props: Array<any>){

    return (
        "<div class='container'>"+
        "<h3>Branches: " + props.length +"</h3>" +
            "<div style='height:500px; max-width:99wh;overflow: scroll;'>"+
              "<table class='table'>"+
                "<thead>" +
                  "<tr>" +
                    "<th scope='col'>Nome</th>"+
                  "</tr>" +
                "</thead>" +
                "<tbody>" +
                  props.map(prop => ("<tr><td scope='row'>"+ prop + "</td></tr>")).join('') + 
                "</tbody>"+
              "</table>" +
            "</div>"+
        "</div>"
        );

}