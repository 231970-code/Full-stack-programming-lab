const express = require('express');
const app = express();
const port = 3012;

// CSS Styles
const styles = `
<style>
    body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 100vh; margin: 0; display: flex; justify-content: center; align-items: center; }
    .container { background: white; padding: 60px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); text-align: center; }
    h1 { color: #f5576c; font-size: 48px; margin: 20px 0; }
    .greeting { font-size: 24px; color: #666; margin-bottom: 30px; }
    .links { margin-top: 30px; }
    .links a { display: inline-block; margin: 5px 10px; padding: 12px 25px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-decoration: none; border-radius: 30px; transition: all 0.3s ease; font-weight: bold; }
    .links a:hover { transform: scale(1.1); box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4); }
</style>
`;

// Dynamic user route
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<html><head><title>Hello ${name}</title>${styles}</head><body><div class="container"><p class="greeting">Welcome to the User Page</p><h1>Hello ${name} 👋</h1><div class="links"><a href="/user/Ali">Ali</a><a href="/user/Ahmad">Ahmad</a><a href="/user/Sara">Sara</a><a href="/user/Fatima">Fatima</a></div></div></body></html>`);
});

// Root redirect
app.get('/', (req, res) => {
    res.redirect('/user/Visitor');
});

app.listen(port, () => {
    console.log(`Task 3 Server running at http://localhost:${port}`);
});