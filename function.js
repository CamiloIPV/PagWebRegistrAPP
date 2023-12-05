function mostrarContenidoSegunDispositivo() {
    var esMovil = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

    if (esMovil) {
        mostrarBotonDescargaAPK();  // Cambiado a mostrarBotonDescarga para móviles
    } else {
        mostrarImagenQR();  // Cambiado a mostrarImagenQR para PCs
    }
}

function mostrarBotonDescargaAPK() {
    // Crear un botón de descarga para APK
    var botonDescargaAPK = document.createElement('a');
    botonDescargaAPK.href = 'https://github.com/CamiloIPV/RegistrAPPAPK/releases/latest/download/RegistrAPP.apk';
    botonDescargaAPK.innerHTML = 'Descargar APK';
    botonDescargaAPK.setAttribute('download', 'RegistrAPP.apk');

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(botonDescargaAPK);
}

function mostrarImagenQR() {
    var contenidoDescarga = document.getElementById('contenidoDescarga');
    var imagenQR = document.createElement('img');
    imagenQR.src = 'imagen-qr.png';
    imagenQR.alt = 'Código QR para la descarga';
    contenidoDescarga.appendChild(imagenQR);
}
