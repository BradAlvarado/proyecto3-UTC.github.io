//Barra de Navegación para el Index en JavaScript

document.write('<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 mb-3">' + 

'<div class="container">' +

  '<a class="navbar-brand title">Proyecto Examen III</a>'+

  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"'+
    'aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon"></span> </button>'+

  '<div class="collapse navbar-collapse" id="navbarNav">'+
  
    '<ul class="navbar-nav" style="margin: auto;">'+

      '<li class="nav-item me-1"> <a class="nav-link active" href="index.html"><i class="fa-solid fa-house"></i> Inicio</a> </li>'+
      '<li class="nav-item mx-1">'+
        '<a class="nav-link" href="portada.html">Portada</a>'+
      '</li>'+
      '<li class="nav-item mx-1">'+
        '<a class="nav-link" target="_blank" href="https://www.utc.ac.cr/web_i/">UTC</a>'+
      '</li>'+
      '<li class="nav-item mx-1">'+
        '<a class="nav-link" aria-current="page" href="registro.html"> Formulario de Registro</a>'+
      '</li>'+
      '<li class="nav-item mx-1">'+
        '<a class="nav-link" href="notas.html"> Lista de Notas</a>'+
      '</li>'+
      '<li class="nav-item ms-1">' +
        '<a class="nav-link" href="grid.html">Grid</a> '+
      '</li>' +
      
   ' </ul>'+
   '<nav class="nav">'+
    '<li class="nav-item">'+
            '<a class="btn btn-outline-success" role="button" href="contactenos.html">Contáctame  <i class="fa-solid fa-address-card"></i></a>'+
        '</li>'+

   '</nav>'+
  '</div>'+
'</div>'+
'</nav>');



