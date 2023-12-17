const vm = require('vm')

class CodeController {
    static async postCode(req,res,next) {
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


}

module.exports = CodeController