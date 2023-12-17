const vm = require('vm')
const { Assignment } = require('../models')

class AssignmentController {
    static async runCode(req,res,next) {
        const {code} = req.body

        const context = vm.createContext()

        context.consoleLogOutput = []

        context.console = {
            log: (...args) => {
              context.consoleLogOutput.push(...args);
            },
        };
        try {
            vm.runInContext(code, context)
            res.status(200).json(context.consoleLogOutput)
        } catch(e) {
            next(e)
            console.log(e)
        }
    }

    static async runTest(req, res, next) {

    }

    static async submit(req, res, next) {

    }

    static async getAll(req,res,next) {
        try {
            const data = await Assignment.findAll()
            if (!data) {
                throw {name: 'not found'}
            }
            res.status(200).json(data)
        } catch (e){
            next(e)
        }
    }

    static async getOne(req,res,next) {
        const {id} = req.params

        try {
            const data = await Assignment.findByPk(id)

            if (!data) {
                res.status(404).json({message: 'not found'})
            }
            res.status(200).json(data)
        } catch (e){
            next(e)
        }
    }


}

module.exports = AssignmentController