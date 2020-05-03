const signin = (user) => {
  return fetch('/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const signout = () => {
  return fetch('/auth/signout/', {
    method: 'GET',
  }).then(response => {
      return response.json()
  }).catch((err) => console.log(err))
}
const forgotpass = (user) =>{
  return fetch('/auth/signin/:forgot-password/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })    .then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}
const resetpass = (password) =>{
  return fetch('/auth/reset-password/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(password)
  })    .then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

export {
  signin,
  signout,
  forgotpass,
  resetpass
}
