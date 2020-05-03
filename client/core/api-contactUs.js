const create = (contactUs) => {
    return fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactUs)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
export default create