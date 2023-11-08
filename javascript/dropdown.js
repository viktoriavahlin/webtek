

const header = document.querySelector('header');
header.innerHTML = `

<div class="header">
<nav id=navbar>
    <ul>
    <li><a href="#">Aktiviteter</a>
        <ul>
            <li><a href="#">NTNUI</a></li>
            <li><a href="#">Turmuligheter</a></li>
            <li><a href="#">Sit Trening</a></li>
        </ul>
    </li>
    <li><a href="#">Geografi</a>
        <ul>
        <li><a href="#">Kart</a></li>  
        <li><a href="#">Transport</a></li>
        </ul>
    </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li>          </li>
    <li><a href="#">Tradisjoner</a>
        <ul>
            <li><a href="#">Studentviser</a></li>
            <li><a href="#">Hva er dette?</a></li>
            <li><a href="#">Hva betyr det?</a></li>
            <li><a href="#">Fadderuka</a></li>
            <li><a href="#">Utesteder</a></li>
        </ul>
        </li> 
    <li><a href="#">Frivillige verv</a>
        <ul>
        <li><a href="#">Linjeforeninger</a></li>
        <li><a href="#">Uka</a></li>
        <li><a href="#">Samfundet</a></li>
        <li><a href="#">Faglige verv</a></li>
        </ul>
    </li>
    </ul>
</nav>
</div>
<div class="logo">
    <img src="img/Logo.png" alt="Logo inkluderingsbanden" style="width: 250px">
</div>

`;


const headerOffset = header.offsetTop; 

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
footer.innerHTML = `
  <div class="footer">
        <p>
        Inkluderingsbanden <br><br>
        En nettside for deg som skal begynne på NTNU
        </p>

        <img src="img/Logo.png" alt="Logo inkluderingsbanden" style="width: 250px">
        <p>
        <a href="contact.html">Kontakt oss</a> <br><br>
        <a href="aboutus.html">Om oss</a>
        </p>

        
  </div>
  
  
`;

const footerOffset = footer.offsetTop;
  });




