fetch('https://api.github.com/users/dimascamillo/repos')
.then(response => response.json())
.then(data => {
  
  data.forEach(e=> {
    let listRepos = document.getElementById('listRepos');

    let itenRepos = document.createElement('li')

    let linkRepost = document.createElement('a');

    listRepos.appendChild(itenRepos)
    itenRepos.appendChild(linkRepost)
    linkRepost.innerText = e.name;
    linkRepost.setAttribute('target', '_blank')
    linkRepost.setAttribute('href', e.svn_url)
  })
})

