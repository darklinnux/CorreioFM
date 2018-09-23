import firebase from "../../config/FireBaseConexao";

class Programacoes {
    
    constructor(){
        this.state = {
            listaProgramacao:[]
        };
        this.diaSemana = ["domingo","segunda","terca","quarta","quinta","sexta","sabado"];
    }


    loadProgramacoes(callback){
        firebase.database().ref('programacao/'+this.getDiaAtual()).once('value',callback)
    }

    getDiaAtual(){
        let dt = new Date();
        
        return this.diaSemana[dt.getDay()];
    
    }

    getDiaDaSemana(dia){
        return this.diaSemana[dia];
    
    }

    setState(state){
        this.state = state;
    }
}

export default new  Programacoes();