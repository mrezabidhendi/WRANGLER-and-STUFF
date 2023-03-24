import { Hono } from 'hono';

const app = new Hono();

const servers = new Hono();
servers.get('/status/*', (c) => {
	// return current status of the servers
	c.status(201);
	return c.json(c.req.param());
});
servers.post('/add-server/*', async (c)=>{
	// add server to database
	const {serverid, servername, serveraddress, server} = await c.req.json();
	return c.json({});
});
servers.post('/add-uuid/*', async (c)=>{
	// add uuid to database
	const {serverId, uuid} = await c.req.json();
	return c.json({});
});

const subs = new Hono();
subs.get('/:user/:usersecret/', async (c)=>{
	let servers_HTML = "";
	return c.html(`<html><head></head><body>${servers_HTML}</body></html>`);
});

app.route("/api/servers",servers);
app.route("/api/subs",subs);

export default app;