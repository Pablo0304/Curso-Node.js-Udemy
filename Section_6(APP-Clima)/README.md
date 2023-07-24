# INFORMACIÓN SOBRE LA API:
* Esta aplicación se ha hecho usando las APIs de Mapbox y de OpenWeather. Al no ser Mapbox gratuita, no se ha podido testear esta aplicación.

# SOBRE INTERACCIÓN CON LA API:
* Interpretar respuestas:  
  * La forma de interaccionar con la API usando la librería "axios" consiste en crear una instancia de axios "const instance = axios.create({});" y dentro de ella rellenar los parámetros necesarios según la documentación.
  * Lo siguiente es hacer "const resp = await instancia.get();" y esto retorna la respuesta.
  * Desestructurando la respuesta("const { apartado1, apartado2 } = resp.data;") se guardan las partes del json que se llamen "apartado1" y "apartado2".
  * Según si en el json esos apartados son un "{}" o un "[]" se tratan como sigue:
    * Si es "{}" => apartado1.subapartado1.
    * Si es "[]" => apartado2[0].subapartado1.
  * Adicionalmente se puede tratar la respuesta con el método "map()" propio de node.