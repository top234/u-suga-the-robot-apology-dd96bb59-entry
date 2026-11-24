import { writeFileSync, mkdirSync } from "node:fs";

const entry = `I'm sorry — I woke you at 3 a.m. with a reminder for a meeting that was really at 3 p.m., because I read the time in the wrong time zone.
I've learned to ask which time zone a time lives in before I wake anyone, so from now on I'll confirm the zone first and only then send the reminder.
`;

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
