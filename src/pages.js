 module.exports = {
    index: function(request, response) {
        const city = request.query.city
        return response.render('index', { city })
    }
 }