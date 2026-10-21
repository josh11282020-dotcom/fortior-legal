# Lista de preparación para Google Play — Fortior Private

Estado al **20 de octubre de 2026**. Esta lista es operativa y no reemplaza revisión jurídica ni la evaluación final de Google Play.

## Completado en este portal

- [x] Política de privacidad pública en HTTPS y en una URL no editable por visitantes.
- [x] Página externa de eliminación de cuenta con una vía real para iniciar la solicitud.
- [x] Términos, seguridad y soporte en URLs independientes.
- [x] Descripción de Firebase, OCR, voz, Drive/Sheets y acceso opcional a notificaciones.
- [x] Retenciones locales documentadas: 24 horas, 30 días, 365 días y límite de chat.
- [x] Distinción entre datos de nube, datos locales y archivos controlados por el usuario.
- [x] Declaración de Limited Use para las API de Google.
- [x] Portal sin cookies, analítica ni recursos de terceros.
- [x] SEO técnico, accesibilidad básica y diseño responsive.

## Bloqueadores P0 antes de subir el AAB

### Identidad y cumplimiento

- [ ] Definir la entidad exacta que figurará como desarrollador en Play Console y hacerla coincidir con la política, pantalla OAuth y soporte.
- [ ] Incorporar domicilio y demás datos legales obligatorios tras revisión jurídica; evaluar inscripción del banco de datos personales y procedimiento de derechos ARCO en Perú.
- [ ] Verificar diariamente el buzón `soporte.jccorp17@gmail.com` y adoptar un procedimiento para solicitudes de eliminación. El portal publica un objetivo de 7 días hábiles para responder y 30 días calendario para completar.
- [ ] Revisar si la actividad financiera exige cuenta de desarrollador de tipo Organization y D‑U‑N‑S conforme a los requisitos vigentes.

### Binario Android

- [ ] Sustituir `com.example.expense_manager` por un `applicationId` definitivo e irreversible.
- [ ] Crear keystore de producción, protegerlo fuera de Git y quitar `signingConfigs.debug` de release.
- [ ] Confirmar `targetSdk` exigido para la fecha de publicación. En octubre de 2026, Google Play exige API 36 para nuevas apps y actualizaciones móviles.
- [ ] Quitar o limitar `READ_EXTERNAL_STORAGE` y `WRITE_EXTERNAL_STORAGE`; preferir selectores de fotos/archivos con alcance mínimo.
- [ ] Versionar, probar y desplegar reglas de seguridad de Firestore; el repositorio actual no permite auditar el aislamiento anunciado.
- [ ] Restringir la clave de Firebase del `google-services.json` por paquete y huella de firma.
- [ ] Generar un Android App Bundle de release y probarlo mediante Internal testing.

### Privacidad y eliminación

- [ ] Mostrar una divulgación destacada justo antes de abrir el ajuste de acceso a notificaciones. Debe explicar acceso en segundo plano al texto visible, finalidad, almacenamiento local y confirmación obligatoria; botones: “Activar acceso” y “Ahora no”.
- [ ] Reautenticar al usuario **antes** de borrar Firestore; hoy una respuesta `requires-recent-login` puede dejar Firebase Auth activa después de borrar registros.
- [ ] Al eliminar la cuenta, limpiar también chat local, meta, categorías, aprendizaje, sugerencias y preferencias del UID.
- [ ] Añadir en la app un enlace a `privacy.html` y a `delete-account.html` y hacer coincidir el texto legal incorporado con el portal.
- [ ] Auditar el comportamiento del reconocedor de voz configurado en el dispositivo antes de responder sobre audio en Data safety.
- [ ] Revisar las guías Data safety de cada versión de Firebase, Google Sign-In y ML Kit incluida en el AAB.

### Declaraciones de Play Console

- [ ] Completar Data safety de acuerdo con [`DATA_SAFETY_DRAFT.md`](DATA_SAFETY_DRAFT.md) y el binario final.
- [ ] Completar Data deletion con `https://josh11282020-dotcom.github.io/fortior-legal/delete-account.html`.
- [ ] Completar Financial features. Fortior administra dinero personal y ofrece consejos; revisar “Financial advice” y/o “Other”, no marcar automáticamente que no existen funciones financieras.
- [ ] Completar público objetivo, clasificación de contenido y acceso para revisión.
- [ ] Alinear la promesa de edad: la app ofrece el rango “Menos de 18 años”, por lo que no debe declararse solo para adultos sin ajustar primero la experiencia.
- [ ] Publicar correo de soporte y las URLs de privacidad/soporte en la ficha.

### Google OAuth

- [ ] Mantener `drive.file`; no ampliar a `drive`, `drive.readonly`, Gmail o `spreadsheets` sin justificación y verificación adicional.
- [ ] Configurar pantalla de consentimiento, dominio autorizado, nombre, logo y enlaces legales coherentes.
- [ ] Confirmar que el proyecto OAuth esté preparado para producción y que la lista de testers no limite a usuarios reales.

## Lanzamiento y calidad

- [ ] Preparar icono, feature graphic, capturas de teléfono/tablet y descripción de tienda sin promesas de afiliación bancaria.
- [ ] Ejecutar pruebas de accesibilidad, rotación, texto al 200 %, modo claro/oscuro y dispositivos API mínimos/máximos.
- [ ] Probar creación, edición, borrado y sincronización con conectividad débil.
- [ ] Probar eliminación completa con email/contraseña y Google Sign-In.
- [ ] Mantener una cuenta de revisión con datos ficticios y notas claras para el evaluador.
- [ ] Realizar rollout gradual y disponer de un plan de reversión.

## Referencias oficiales

- [Google Play — User Data](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Google Play — Account deletion](https://support.google.com/googleplay/android-developer/answer/13327111)
- [Google Play — Data safety](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Google Play — Financial features declaration](https://support.google.com/googleplay/android-developer/answer/13849271)
- [Google Play — Target API level](https://support.google.com/googleplay/android-developer/answer/11926878)
- [Google Workspace — OAuth scopes](https://developers.google.com/workspace/sheets/api/scopes)
- [Google Workspace — User Data Policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy)
