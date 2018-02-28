
const fetchJson = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
  })
  if (!response.ok) {
    console.error(response.status)
    throw new Error(`Failed, HTTP status ${response.status}`)
  }
  return await response.json()
}


const createRepo = item => ({
  id: item.id,
  name: item.name,
  url: item.url,
  git_url: item.html_url
})

export const getGitHubRepos = async () => {
  const url = process.env.REACT_APP_API_REPOS
  const res = await fetchJson(url)
  return res.map(createRepo)
}

export const searchGitHubRepos = async (query) => {
  const url = `https://api.github.com/search/repositories?q=${query}`
  const res = await fetchJson(url)
  return res.items.map(createRepo)
}

export function getQuote() {
  function handleErrors(response) {
    if (!response.ok) {
      console.error(response)
      throw Error(response.statusText);
    }
    return response
  }
  return fetch('https://api.github.com/zen')
    .then(handleErrors)
    .then(response => response.text())
}

