const list = () =>{
    return fetch('/api/category', {
        method: 'GET'
    }).then(response =>{
        return response.json()
    }).catch(err=>{console.log(err)})
}
export {
    list
}