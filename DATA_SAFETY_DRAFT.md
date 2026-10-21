# Borrador de Data safety — Fortior Private

Este documento ayuda a preparar el formulario de Play Console. **No debe copiarse sin contrastarlo contra el AAB de producción, las versiones finales de los SDK y el funcionamiento real.**

## Mapa preliminar

| Categoría de Play | Ejemplos de Fortior | ¿Sale del dispositivo? | Finalidad probable |
| --- | --- | --- | --- |
| Personal info — Email address / Name | Registro, Firebase Auth, perfil básico de Google | Sí | Account management, App functionality |
| User IDs | UID de Firebase | Sí | Account management, Security, App functionality |
| Financial info — Purchase history / Other financial info | Gastos, ingresos, saldos, cuentas, presupuestos, comisiones, deudas y metas confirmadas | Sí, a Firestore; opcionalmente a Drive | App functionality |
| Photos and videos — Photos | Comprobante seleccionado para OCR | No por el código de Fortior; procesamiento local | App functionality |
| Audio files — Voice or sound recordings | Dictado mediante reconocedor del sistema | Por auditar: depende del proveedor del sistema; Fortior no guarda audio | App functionality |
| App activity — Other user-generated content | Texto del chat de Forti y borradores | Actualmente local | App functionality |
| App info and performance | Métricas técnicas de SDK, si existen | Auditar Firebase/ML Kit final | Analytics / App functionality según SDK |
| Device or other IDs | Datos técnicos recogidos por SDK, si existen | Auditar binario final | Fraud prevention, Security o App functionality según SDK |

## Datos locales que igual deben divulgarse

Aunque el formulario de Google puede excluir datos que nunca salen del dispositivo, la política y la divulgación dentro de la app deben explicar:

- texto visible de notificaciones financieras procesado en segundo plano;
- imágenes y OCR local;
- voz administrada por el reconocedor del sistema;
- chat, metas y aprendizaje de categorías;
- contenido compartido desde otras apps;
- identificadores usados para prevenir sugerencias duplicadas.

## Preguntas que deben responderse con el AAB final

1. ¿Firebase o Google Sign-In recopilan identificadores, diagnóstico o información de rendimiento con las versiones incluidas?
2. ¿El reconocedor de voz transmite audio o transcripciones a un proveedor?
3. ¿Se cifra en tránsito cada categoría marcada como recopilada?
4. ¿Cada dato es obligatorio u opcional?
5. ¿Algún dato se comparte según la definición específica del formulario, o la transferencia a Google califica como proveedor de servicio?
6. ¿Puede el usuario solicitar eliminación de cada dato recopilado?
7. ¿La cuenta está disponible para menores y cuál será el público objetivo declarado?

## URLs preparadas

- Política: <https://josh11282020-dotcom.github.io/fortior-legal/privacy.html>
- Eliminación: <https://josh11282020-dotcom.github.io/fortior-legal/delete-account.html>
- Seguridad: <https://josh11282020-dotcom.github.io/fortior-legal/security.html>
- Soporte: <https://josh11282020-dotcom.github.io/fortior-legal/support.html>
