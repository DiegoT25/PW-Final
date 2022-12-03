import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import "./HistoriaExtra.css";
import { useEffect,useState } from 'react';


const Historia15 =() =>{

    const [listajuegos, setListaJuegos] = useState([])


    const httpFetch = async () => {

        const resp = await fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=call%20of%20duty&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3',{
            method : 'GET',
            headers : {
                "X-RapidAPI-Key": '5e06a71270msh5b39d2bdb2386d0p14703fjsn0bbaa8a0ddf5',
                "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com"
            },

          })
        const data = await resp.json()
        setListaJuegos(data)
        console.log(data)

    }
    useEffect(() => {        
         httpFetch()     }, [])

    return(


        <Container  classname='HistoriaExtra' centered>
            <h1 className='mt-4' style={{color:"white"}}>COMPRA UNA PC Y ESCOGE UN JUEGO A PRECIO DE PROMOCIÓN</h1>
            <Row>
                {
                    listajuegos.map((juego)=>{
                        return <div className="col-3 m-3">
                            
                        <img src={juego.thumb} alt="" className='extImg'/>
                        <h2 className='exTitulo'>{juego.title}</h2>
                        <h3 className='exPrecio'>${juego.salePrice}</h3>
                        <p className='exScore'>metacritic: {juego.metacriticScore}</p>    
                            
                            
                        </div>
                    })
                }
                
            </Row>
            
        </Container>
    )

}
        
export default Historia15;