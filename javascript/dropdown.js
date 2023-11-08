

const header = document.querySelector('header');
header.innerHTML = `

<div class="header">
<nav id=navbar>
    <ul>
    <li><a href="#">Aktiviteter</a>
        <ul>
            <li><a href="activities.html#NTNUI">NTNUI</a></li>
            <li><a href="activities.html#Tur">Turmuligheter</a></li>
            <li><a href="activities.html#Sit">Sit Trening</a></li>
        </ul>
    </li>
    <li><a href="#">Geografi</a>
        <ul>
        <li><a href="transport.html#buss">Kart</a></li>  
        <li><a href="transport.html#KartTrondheim">Transport</a></li>
        </ul>
    </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li><a href="#">Tradisjoner</a>
        <ul>
            <li><a href="traditions.html#Studentviser">Studentviser</a></li>
            <li><a href="traditions.html#Hvaer">Hva er dette?</a></li>
            <li><a href="traditions.html#Hvabetyr">Hva betyr det?</a></li>
            <li><a href="traditions.html#Fadderuka">Fadderuka</a></li>
            <li><a href="traditions.html#Utesteder">Utesteder</a></li>
        </ul>
        </li> 
    <li><a href="#">Frivillige verv</a>
        <ul>
        <li><a href="volunteerwork.html#linje">Linjeforeninger</a></li>
        <li><a href="volunteerwork.html#uka">Uka</a></li>
        <li><a href="volunteerwork.html#samf">Samfundet</a></li>
        <li><a href="volunteerwork.html#faglig">Faglige verv</a></li>
        </ul>
    </li>
    </ul>
</nav>
</div>
<div class="logo">
    <img src="img/Logo.png" alt="Logo inkluderingsbanden" style="width: 250px">
</div>

`;





const footer = document.querySelector('footer');
footer.innerHTML = `
<div class="footer">
    <p>Inkluderingsbanden</p>
</div>
`;
const headerOffset = header.offsetTop; 
const footerOffset = footer.offsetTop;
