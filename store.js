 
.then(response => response.json())
.then(data => {
   
  data.forEach(film => {
    const filmElement = document.createElement('div')
     

    const poster = document.createElement('img')
    poster.src = film.poster
    filmElement.appendChild(poster)

    const title = document.createElement('h2')
    title.textContent = film.title
    filmElement.appendChild(title)

    const runtime = document.createElement('p')
    runtime.textContent = `${film.runtime} min`
    filmElement.appendChild(runtime)

    const showtime = document.createElement('p')
    showtime.textContent = `Showing at ${film.showtime}`
    filmElement.appendChild(showtime)

    const availableTickets = film.capacity - film.tickets_sold
    const tickets = document.createElement('p')
    tickets.textContent = `Available tickets: ${availableTickets}`
    filmElement.appendChild(tickets)

    document.body.appendChild(filmElement)
  })
})
.catch(error => console.error(error))
