import { mkdir, copyFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(root, '../institucional');
await mkdir(path.join(root, 'app'), { recursive: true });
await mkdir(path.join(root, 'components'), { recursive: true });
for (const file of ['page.tsx', 'layout.tsx', 'globals.css']) {
  await copyFile(path.join(source, 'app', file), path.join(root, 'app', file));
}
await copyFile(path.join(source, 'components/theme-toggle.tsx'), path.join(root, 'components/theme-toggle.tsx'));
await cp(path.join(source, 'public'), path.join(root, 'public'), { recursive: true });
