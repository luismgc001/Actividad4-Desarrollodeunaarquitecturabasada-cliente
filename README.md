# Conversor de Moneda

Este proyecto es una aplicación web de "Conversor de Moneda" que utiliza una arquitectura basada en el cliente. La aplicación permite a los usuarios convertir montos de una moneda a otra en tiempo real utilizando una API de tasas de cambio. Está desarrollada completamente en el cliente, con HTML, CSS y JavaScript.


## Características

- **Conversión de Monedas en Tiempo Real**: La aplicación permite convertir montos entre diferentes monedas.
- **Arquitectura Basada en el Cliente**: Todos los cálculos y lógica de negocio se manejan en el navegador del usuario.
- **Uso de API Externa**: Obtiene las tasas de cambio en tiempo real a través de [ExchangeRate API](https://www.exchangerate-api.com/).

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript (vanilla).
- **API Externa**: [ExchangeRate API](https://www.exchangerate-api.com/) para obtener tasas de cambio.

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/currency-converter.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd currency-converter
    ```

3. Obtén una clave de API de [ExchangeRate API](https://www.exchangerate-api.com/) y reemplaza `'YOUR_API_KEY'` en `app.js` con tu clave de API.

## Uso

1. Abre `index.html` en tu navegador web.
2. Ingresa la cantidad que deseas convertir, selecciona las monedas de origen y destino, y haz clic en "Convertir".
3. Verás el resultado de la conversión en tiempo real.

## Arquitectura Basada en el Cliente

Esta aplicación se basa en una arquitectura **Cliente** en la que toda la lógica de negocio, cálculos y operaciones se manejan directamente en el navegador del usuario, sin depender de un servidor propio para el procesamiento.

### Ventajas de esta Arquitectura

- **Menor Carga del Servidor**: Al no necesitar un backend para la lógica de negocio, se reduce la carga en el servidor y se mejora la velocidad de respuesta.
- **Interactividad en Tiempo Real**: Las interacciones son más rápidas, ya que no requieren llamadas constantes al servidor.
- **Facilidad de Implementación**: Al no tener un backend complejo, el desarrollo y mantenimiento de la aplicación es más sencillo.

## Funcionamiento de la Aplicación

1. **Cargar Monedas Disponibles**: Al abrir la aplicación, se obtiene una lista de monedas desde la API y se muestran en los selectores de moneda.
2. **Convertir Cantidades**: Cuando el usuario ingresa una cantidad y selecciona monedas de origen y destino, se hace una solicitud a la API para obtener la tasa de cambio y se realiza la conversión en el cliente.
3. **Mostrar Resultado**: El resultado de la conversión se muestra inmediatamente en la página.

## Herramientas Usadas

- **HTML/CSS**: Para la estructura y estilos de la aplicación.
- **JavaScript (vanilla)**: Para la lógica de conversión y la comunicación con la API.
- **ExchangeRate API**: Para obtener las tasas de cambio actualizadas en tiempo real.
