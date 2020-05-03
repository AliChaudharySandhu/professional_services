const create = (params, credentials, shop) => {
  return fetch('/api/category/by/'+ params.userId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: shop
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const list = () => {
  return fetch('/api/category', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const listByOwner = (params, credentials) => {
  return fetch('/api/category/by/'+params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const read = (params, credentials) => {
  return fetch('/api/category/' + params.shopId, {
    method: 'GET'
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const update = (params, credentials, shop) => {
  return fetch('/api/category/' + params.shopId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: shop
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const remove = (params, credentials) => {
  return fetch('/api/category/' + params.shopId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

export {
  create,
  list,
  listByOwner,
  read,
  update,
  remove
}
