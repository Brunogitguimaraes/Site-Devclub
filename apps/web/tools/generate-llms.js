#!/usr/bin/env node

// Stub generator for optional LLMS assets.
// The build script references this file, but the current repository
// does not require it for the Vite build to complete successfully.
// If you need to generate LLMS files in the future, implement the logic here.

import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outDir = resolve(__dirname, '../src');

if (!existsSync(outDir)) {
  console.warn(`Warning: output directory ${outDir} does not exist. Skipping LLMS generation.`);
  process.exit(0);
}

const placeholderPath = resolve(outDir, 'llms-placeholder.json');
const content = JSON.stringify({ message: 'LLMS generation is currently a no-op stub.', createdAt: new Date().toISOString() }, null, 2);
writeFileSync(placeholderPath, content, 'utf8');
console.log(`LLMS stub completed: ${placeholderPath}`);
