async function getUsersWithFewFollowers() {
    const followersThreshold = 2;
    const apiUrl = 'https://api.github.com/search/users?q=followers:>=' + followersThreshold;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Obtener la lista de usuarios
      const users = data.items.map(user => user.login);
      
      // Agregar usuarios a la lista en el documento HTML
      const userListElement = document.getElementById('userList');
      users.forEach(user => {
        const p = document.createElement('p');
        p.textContent = user;
        userListElement.appendChild(p);
      });
    } catch (error) {
      console.error('Ocurrió un error al obtener los usuarios:', error);
    }
  }
  
  getUsersWithFewFollowers();
  

/* 
LINKS DE USO

Usuarios con un número específico de seguidores:
https://api.github.com/search/users?q=followers:5

Usuarios que tengan al menos un número específico de repositorios:
https://api.github.com/search/users?q=repos:5

Usuarios que tengan un nombre específico:
https://api.github.com/search/users?q=nombreUsuario

Repositorios de un usuario específico:
https://api.github.com/users/nombreUsuario/repos

Estrellas en un repositorio específico:
https://api.github.com/repos/nombreUsuario/nombreRepositorio/stargazers


*/