
class ProbesController{

    async handleLiveness(req,res) {
        //ToDo: Implement Liveness Probe
        res.send({"ok": true})
    }

    async handleReadiness(req,res) {
        res.send({"ok": true})
    }
}

    module.exports = (repositories) =>{

        var controller = new ProbesController()
        var express = require('express')
        var router = express.Router()

        router.get('/livenness', function(req,res) {
            controller.handleLiveness(req,res)
        })

        router.get('/readiness', function(req,res) {
            controller.handleReadiness(req,res)
        })
    
    return router
}
