import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const target = resolve("dist/index.js");
const shebang = "#!/usr/bin/env node\n";

const existing = await readFile(target, "utf8");
if (existing.startsWith(shebang)) process.exit(0);

await writeFile(target, shebang + existing, "utf8");

