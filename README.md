# Challenge-PersonalPay


<h3>Developer Applicant Interview Test</h3>

<h4>Summary </h4>
<br/>

La siguiente prueba plantea el desarrollo de una aplicación de consulta de clima que pueda visualizar el pronóstico actual, próximos 5 días para la ciudad actual y de otras 5 ciudades seleccionables.
Además del desarrollo específico de las funcionalidades, se requiere identificar y generar los casos de test que se consideren necesarios
Para aquellos perfiles que apliquen como FullStack, se deben completar ambas partes de la prueba. Caso contrario, pueden solo realizar la parte que corresponde (armar la solución entera puede ser un extra).

<p>
En este proyecto se utilizo la API <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a> , ya que es una de las licencias mas economicas para pronostico a 5 dias.
</p>
<p>Se utilizo tambien axios para las peticiones</p>

## PRIMEROS PASOS
<hr/>
<br/>

```
Descargar el repositorio.
Una vez descargado y descomprimido en nuestra pc, deberemos ejecutar el comando 'npm install' en la carpeta 'client' y en la carpeta 'api'.

```

## BACKEND TEST
<hr/>
<br/>

***Se hizo deploy de la APP para probar su funcionamiento en 'https://personal-pay-challenge.herokuapp.com/v1/' con todas las rutas funcionando***

Ya con todas las dependencias instaladas, se debera ejecutar primero el Servidor, el cual se encuentra en la carpeta 'api'. La ejecucion sera en dicha carpeta, con el comando: 'npm start'.

El servidor se realizo sobre Express. A continuacion se detallan los ENDPOINTS funcionales:

**/v1**            ->  Corrobora que el servidor este levantado. 

**/location**       ->  Devuelve los datos de ubicación city según ip-api. 

**/current**         ->  Devuelve los datos de ubicacion del servidor junto con el estado de tiempo actual.

**/current/:city**  ->  Se puede pasar una ciudad por parametro y devolvera los datos de la city y el estado del tiempo actual en la misma.

**/forecast**       ->  Devuelve los datos de ubicación del servidor según ip-api y el estado del tiempo a 5 días

**/forecast/:city** ->  Se puede pasar una ciudad por parametro y devolvera los datos de la city y el estado del tiempo a 5 dias.

***El Parametro city puede ser cualquier de las siguientes cosas :***

=> Latitude and Longitude (Decimal degree) ('48.8567,2.3508') <br/>
=> city name e.g.: q=Paris <br/>
=> US zip e.g.: q=10001 <br/>
=> UK postcode e.g: q=SW1 <br/>
=> Canada postal code e.g: q=G2J <br/>
=> iata:<3 digit airport code> e.g: q=iata:DXB <br/>
=> 'auto:ip' Muestra el clima de la ip <br/>

## FRONTEND TEST
<hr/>
<br/>
Primero debemos ejecutar el Servidor Cliente. Para ello tendremos que ir a la carpeta client , y desde la consola ejecutar el comando: 'npm start' . Luego de unos segundos, se le abrira el navegador con la direccion local y el puerto del servidor montado.
<br/>
<p>Se debe desarrollar una app full client-side que permita visualizar el pronóstico climático actual y de los próximos 5 días en la ubicación actual y permita visualizar el pronóstico de otras 5 ciudades seleccionables.</p>
<p>
Los datos son consumidos del localhost:3001 , por ello es importante correr primero el servidor del api.
</p>


## TESTING
<hr/>
<br/>
Ejecutar el comando 'npm test'.
Se testearon los Status de las rutas de la API. Se uso Mocha como framework de testeo, chai para libreria de assertions y supertest para levantar el servidor.
