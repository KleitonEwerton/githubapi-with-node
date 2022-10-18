import { port } from "./index";
import axios from "axios";
import { Router } from "express";
import { ContributorController } from "./controller/ContributorsController";
import tableContributors from "./view/tableContributors";
import baseLayout from "./view/baseLayout";
import tableMerges from "./view/tableMerges";
import tableBranches from "./view/tableBranches";

const routes = Router();

routes.get("/contributor/:name", new ContributorController().searchContributor);
routes.get(
  "/contributors/:organization/:repository/",
  new ContributorController().listContributors
);

routes.get("/:organization/:repository", (req, res) => {
  const { organization, repository } = req.params;

  axios
    .get(
      "http://localhost:" +
        port +
        "/contributors/" +
        organization +
        "/" +
        repository
    )
    .then((response) => {
      res.send(baseLayout([tableContributors(response.data["payload"]["contributors"]), tableBranches(response.data["payload"]["branchList"]),tableMerges(response.data["payload"]["mergeList"])]));
    })
    .catch(() => res.send("<div style='display:flex; flex-direction:column; min-height:100vh; align-items:center;justify-content:center; background-color:#323232;color:red;'> 404 <br> or <br> time exceeded </div>"));
});
export default routes;
