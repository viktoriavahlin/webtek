
const header = document.querySelector('header');
header.innerHTML = `

<div class="header">
   
    <a href="#html">Transportation</a>
    <img src="img/Hallvard.PNG" alt="" class="bilde"> 
    <a href="#html">Contact</a>
    <a href="#html">Activites</a>
</div>
    
`;

const footer = document.querySelector('footer');
footer.innerHTML = `
<div class="footer">
    This is a project about this and that   
</div>
`;
const headerOffset = header.offsetTop; 
const footerOffset = footer.offsetTop; 