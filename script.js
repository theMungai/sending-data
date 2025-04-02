// Function to submit data
function submitData(name, email) {
    // Create the data to be sent in the request body
    const userData = {
      name: name,
      email: email
    };
  

    return fetch('http://localhost:3000/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      },
      body: JSON.stringify(userData) 
    })
    .then(response => response.json())
    .then(data => {
      
      document.body.innerHTML = `User ID: ${data.id}`;
    })
    .catch(error => {
      document.body.innerHTML = `Error: ${error.message}`;
    });
  }
