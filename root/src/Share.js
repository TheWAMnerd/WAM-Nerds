console.log('JavaScript file is for html sharing is loaded.');

var ShareCode = `

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand Nav_Text_A" href="index.html" style="color:aliceblue;" id="Branding">
            <img src="../assets/favicon.ico" width="50px" height="50px" id="NavLogo">
            TheWAMnerds
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link Nav_Text_A" href="aboutus.html">About us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle Nav_Text_A" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: aliceblue;">
                        Content
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Book Reviews</a></li>
                        <li><a class="dropdown-item" href="#">School blogs</a></li>
                        <li><a class="dropdown-item" href="perspectives.html"> Perspectives </a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

function loadShareCode() {
    var body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('afterbegin', ShareCode);
}

// Call loadShareCode after DOM has loaded
document.addEventListener('DOMContentLoaded', loadShareCode);
