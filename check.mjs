import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const routes=['/','/ebook/','/programs/','/resources/','/about/','/contact/','/terms/','/privacy/','/refund/'];
for(const route of routes){const html=await readFile('dist'+route+'index.html','utf8');assert(html.includes('<h1>'));assert(html.includes('og:title'));assert(html.includes('name="description"'));for(const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)){const p=match[1];await access('dist'+p+(p.endsWith('/')?'index.html':''));}}
console.log('PASS: all 9 page entrypoints, internal links, assets, headings and metadata');
