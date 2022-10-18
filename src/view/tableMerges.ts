export default function tableMerges(props: Array<any>) {
  return (
    "<div class='container'>" +
    "<div style='max-height:500px; max-width:99wh;overflow: scroll;'>" +
    "<table class='table'>" +
    "Merges: " +
    props.length +
    "<thead>" +
    "<tr>" +
    "<th scope='col'>Hash </th>" +
    "<th scope='col'>Author Name</th>" +
    "<th scope='col'> Committer Name " +
    "<th scope='col'>  Parents hashes</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    props
      .map(
        (prop) =>
          "<tr> " +
          prop.map((p: any) => "<td>" + p + "</td>").join("") +
          " </tr>"
      )
      .join("") +
    "</tbody>" +
    "</table>" +
    "</div>" +
    "</div>"
  );
}
