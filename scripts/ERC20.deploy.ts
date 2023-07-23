import { deploy } from "./deployUtils";

deploy("MiiToken", ["1000000"]).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
