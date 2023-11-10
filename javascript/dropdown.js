

const header = document.querySelector('header');
header.innerHTML = `

<div class="header">
<nav id=navbar>
    <ul>
    <li><a href="activities.html">Aktiviteter</a>
        <ul>
            <li><a href="activities.html#NTNUI">NTNUI</a></li>
            <li><a href="activities.html#Tur">Turmuligheter</a></li>
            <li><a href="activities.html#Sit">Sit Trening</a></li>
        </ul>
    </li>
    <li><a href="transport.html">Geografi</a>
        <ul>
        <li><a href="transport.html#buss">Kart</a></li>  
        <li><a href="transport.html#KartTrondheim">Transport</a></li>
        </ul>
    </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li><a href="traditions.html">Tradisjoner</a>
        <ul>
            <li><a href="traditions.html#Studentviser">Studentviser</a></li>
            <li><a href="traditions.html#Hvaer">Hva er dette?</a></li>
            <li><a href="traditions.html#Hvabetyr">Hva betyr det?</a></li>
            <li><a href="traditions.html#Fadderuka">Fadderuka</a></li>
            <li><a href="traditions.html#Utesteder">Utesteder</a></li>
        </ul>
        </li> 
    <li><a href="volunteerwork.html">Frivillige verv</a>
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
<a href="homepage.html">
<div class="logo">
    <img src="img/Logo.png" alt="Logo inkluderingsbanden" style="width: 250px">
</div>
</a>
<div class="flexcontainer" id="greenbox">
</div>

`;


const headerOffset = header.offsetTop;

document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');



    footer.innerHTML = `

<div class="footer">
  
    
<div class="text-footer">
<p class="f2">Inkluderingsbanden</p>
<p class="f1">
    Tlf +47 047 05 704<br>
    mail: inkluderingsbanden@gmail.com<br>
    Høgskoleringen 58, 7034 Trondheim
</p>
</div>


    <div class="text-footer">
    <p class="f1">
        <a href="contact.html">Kontakt oss</a> <br><br>
        <a href="aboutus.html">Om oss</a>
        </p>
    </div> 
    

</div>
  
`;


    const footerOffset = footer.offsetTop;
});


