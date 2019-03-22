const express = require('express');
const compression = require("compression");
const path = require('path');
const serveStatic = require('serve-static');
const app = express();
app.use(compression());
app.use(serveStatic(__dirname));
const port = process.env.PORT || 5000;
app.listen(port);