let base = "https://fdnd.directus.app/items"
let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
let url = base + endpoint

let deLijst = document.querySelector("article ul")

getMinorMensen()

async function getMinorMensen() {
    
    let response = await fetch(url)

    let responseJson = await response.json()

    let deMinorMensen = responseJson.data

    deMinorMensen.forEach( deMinorMens => {
        console.log(deMinorMens)

        let deMinorMensHTML =
        `<article>
            <ul>
              <li>
                <h2>${deMinorMens.name}</h2>
                </li>
            </ul>
        </article>`
    deLijst.insertAdjacentHTML("beforeend", deMinorMensHTML)
    })
}