export default {
	async fetch(request: Request): Promise<Response> {
		// Preserve the requested page and query string when changing the origin.
		const url = new URL(request.url);
		url.protocol = "https:";
		url.hostname = "info.sin.lc";
		url.port = "";

		return fetch(new Request(url.toString(), request));
	},
};
