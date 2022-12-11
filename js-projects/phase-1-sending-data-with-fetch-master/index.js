const submitData = (userName, UserEmail) => {
  const formData = {
    name: userName,
    email: UserEmail,
  };
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => document.querySelector('body').append(response.id))
    .catch(function (error) {
      document.querySelector('body').append(error.message);
    });
};

submitData('Steve', 'steve@steve.com');
