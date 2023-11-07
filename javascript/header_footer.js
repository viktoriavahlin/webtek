
const header = document.querySelector('header');
header.innerHTML = `
<div class="header_footer">
   
    <a href="#html">Transportation</a>
    <a href="#html">Contact</a>
    <a href="#html">Activites</a>
</div>
   
`;

const footer = document.querySelector('footer');
footer.innerHTML = `
<div class="header_footer">
    This is a project about this and that   
</div>
`;
const headerOffset = header.offsetTop; 
const footerOffset = footer.offsetTop; 