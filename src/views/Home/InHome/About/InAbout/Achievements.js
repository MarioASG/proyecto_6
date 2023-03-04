import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className='achievements'>
        <h2>PROYECTOS</h2>
        <div className='achievement-block'>
            <img src="https://www.pngmart.com/files/21/Achievement-PNG.png" alt="achievement" />
            <div className='achievement-project'>
            <h3>LANDING PAGE</h3>
            <p>El proyecto consiste en vender música diseñada especialmente para el cliente 
                solicitante por la empresa independiente MS STUDIOS. Se venderán pistas con 
                estilos de música variados, mostrandose en la página 3 estilos: Sinfónico, 
                Rock (Metal) y Synthwave, con el fin de llamar la atención del cliente con 
                los productos en exposición.</p>    
            </div>
        </div>
        <div className='achievement-block'>
            <img src="https://www.pngmart.com/files/21/Achievement-PNG.png" alt="achievement" />
            <div className='achievement-project'>
            <h3>CRUD</h3>
            <p>El proyecto va dirigido para músicos que tengan la necesidad de ensayar, 
                practicar o tocar canciones en vivo y consiste en agregarlas dentro de una 
                lista con la finalidad de tenerlas como guía o recordatorio al estilo PlayList.</p>
            </div>
            
        </div>
        <div className='achievement-block'>
            <img src="https://www.pngmart.com/files/21/Achievement-PNG.png" alt="achievement" />
            <div className='achievement-project'>
            <h3>DASHBOARD</h3>
            <p>Dashboard realiza una consulta a la API Alpha Vantage para obtener precios de 
                activos como acciones, divisas, entre otras, y graficarlos con la API APEX Charts.</p>
            </div>
        </div>
        <div className='achievement-block'>
            <img src="https://www.pngmart.com/files/21/Achievement-PNG.png" alt="achievement" />
            <div className='achievement-project'>
            <h3>RESTAURANT</h3>
            <p>Proyecto enfocado a la compra de alimentos y bebestibles en un Bar, teniendo una 
                amplia variedad para elegir.
            </p>
            </div>
        </div>
        <div className='achievement-block'>
            <img src="https://www.pngmart.com/files/21/Achievement-PNG.png" alt="achievement" />
            <div className='achievement-project'>
            <h3>ECOMMERCE</h3>
            <p>Con este proyecto, se fomenta la compra de camisetas deportivas de los clubes 
                más importantes de Chile, con sistema de inicio de sesión, crud y métodos de pago.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Achievements

