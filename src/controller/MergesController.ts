import { exec } from "child_process";

const shell = require("shelljs");

export default class MergesController {
  searchMerges(organization: String, repository: String) {
    shell.exec(
      "git clone https://github.com/" + organization + "/" + repository + ".git"
    );
    let mergeList, branchList;
    try {
      mergeList = shell
        .exec(
          "cd " +
            repository +
            ' && git pull && git log --all --merges --pretty=format:"%H|||%an|||%cn|||%P" '
        )
        .split("\n");
    } catch (e) {
      console.log(e);
    }
    try {
      branchList = shell
        .exec("cd " + repository + " && git branch --all")
        .split("\n");
    } catch (e) {
      console.log(e);
    }

    mergeList.shift(); //Remove o item mais a esqueda da lista, que no caso é o comentário do git pull
    branchList.shift(); //Remove o item mais a esqueda da lista, que no caso é o comentário da brach atual

    let merges = mergeList.map((e: String) => e.split("|||")); //Separa cada um dos merges
    merges.forEach((e: any) => (e[3] = e[3].split(" ")));
    merges.forEach((e: any) => {
      let sd = [","];
      e[3].map((f: any) => {
        sd.push(
          shell.exec(
            "cd " +
              repository +
              ' &&  git show --pretty=format:"%H->%an" ' +
              f +
              " -s"
          )
        );
      });

      sd.shift(); //remove o primeiro item, no caso a virgula 
      e[3] = sd;
    });

    return { branchList: branchList, mergeList: merges };
  }
}
