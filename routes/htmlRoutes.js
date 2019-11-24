module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index");
    });
    app.get("/colposcopy", function(req, res) {
        res.render("colposcopy");
    });
    app.get("/c-section", function(req, res) {
        res.render("c-section");
    });
    app.get("/cervix", function(req, res) {
        res.render("cervix");
    });
    app.get("/curettage", function(req, res) {
        res.render("curettage");
    });
    app.get("/gynecological", function(req, res) {
        res.render("gynecological");
    });
    app.get("/gynecoloic", function(req, res) {
        res.render("gynecoloic");
    });
    app.get("/myomectomy", function(req, res) {
        res.render("myomectomy");
    });
    app.get("/hysterectomy", function(req, res) {
        res.render("hysterectomy");
    });
    app.get("/laproscopy", function(req, res) {
        res.render("laproscopy");
    });
};
  