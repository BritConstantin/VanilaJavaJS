async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/users');
        const users = await response.json();
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
fetchUsers();
