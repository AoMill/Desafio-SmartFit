import Itens from '../obs/itens'
import styles from './Conteudo.module.css'
import { useReducer } from 'react'
import useFunc from '../funcoes'
import Cards from '../cards'


const initialState = {first: 0, last: 0, quant:0,filt: `${styles.filtCardCl}`, all:0 }
function reducer(state, action){
    switch(action.type){
        case 'manha':
            return{...state,first:6 , last:12,quant:61,all:0}
        case 'tarde':
            return{...state,first:12, last:18,quant:70,all:0}
        case 'noite':
            return{...state,first:18, last:22,quant:59,all:0}
        case 'tudo':
            return{...state, quant:167,all:167, first:0,last:0}
        case 'limpar':
            return{...state,quant:0,filt: `${styles.filtCardOp}` ? `${styles.filtCardCl}`:`${styles.filtCardCl}`,all:0}  
        case 'filtrar':
            return{...state,filt: `${styles.filtCardCl}` ? `${styles.filtCardOp}`:`${styles.filtCardCl}`}  
        default:
            return state
    }
}

export default function Conteudo() {    
    const [state, dispatch] = useReducer(reducer, initialState)
    const {onsub,filtrado}=useFunc()
    
    function filtrar(first, last){  
        onsub(first, last)
    }     
  return (
    <>
    <section className={styles.container}>
        <main className={styles.conteudo}>
        <header className={styles.cabecalho}>
            <h1>REABERTURA SMART FIT</h1>
            <span className={styles.borda}></span>
        </header>
            <div><span className={styles.span}>O horario de funcionamento das nossas unidades está seguindo os decretos de cada município. por isso, confira aqui se sua unidade está aberta e as medidas de segurança que estamos seguindo.</span></div>
            <div className={styles.opcoes}>
                <span>horario</span>
                <p>Qual período quer treinar?</p>
                <div className={styles.horario}>
                    <label><input type="radio" name='horario' className={styles.input1} onClick={() => dispatch({type: 'manha'})} disabled={state.quant !==0}   />  Manhã</label>
                    <p>06:00 às 12:00</p>    
                </div>
                <div className={styles.horario}>
                    <label><input type="radio" name='horario' className={styles.input1} onClick={() => dispatch({type: 'tarde'})} disabled={state.quant !==0}  />  Tarde</label>
                    <p>12:01 às 18:00</p>    
                </div>
                <div className={styles.horario}>
                    <label><input type="radio" name='horario' className={styles.input1} onClick={() => dispatch({type: 'noite'})} disabled={state.quant !==0} />  Noite</label>
                    <p>18:01 às 23:00</p>    
                </div>
                <div className={styles.exibir}>
                    <label><input type="checkbox" className={styles.input1} onClick={() => dispatch({type: 'tudo'})}/>  Exibir unidades fechadas</label>
                    <p>Resultado encontrados: <strong>{state.quant}</strong></p>    
                </div>
                <div className={styles.botoes} onClick={filtrar(state.first, state.last, state.all)}>
                    <button className={styles.find} onClick={()=>dispatch({type: 'filtrar'})} disabled={state.quant ===0} >
                        ENCONTRAR UNIDADES
                    </button>
                    <button className={styles.clear} onClick={() => dispatch({type: 'limpar'})} disabled={state.quant ===0} >LIMPAR</button>
                </div>
            </div> 
                <Itens />
        </main>
    </section>
    <section className={styles.card}>

                <div className={state.filt}>
               {
                filtrado.map((i, index) =>(
                    <Cards key={index} {...i}/>
                ))
               }
                </div>
    </section>
    </>
  )
}
