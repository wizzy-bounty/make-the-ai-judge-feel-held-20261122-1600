import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The night train is warm and nearly empty. Beyond the window, dark fields drift past, slow and unhurried. The seat hums faintly through your shoulders. Nobody expects you anywhere until morning. The conductor passed a while ago — a small nod, nothing asked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
