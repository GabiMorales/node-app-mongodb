const indexCrtl = {};

indexCrtl.renderIndex = (req, res) => {
    res.render('index');
}

indexCrtl.renderAbout = (req, res) => {
    res.render('about');
}

module.exports = indexCrtl;