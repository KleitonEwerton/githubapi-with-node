import { Request, response, Response } from "express";
import * as dotenv from "dotenv";
import MergesController from "./MergesController";
dotenv.config();

const axios = require("axios");
const shell = require("shelljs");

export class ContributorController {
  async searchContributor(req: Request, res: Response) {
    const { name } = req.params;

    await axios
      .get("https://api.github.com/users/" + name)
      .then((response: any) => {
        return res.status(200).json({
          success: true,
          payload: response.data,
          message: "Founded",
        });
      })
      .catch((error: any) => {
        return res.status(404).json({
          success: false,
          payload: [],
          message: "Not found",
        });
      });
  }

  async listContributors(req: Request, res: Response) {
    const { organization, repository} = req.params;

    var list = { branchList: "", mergeList: "" };
    await axios

      .get(
        "https://api.github.com/repos/" +
          organization +
          "/" +
          repository +
          "/contributors"
      )
      .then((response: any) => {
        var contributors =  response.data.filter(
          (data: any) =>
            data.contributions > (process.env.MIN_QTN_CONTRIBUTORS || -1)
        );

        if (
          contributors.length > (process.env.MIN_COMMIT_PER_CONTRIBUTOR || 10)
        ) {
          list = new MergesController().searchMerges(organization, repository);
        }
        return res.status(200).json({
          success: true,
          payload: {
            contributors: contributors,
            branchList: list["branchList"],
            mergeList: list["mergeList"],
          },
          message:
            "Founded "
        });
      })
      .catch((error: any) => {
        return res.status(404).json({
          success: false,
          payload: [],
          message: "Error, Not LIST found {organization/repository}",
        });
      });
  }
}
