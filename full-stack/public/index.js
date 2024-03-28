const fetchUsersButton = document.querySelector('#fetchUsers');
const outputElement = document.querySelector('#usersOutput');
const maxUsersElement = document.querySelector('#maxUsers');

async function getUsers() {
	outputElement.textContent = 'Loading...';

	const fetchURL = new URL('/api/users', window.location.origin);
	fetchURL.searchParams.set('maxUsers', maxUsersElement.value);

	const users = await fetch(fetchURL.href);
	if (users.ok) {
		const usersJson = await users.json();
		let output = '<ul>';
		for (const user of usersJson) {
			output += `<li>${user.name.title} ${user.name.first} ${user.name.last}</li>`;
		}
		output += '</ul>';
		outputElement.innerHTML = output;
	}
}

fetchUsersButton.addEventListener('click', getUsers);
