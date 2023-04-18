window.onload = function (){
    if (localStorage.getItem("city") === "UK"){
        const containerSocial = document.querySelector(
            ".footer__contacts_container"
        );
        containerSocial.innerHTML = `
        <a class="href__social" target="_blank" href="https://instagram.com/vapehub_uka?igshid=YmMyMTA2M2Y="><img src="../src/mdi_instagram.png" alt="" /> <p>@vapehub_uka</p></a>
        `;
    }else if (localStorage.getItem("city") === "Semey"){
        const containerSocial = document.querySelector(
            ".footer__contacts_container"
        );
        containerSocial.innerHTML = `
    <a class="href__social" target="_blank" href="https://instagram.com/vapehub_semey?igshid=YmMyMTA2M2Y="><img src="../src/mdi_instagram.png" alt="" /> <p>@vapehub_semey</p></a>

        `;
    }else if (localStorage.getItem("city") === "Pavlodar"){
        const containerSocial = document.querySelector(
            ".footer__contacts_container"
        );
        containerSocial.innerHTML = `
    <a class="href__social" target="_blank" href="https://instagram.com/vapehub_7182?igshid=YmMyMTA2M2Y="><img src="../src/mdi_instagram.png" alt="" /> <p>@vapehub_7182</p></a>

        `;
    }
}