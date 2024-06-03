import { useLock } from "@/chamadaApi/api"

export default function useFunc() {
    const {dadosFilt,dadosAll}=useLock()
    const filtrado = []    
   
    function transformaDia(semana){
        switch(semana){
            case 0:
                return "Dom."
            case 6:
                return "Sáb."
            default:
                return "Seg. à Sex."
        }
    }
      
    function onsub(abertura, fechamento,fechadas){
        let diaDaSemana = transformaDia(new Date().getDay())
        if(abertura !== 0){
            dadosFilt.filter((e) =>{
                if(e.schedules !== undefined){
                    for(let i = 0; i < e.schedules.length;i++){
                        let horario = e.schedules[i].hour 
                        let dia_semana = e.schedules[i].weekdays
                        const vb = "12h às 19h" 
                        if(diaDaSemana === dia_semana){
                            if(horario !== "Fechada"){
                                let [horarioOp, horarioCl] = horario.split(' às ')
                                let horarioOp_int = parseInt(horarioOp.replace('h', '')) 
                                let horarioCl_int = parseInt(horarioCl.replace('h', '')) 
                                if(horarioOp_int <= abertura && horarioCl_int >= fechamento){
                                   return filtrado.push(e) 
                            
                                }        
                            }
                        }          
                    }
                }
            }) 
        }
        else if(fechadas !== 0){
            dadosAll.map((ev) => {
                filtrado.push(ev)
            })
        }
    }

    
  return {
    onsub,
    filtrado
  }
}
