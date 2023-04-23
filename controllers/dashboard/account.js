/*
*   Controlador de uso general en las páginas web del sitio privado.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'business/dashboard/user.php';
// Constantes para establecer las etiquetas de encabezado y pie de la página web.
const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');

// Método manejador de eventos para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const JSON = await dataFetch(USER_API, 'getUser');
    // Se verifica si el usuario está autenticado, de lo contrario se envía a iniciar sesión.
    if (JSON.session) {
        // Se comprueba si existe un alias definido para el usuario, de lo contrario se muestra un mensaje con la excepción.
        if (JSON.status) {
            HEADER.innerHTML = `
            <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary fondo">
            <div class="container-fluid">
                <!-- Logo de Myomix en la parte superior izquierda  -->
                <a class="navbar-brand" href="dashboard.html">
                    <img src="../../resorces/imgs/logo.png" alt="Logo" width="35" height="30"
                        class="d-inline-block align-text-top">
                    Myomix
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Interfaces accesibles por el usuario  -->
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link fondo-text" href="supplier.html">
                                <ion-icon name="people-outline" class="nav-icono "></ion-icon>Proveedores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fondo-text" href="userscart.html"><ion-icon
                                    name="cart-outline"></ion-icon>Compras</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fondo-text" href="bills.html"><ion-icon
                                    name="receipt-outline"></ion-icon>Facturas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fondo-text" href="users.html"><ion-icon
                                    name="person-circle-outline"></ion-icon>Usuarios</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fondo-text" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Clientes
                            </a>
                            <ul class="dropdown-menu fondo">
                                <li><a class="dropdown-item fondo-text" href="clients.html"><ion-icon
                                            name="person-outline"></ion-icon>Clientes</a></li>
                                <li><a class="dropdown-item fondo-text" href="address.html"><ion-icon
                                            name="compass-outline"></ion-icon>Direcciones</a></li>
                                <li><a class="dropdown-item fondo-text" href="usersratings.html"><ion-icon
                                            name="star-half-outline"></ion-icon>Valoraciones</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fondo-text" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu fondo">
                                <li><a class="dropdown-item fondo-text" href="products.html"><ion-icon
                                            name="pricetags-outline"></ion-icon>Productos</a></li>
                                <li><a class="dropdown-item fondo-text" href="brands.html"><ion-icon
                                            name="library-outline"></ion-icon>Marcas</a></li>
                                <li><a class="dropdown-item fondo-text" href="category.html"><ion-icon
                                            name="bookmark-outline"></ion-icon>Categorias</a></li>
                                <li><a class="dropdown-item fondo-text" href="subcategories.html"><ion-icon
                                            name="bookmarks-outline"></ion-icon>Subcategorias</a></li>
                                <li><a class="dropdown-item fondo-text" href="images.html"><ion-icon
                                            name="images-outline"></ion-icon>Imagenes de productos</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="dropdown fondo">
                    <button type="button" class="boton fondo-text dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false" data-bs-auto-close="outside">
                        Ajustes de la sesión
                    </button>
                    <ul class="dropdown-menu fondo" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <a class="dropdown-item fondo-text" href="#">Ajustes de usuario</a>
                        </li>
                        <li>
                            <a class="dropdown-item fondo-text" href="#" onclick="logOut()">Salir de la sesion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            `;
            FOOTER.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col s12 m6">
                            <h6 class="white-text">Dashboard</h6>
                            <a class="white-text" href="mailto:dacasoft@outlook.com">
                                <i class="material-icons left">email</i>Ayuda
                            </a>
                        </div>
                        <div class="col s12 m6">
                            <h6 class="white-text">Enlaces</h6>
                            <a class="white-text" href="../public/" target="_blank">
                                <i class="material-icons left">store</i>Sitio público
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <span>© 2018-2023 Copyright CoffeeShop. Todos los derechos reservados.</span>
                        <span class="right">Diseñado con
                            <a href="http://materializecss.com/" target="_blank">
                                <img src="../../resources/img/materialize.png" height="20" style="vertical-align:middle" alt="Materialize">
                            </a>
                        </span>
                    </div>
                </div>
            `;
        } else {
            sweetAlert(3, JSON.exception, false, 'index.html');
        }
    } else {
        // Se comprueba si la página web es la principal, de lo contrario se direcciona a iniciar sesión.
        if (location.pathname == '/myomix/views/dashboard/index.html') {
            HEADER.innerHTML = `
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper center-align">
                            <a href="index.html" class="brand-logo"><i class="material-icons">dashboard</i></a>
                        </div>
                    </nav>
                </div>
            `;
            FOOTER.innerHTML = `
                <div class="container">
                    <div class="row">
                        <b>Dashboard de CoffeeShop</b>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <span>© 2018-2023 Copyright CoffeeShop. Todos los derechos reservados.</span>
                        <span class="right">Diseñado con
                            <a href="http://materializecss.com/" target="_blank">
                                <img src="../../resources/img/materialize.png" height="20" style="vertical-align:middle" alt="Materialize">
                            </a>
                        </span>
                    </div>
                </div>
            `;
        } else {
            location.href = 'index.html';
        }
    }
});