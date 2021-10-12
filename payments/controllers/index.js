module.exports = (app, repositories, logger) => {
    const loadPaymentsController = require('./PaymentsController')
    app.use("/api/payment-methods", loadPaymentsController(repositories, logger))

    const loadProbesController = require('./PaymentsController')
    app.use("/probes", loadProbesController())
}

