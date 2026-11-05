# api_productos_mvc

API REST CRUD de productos con Node.js, Express, MySQL y patrón MVC.

## Uso
1. `npm install`
2. Copia `.env.example` a `.env` y completa los datos de tu base MySQL.
3. Ejecuta `database/schema.sql` en tu gestor (Workbench / DBeaver).
4. `npm run dev`

## Endpoints
| Método | Ruta | Acción |
|---|---|---|
| GET | /api/productos | Listar |
| GET | /api/productos/:id | Obtener uno |
| POST | /api/productos | Crear (nombre, precio, stock, usuario) |
| PUT | /api/productos/:id | Actualizar |
| DELETE | /api/productos/:id | Eliminar |
