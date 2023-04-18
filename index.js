function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unauthorized Access');
      }
    })
    .then(data => {
      const newId = data.id;
      const idNode = document.createElement('p');
      idNode.innerHTML = newId;
      document.body.appendChild(idNode);
    })
    .catch(error => {
      const errorNode = document.createElement('p');
      errorNode.innerHTML = error.message;
      document.body.appendChild(errorNode);
    });
  }
  