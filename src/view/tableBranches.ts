
export default function tableBranches(props: Array<any>){

    return (
        "<div class='container'>"+
            "<div style='max-height:500px; max-width:99wh;overflow: scroll;'>"+
              "<table class='table'>"+
              "Branches: " + props.length+
                "<thead>" +
                  "<tr>" +
                    "<th scope='col'>Nome</th>"+
                    
    
                  "</tr>" +
                "</thead>" +
                "<tbody>" +
    
                  props.map(prop => ("<tr><th scope='row'>"+ prop + "</th></tr>")).join('') + 
                "</tbody>"+
              "</table>" +
            "</div>"+
        "</div>"
        );

}