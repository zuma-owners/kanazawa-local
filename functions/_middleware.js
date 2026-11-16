// kanazawa-local.pages.dev（本番の pages.dev アドレス）で開かれたら、独自ドメインへ 301 で転送する。
// プレビュー用のアドレス（<hash>.kanazawa-local.pages.dev）は転送しない。
const OLD_HOST = 'kanazawa-local.pages.dev';
const NEW_ORIGIN = 'https://kanazawa-local.com';

export async function onRequest(context) {
	const url = new URL(context.request.url);
	if (url.hostname === OLD_HOST) {
		return Response.redirect(NEW_ORIGIN + url.pathname + url.search, 301);
	}
	return context.next();
}
