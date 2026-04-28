const express = require('express');
const app = express();
const port = 3011;

// CSS Styles
const styles = `
<style>
    body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); min-height: 100vh; margin: 0; display: flex; justify-content: center; align-items: center; }
    .container { background: white; padding: 50px; border-radius: 20px; box-shadow: 0 15px 50px rgba(0,0,0,0.2); text-align: center; max-width: 500px; }
    h1 { color: #11998e; font-size: 36px; margin-bottom: 20px; }
    p { color: #666; font-size: 16px; line-height: 1.6; }
    .nav { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; }
    .nav a { display: inline-block; margin: 5px 10px; padding: 10px 20px; background: #11998e; color: white; text-decoration: none; border-radius: 25px; transition: all 0.3s ease; }
    .nav a:hover { background: #38ef7d; transform: translateY(-3px); box-shadow: 0 5px 20px rgba(56, 239, 125, 0.4); }
</style>
`;

// Home route
app.get('/home', (req, res) => {
    res.send(`<html><head><title>Home</title>${styles}</head><body><div class="container"><h1>🏠 Welcome Home</h1><p>You have reached the home page!</p><div class="nav"><a href="/about">About</a><a href="/contact">Contact</a></div></div></body></html>`);
});

// About route
app.get('/about', (req, res) => {
    res.send(`<html><head><title>About</title>${styles}</head><body><div class="container"><h1>📄 About Page</h1><p>This is the about page of our application. Learn more about what we do!</p><div class="nav"><a href="/home">Home</a><a href="/contact">Contact</a></div></div></body></html>`);
});

// Contact route
app.get('/contact', (req, res) => {
    res.send(`<html><head><title>Contact</title>${styles}</head><body><div class="container"><h1>📞 Contact Page</h1><p>Get in touch with us! We'd love to hear from you.</p><div class="nav"><a href="/home">Home</a><a href="/about">About</a></div></div></body></html>`);
});

// Root redirect
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(port, () => {
    console.log(`Task 2 Server running at http://localhost:${port}`);
});