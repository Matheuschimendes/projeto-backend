const app = require('../src/app');

describe('app scaffold', () => {
  it('registers the health route', () => {
    const healthRoute = app.router.stack.find(
      (layer) => layer.route?.path === '/health',
    );

    expect(healthRoute).toBeDefined();
    expect(healthRoute.route.methods.get).toBe(true);
  });

  it('registers the base /v1 route', () => {
    const routerLayer = app.router.stack.find((layer) => layer.name === 'router');
    const baseRoute = routerLayer.handle.stack.find(
      (layer) => layer.route?.path === '/',
    );

    expect(baseRoute).toBeDefined();
    expect(baseRoute.route.methods.get).toBe(true);
  });
});
