
cur = [...document.querySelectorAll(".span")]

cur.map((e) => {
    e.addEventListener("click", (evt) => {
        curtidas = [...document.querySelectorAll(".curtidas")]
        var curtiu = evt.target.textContent
        curtiu = parseInt(curtiu)
        console.log(curtiu++)
        evt.target.textContent = curtiu++
    })
})


