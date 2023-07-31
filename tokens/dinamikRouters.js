import appCliente from '../routers/cliente.js';
import appAutomovil from '../routers/automovil.js';

export async function dynamicRouter(req, res, next) {
  const { tabla } = req.params;

  switch (tabla) {
    case 'cliente':
      return appCliente(req, res, next);
    case 'automovil':
      return appAutomovil(req, res, next);
    default:
      return res.status(404).send({ error: tabla+'Ruta no encontrada' });
  }
}