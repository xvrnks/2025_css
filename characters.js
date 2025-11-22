async function getResponce() {
    let responce = await fetch("characters.json")
    let content = await responce.text()
    content = JSON.parse(content)

    let node_for_insert = document.getElementById("node_for_insert")
    node_for_insert.innerHTML = '' // Очищаем контейнер

    content.forEach((item, key) => {
        node_for_insert.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <div class="card h-100 d-flex flex-column">
                <img class="card-img-top responsive-img mt-2" 
                     src="${item.img}" 
                     alt="${item.title}"
                     style="height: 200px; object-fit: contain;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text flex-grow-1">${item.description}</p>
                    <p class="card-text"><strong>Возраст: ${item.number}</strong></p>
                    <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                    <div class="mt-auto">
                    </div>
                </div>
            </div>
        </div>
        `
    })
}
getResponce()