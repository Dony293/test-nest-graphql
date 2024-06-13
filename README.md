<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Dev
1. Clonar repostorio
2. Copiar el ```env.template``` y renombrar a ```.env```
3. Ejecutar 
```
yarn install
```
4. Levantar la imagen de la base de datos (Docker desktop)
```
docker-compose up -d
```
5. Levantar el backend de Nest
```
yarn start:dev
```
6. Visitar 
```
localhost:3000/graphql
```

De momento deje la parte de items (de practica), para poder probar las querys, me falto implementar la paginación
(Aun no llego ahi xd). Apollo Server te permite ver todos los metodos implementados y los parametros que puedes agregar, puedes solo presionar
el boton de mas, y agregar el valor de las variables abajo para ir probando. 

Para la autentificacion estan los metodos que ya habiamos visto de singup, login y uno para validar el token.
El unico metodo que requiere token para ejecutarse de momento es el de revalidate, ando contemplando
que tan buena idea es implementar esto en todas las demas querys. 

La duracion del jwt se configura en el archivo ```auth/auth.module.ts ```s