window.onload = function () {
    let dolares = document.getElementById('txtMontoDolares');
    let tipoDeCambioDolares = document.getElementById('txtTipoDeCambioDolares');
    let colones = document.getElementById('txtMontoColones');
    let tipoDeCambioColones = document.getElementById('txtTipoDeCambioColones');

    let btnConvertir1 = document.getElementById('btnConvertir1');
    let btnLimpiar1 = document.getElementById('btnLimpiar1');

    let btnConvertir2 = document.getElementById('btnConvertir2');
    let btnLimpiar2 = document.getElementById('btnLimpiar2');

    // Convertir de DÓLARES a COLONES
    btnConvertir1.addEventListener('click', function () {
        let montoDolares = parseFloat(dolares.value);
        let tipoCambio = parseFloat(tipoDeCambioDolares.value);

        if (isNaN(montoDolares) || isNaN(tipoCambio) || montoDolares <= 0 || tipoCambio <= 0) {
            Swal.fire("Error", "Por favor, ingresa valores numéricos válidos.", "error");
            return;
        }

        let resultado = montoDolares * tipoCambio;
        Swal.fire("Conversión Exitosa", `${montoDolares} USD equivale a ${resultado.toFixed(2)} CRC`, "success");
    });

    // Limpiar campos de dólares a colones
    btnLimpiar1.addEventListener('click', function () {
        dolares.value = "";
        tipoDeCambioDolares.value = "";
    });

    // Convertir de COLONES a DÓLARES
    btnConvertir2.addEventListener('click', function () {
        let montoColones = parseFloat(colones.value);
        let tipoCambio = parseFloat(tipoDeCambioColones.value);

        if (isNaN(montoColones) || isNaN(tipoCambio) || montoColones <= 0 || tipoCambio <= 0) {
            Swal.fire("Error", "Por favor, ingresa valores numéricos válidos.", "error");
            return;
        }

        // ⚠ Aquí estaba el error, ahora está corregido:
        let resultado = montoColones / tipoCambio;

        Swal.fire("Conversión Exitosa", `${montoColones} CRC equivale a ${resultado.toFixed(2)} USD`, "success");
    });

    // Limpiar campos de colones a dólares
    btnLimpiar2.addEventListener('click', function () {
        colones.value = "";
        tipoDeCambioColones.value = "";
    });
};
