const openModal=document.querySelector(".first-section__btn"),modal=document.querySelector(".modal"),closeModal=document.querySelector(".modal__close"),bgModal=document.querySelector(".modal__bg"),spanTimesClicked=document.querySelector(".modal__span"),resetClicks=document.querySelector(".modal__reset-clicks"),modalTable=document.querySelector(".modal__table"),timesClicked=localStorage.getItem("timesClicked");let counter=timesClicked;openModal.addEventListener("click",()=>{modal.classList.add("active"),5<++counter&&resetClicks.classList.add("active-reset-btn"),localStorage.setItem("timesClicked",counter),spanTimesClicked.textContent=counter,modalTable.childNodes.length<4&&getData()}),closeModal.addEventListener("click",()=>{modal.classList.remove("active"),resetClicks.classList.remove("active-reset-btn")}),bgModal.addEventListener("click",()=>{modal.classList.remove("active"),resetClicks.classList.remove("active-reset-btn")}),resetClicks.addEventListener("click",()=>{counter=0,localStorage.setItem("timesClicked",counter),spanTimesClicked.textContent=counter,resetClicks.classList.remove("active-reset-btn")});const getData=()=>{modalTable.innerHTML='<div class="loader"></div> ',fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>{let c="";c+=`
                <tr>
                    <th scope="col">Imię i Nazwisko</th>
                    <th scope="col">Email</th>
                    <th scope="col">Adres</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Nazwa firmy</th>
                </tr>
            `,e.forEach(e=>{var t=""+e.address.city+e.address.street+e.address.suite;c+=`
                <tr>
                        <td>${e.name}</td>
                        <td>${e.email}</td>
                        <td>${t}</td>
                        <td>${e.phone}</td>
                        <td>${e.company.name}</td>
                </tr>
                `}),modalTable.innerHTML=c})};