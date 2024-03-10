
async function fetchGitHubUser() {
  const username = document.getElementById('username').value.trim();

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información del usuario');
    }
    const userData = await response.json();
    displayProfile(userData);
    fetchUserRepos(username);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchUserRepos(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener los datos del usuario.');
    }
    const reposData = await response.json();
    displayRepos(reposData);
  } catch (error) {
    userDataContainer.innerHTML = `<p>Error: ${error.message}</p>`;

  }
}

function displayProfile(userData) {
  document.getElementById('avatar').src = userData.avatar_url;
  document.getElementById('username').textContent = userData.login;
  document.getElementById('bio').textContent = userData.bio || 'Biografía no disponible';
  document.getElementById('location').textContent = `Ubicación: ${userData.location || 'No disponible'}`;
  document.getElementById('repos').textContent = `Repositorios: ${userData.public_repos}`;
  document.getElementById('followers').textContent = `Seguidores: ${userData.followers}`;
  document.getElementById('following').textContent = `Siguiendo: ${userData.following}`;
}

function displayRepos(reposData) {
  const reposList = document.getElementById('reposList');
  reposList.innerHTML = '';
  reposData.forEach(repo => {
    const li = document.createElement('li');
    li.textContent = repo.name;
    reposList.appendChild(li);
  });
}

document.getElementById('buscar').addEventListener('click', fetchGitHubUser);


