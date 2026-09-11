export default {
	async fetch(request: Request): Promise<Response> {
		/**
		 * Replace `remote` with the host you wish to send requests to
		 */
		const remote = "https://sites.google.com/view/sinlc";

		return await fetch(remote, request);
	},
};
