// api definitions
const apiProfile = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5002'
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


// set of APIs for Agent Collections
export const getAll = () =>
  fetch(`${apiProfile}/api/dba`, { headers })
    .then(res => res.json())
    .then((data) => {
      return data
    })

export const remove = (contact) =>
  fetch(`${apiProfile}/api/dba/${contact}`, {
    method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact)

export const create = (body) =>
  fetch(`${apiProfile}/api/dba`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

export const updateProfile = (body) =>
    fetch(`${apiProfile}/api/dba`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => data)

    // set of APIs for Client Collection
    export const getAllClients = () =>
      fetch(`${apiProfile}/api/dbc`, { headers })
        .then(res => res.json())
        .then((data) => {
          return data
        })

    export const removeClient = (contact) =>
      fetch(`${apiProfile}/api/dbc/${contact}`, {
         method: 'DELETE', headers })
        .then(res => res.json())
        .then(data => data.contact)

    export const createClient = (body) =>
      fetch(`${apiProfile}/api/dbc`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(res => res.json())

    export const updateClient = (body) =>
        fetch(`${apiProfile}/api/dbc`, {
          method: 'POST',
          headers: {
            ...headers,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => data)
