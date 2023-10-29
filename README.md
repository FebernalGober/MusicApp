# MusicApp

## Descripción

Esta es una aplicación móvil que te permite explorar las canciones más escuchadas, ver detalles sobre los artistas y guardar tus ultimas canciones visualizadas en tu perfil. La aplicación utiliza AsyncStorage para almacenar la información de tus artistas favoritos.

## Características Principales

- Lista de las top canciones más escuchadas.
- Detalles sobre la canción seleccionada.
- Perfil para guardar tus ultimos temas visualizados.

## Capturas de Pantalla

Mi perfil
Aqui se muestran las ultimas canciones visualizadas
![Screenshot_1698548668](https://github.com/FebernalGober/MusicApp/assets/126432234/372425da-ec67-4195-8123-ae8d3546a4fc)
Top Canciones
Pantalla principal, muestra las canciones principales de un area geografica determinada
![Screenshot_1698548664](https://github.com/FebernalGober/MusicApp/assets/126432234/23dbe8bd-e942-4c55-9b00-d9c7d4aeede3)
Detalles
Muestra informacion obtenida de la misma API sobre el tema seleccionado
![Screenshot_1698548676](https://github.com/FebernalGober/MusicApp/assets/126432234/a2cb16f4-1a85-4539-9f70-c625e8cbee28)




## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` o `yarn install` para instalar las dependencias.

## Uso

1. Ejecuta la aplicación en tu dispositivo o emulador.
2. En la vista "Home", verás la lista de las top canciones más escuchadas.
3. Haz clic en una canción para ver los detalles del artista en la vista "Detalle".
4. Al hacer click en una cancion, automaticamente se guardara en tus ultimos reproducidos.
5. Ve a la vista "Mi Perfil" para ver tus ultimos reproducidos.

## Tecnologías Utilizadas

- React Native
- AsyncStorage: Almacenar datos localmente en el dispositivo móvil.
- React Navigation:  Navegación en la aplicación móvil.
- Expo: Plataforma que facilita el desarrollo de aplicaciones móviles React Native.
- Axios: Realizar solicitudes HTTP y obtener datos de servicios web.

## Retos en el desarrollo

Para el presente proyecto se utilizaron 2 API de [Last.fm](https://www.last.fm/es/api),
La primer API [artist.getTopTracks](https://www.last.fm/api/show/artist.getTopTracks) arroja los artistas con mayor popularidad en un pais.
Durante el desarrollo de la aplicacion me percate que dicha api entregaba la lista de canciones con datos como Cancion, Autor, duracion e imagen, pero en este caso la imagen no era la oficial de la cancion, sino una imagen predeterminada de Last.fm (Una estrella gris).
Para solucionarlo, tome de esta primer API el MBDI ( Identificador unico) de la cancion y con una segunda consulta a la API [track.getInfo](https://www.last.fm/api/show/track.getInfo) obtuve la imagen correspondiente de cada cancion, la cual se muestra correctamente en la aplicacion 

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva característica o corrección de errores (`git checkout -b mi-nueva-caracteristica`).
3. Haz tus cambios y realiza un commit (`git commit -m 'Agrega una nueva característica'`).
4. Haz push a la rama (`git push origin mi-nueva-caracteristica`).
5. Abre una solicitud de extracción en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

## Contacto

- Nombre: Alexis Rafael Fernandez Bernal
- Correo Electrónico: alexis.ferber18@gmail.com
- LinkedIn: https://www.linkedin.com/in/febernal/

¡Gracias por usar nuestra aplicación! Esperamos que la disfrutes. Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.
