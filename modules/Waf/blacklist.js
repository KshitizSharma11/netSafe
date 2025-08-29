import fs from "fs";
import path from "path";

const fpath = path.join(process.cwd(), "utils", "countries.txt");

let blocked_countries = new Set();

function readFile() {
  fs.readFile(fpath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const countries = data
      .split("\n")
      .map((line) => line.trim().toUpperCase())
      .filter((line) => line);

    blocked_countries = new Set(countries);
    console.log("Blocked countries loaded:", blocked_countries);
  });
}

readFile();

function isBlocked(country) {
  return blocked_countries.has(country);
}

export { isBlocked };
