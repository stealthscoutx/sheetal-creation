document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`;
    document.getElementById('student-list').appendChild(listItem);
    document.getElementById('student-form').reset();
});
