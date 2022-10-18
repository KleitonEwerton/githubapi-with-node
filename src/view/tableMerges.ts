export default function tableMerges(props: Array<any>) {
  return (
    "<div class='container'>" +
    "<h3>Merges: " + props.length +"</h3>" +
    "<div style='height:500px; max-width:99wh;overflow: scroll;'>" +
    "<table class='table'>" +
    "<thead>" +
    "<tr>" +
    "<th scope='col'>Hash </th>" +
    "<th scope='col'>Author Name</th>" +
    "<th scope='col'> Committer Name " +
    "<th scope='col'>  Parents hashes -> Author</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    props
      .map(
        (prop) =>
          "<tr> " +
          "<td>" + prop[0] + "</td>" +
          "<td>" + prop[1] + "</td>" +
          "<td>" + prop[2] + "</td>" +
          "<td>" + prop[3].map((e:any) => e +"<br>").join('') + "</td>" +
          " </tr>"
      ).join("") +
    "</tbody>" +
    "</table>" +
    "</div>" +
    "</div>"
  );
}
