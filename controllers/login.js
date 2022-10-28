export default (req, res) => {
    const { email, password } = req.body;

    res.send(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Hello Express App!</title>
        </head>
        <body>
          <h1>Connexion</h1>
          
          <form method="post" action="/login">
            <input type="text" name="login" placeholder="login">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Login</button>
          </form>
        </body>
      </html>`
      );

    if(email && password === passwordConfirm) {
        req.session.auth = true;
        res.redirect("/dashboard");
        return;
    }
    res.redirect("/")
}