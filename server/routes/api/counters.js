var counters = [ { id: 1, count: 3 },
      { id: 2, count: 5 } ];

module.exports = (app) => {
    app.get('/api/counters', (req, res, next) => {
        // stubbed data access
        // TODO create api connection to database

        res.json(counters);
    });

    app.post('/api/counters', (req, res, next) => {
        const count = { id: counters.length + 1, count: 0 };

        counters.push(count);
        res.json(count);
    })
};
