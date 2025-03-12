window.onload = function () {
    let cliente = document.getElementById('txtCliente');
    let articulo = document.getElementById('txtArticulo');
    let cantidad = document.getElementById('txtCantidad');
    let precio = document.getElementById('txtPrecio');

    let btnFacturar = document.getElementById('btnFacturar');
    let btnBorrar = document.getElementById('btnBorrar');

    let facturaImpresa = document.getElementById('facturaImpresa');

    btnFacturar.addEventListener('click', function () {
        if (cliente.value === "" || articulo.value === "" || cantidad.value === "" || precio.value === "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese todos los datos'
            });
        } else {
            // Limpiar factura anterior
            facturaImpresa.innerHTML = "";

            let tituloFactura = document.createElement('h2');
            tituloFactura.textContent = 'Factura';
            facturaImpresa.appendChild(tituloFactura);

            // Calcular valores numéricos
            let subtotal = parseFloat(precio.value) * parseFloat(cantidad.value);
            let iva = subtotal * 0.13;
            let servicio = subtotal * 0.05;
            let totalapagar = subtotal + iva + servicio;

            // Objeto con los datos de la factura
            const factura = { 
                "Cliente": cliente.value, 
                "Artículo": articulo.value, 
                "Cantidad": cantidad.value, 
                "Precio": `₡${precio.value}`, 
                "Subtotal": `₡${subtotal.toFixed(2)}`,
                "IVA (13%)": `₡${iva.toFixed(2)}`,
                "Servicio (5%)": `₡${servicio.toFixed(2)}`,
                "Total a Pagar": `₡${totalapagar.toFixed(2)}`
            };

            // Agregar datos a la factura impresa
            for (let datosFactura in factura) {
                let etiqueta = document.createElement('p');
                etiqueta.textContent = `${datosFactura}: ${factura[datosFactura]}`;
                facturaImpresa.appendChild(etiqueta);
            }
        }
    });

    btnBorrar.addEventListener('click', function () {
        cliente.value = "";
        articulo.value = "";
        cantidad.value = "";
        precio.value = "";

        // Limpiar factura impresa
        facturaImpresa.innerHTML = "";

        Swal.fire({
            icon: 'info',
            title: 'Campos borrados',
            text: 'Todos los campos han sido limpiados'
        });
    });
};
