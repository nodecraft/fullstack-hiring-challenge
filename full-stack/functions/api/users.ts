export const onRequestGet: PagesFunction = async (context) => {
	const url = new URL(context.request.url);

	// retrieve 10 users by default, allow override with maxUsers query param
	let maxUsers = 10;
	if (url.searchParams.has('maxUsers')) {
		maxUsers = Number.parseInt(url.searchParams.get('maxUsers') as string);
	}

	// loop and get users
	const users = [];
	for (let i = 0; i < maxUsers; i++) {
		const userRes = await fetch('https://randomuser.me/api/');
		const user = await userRes.json<any>();
		users.push(user.results[0]);
	}
	return Response.json(users);
};
