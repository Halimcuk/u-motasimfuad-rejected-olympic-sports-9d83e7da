import { mkdirSync, writeFileSync } from "node:fs";

// One original rejected Olympic sport: a sprint to recall a password
// changed yesterday, with a disqualification twist at the end.
// Deterministic: the same single line is written on every run.
const line = "100m Password Reset: sprinters race to remember a password they changed yesterday, disqualified for writing it down.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
