// 旧URL（kanazawa-after-dark.pages.dev）のCloudflareプロジェクトでビルドされたときだけ、
// すべてのページを新URL（kanazawa-local.pages.dev）へ 301 で転送する _redirects を書き出す。
// 新しいプロジェクトや手元のビルドでは何もしない。
import { writeFileSync } from 'node:fs';

const url = process.env.CF_PAGES_URL ?? '';
if (url.includes('kanazawa-after-dark')) {
	writeFileSync('dist/_redirects', '/* https://kanazawa-local.pages.dev/:splat 301\n');
	console.log('old-url-redirect: wrote dist/_redirects for', url);
}
