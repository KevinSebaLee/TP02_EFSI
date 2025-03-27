README.txt

Diseño de la Interfaz del Formulario
------------------------------------

El diseño de la interfaz del formulario fue pensado para ser limpio, moderno y fácil de usar. 
1. Estética Visual
   - Se utilizó un fondo con degradado en tonos violeta y azul para dar una apariencia moderna.
   - El formulario está centrado en pantalla y encerrado en una tarjeta con fondo blanco, bordes redondeados y sombra.

2. Diseño del Formulario
   - Inputs con bordes suaves, etiquetas claras y mensajes de error en tiempo real para facilitar la comprensión.
   - Con un ancho máximo que se adapta bien a pantallas pequeñas, para centrar la información.

3. Validaciones de Campos
   - Se agregaron mensajes de error debajo de cada campo, ocultos por defecto, y visibles según la validación en tiempo real, con JavaScript.
   - El botón de enviar cambia su opacidad para indicarle al usuario si las validaciones fueron aprobadas o es necesario revisar los campos.

Validaciones Implementadas
--------------------------

1. Nombre
   - Debe tener al menos 3 caracteres.
   - Se verifica con (`/^.{3,}$/`).
   - Si no cumple, se muestra el mensaje de error en rojo debajo del campo.

2. Email
   - Debe contener al menos "@gmail".
   - Se verifica con (`/@gmail/`).
   - Si no cumple, se muestra un mensaje en rojo.

3. Contraseña
   - Debe tener al menos 8 caracteres.
   - Debe contener al menos un número.
   - Debe tener al menos una mayúscula.
   - Estas condiciones se validan individualmente y cada regla cambia de rojo a negro, para pasar a verde si se mejora, según se cumplan.

4. Verificación de Contraseña
   - Debe coincidir exactamente con la contraseña ingresada anteriormente.
   - Si no coincide, se muestra un mensaje de error.

5. Botón de Enviar
   - El botón permanece deshabilitado hasta que todos los campos estén correctamente validados.
   - Cambia su opacidad visualmente para indicar que no está activo.

Las validaciones se actualizan cada vez que el usuario escribe (`input` event), lo que permite una retroalimentación inmediata.



Desafíos Enfrentados
---------------------

1. Mensajes de error que no se mostraban
   - Inicialmente, los mensajes de error (`<p>`) no aparecían aunque `hidden = false` funcionara en JavaScript.
   - El problema estaba en la CSS: se había usado `p { display: none; }`, lo cual forzaba que los mensajes nunca aparecieran.
   - Solución: se cambió a `p[hidden] { display: none; }` para que los elementos se oculten solo si el atributo `hidden` está presente.

2. Lógica de validación compleja
   - La contraseña requería múltiples verificaciones al mismo tiempo (mayúsculas, números, longitud, coincidencia).
   - Para solucionarlo se usaron expresiones regulares y se encapsuló la lógica en funciones con buena separación de responsabilidades.

3. Sincronización entre inputs
   - Fue necesario coordinar los eventos del campo contraseña y el de verificación para que los errores aparezcan correctamente en ambos momentos.
Mejoras Futuras
----------------

Si tuviéramos más tiempo, implementaríamos:

1. Validaciones más completas
   - Validación de email con dominios completos.
   - Verificación de contraseñas más seguras (símbolos especiales, etc).

2. Mensajes dinámicos
   - Iconos o feedback visual, como tildes o cruces, al lado de los inputs.

3. Animaciones suaves
   - Transiciones al mostrar u ocultar errores.

4. Idiomas
   - Elección de múltiples idiomas, para la comodidad del usuario.
