module.exports = class controllerNumbers{
    static async postNumbers(req, res){
        const {numero} = req.body;
        if(typeof numero == 'string') {
            res.status(400).json({message: "Número invalido"});
        }
        if(numero % 2 == 0 ){
            res.status(200).json({numero: "PAR"})
        }
        else{
            res.status(400).json({numero:"IMPAR"})
        }
        /*for(i=1; 2 > Number; i++){
            if(number % i === 0){
                res.status(400).json({numero: "NÃO É PRIMO"});
            }
            else{
                res.status(200).json({numero: "É PRIMO"});
            }    
        }*/
    }
}