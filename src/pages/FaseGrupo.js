import React from 'react';
import './FaseGrupo.css';

function FaseGrupo() {
  return (
    <div className="App">
      <h1>Tabela da Fase de Grupos</h1>
      
      <div className="group-stage">
        <div className="group">
          <h2>Grupo A</h2>
          <table className="grupo1">
            <thead>
              <tr>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td1'>Time A1</td>
                <td className='td1'>3</td>
                <td className='td1'>2</td>
                <td className='td1'>1</td>
                <td className='td1'>0</td>
                <td className='td1'>7</td>
              </tr>
              <tr>
                <td>Time A2</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td className='td1'>Time A3</td>
                <td className='td1'>3</td>
                <td className='td1'>1</td>
                <td className='td1'>0</td>
                <td className='td1'>2</td>
                <td className='td1'>3</td>
              </tr>
              <tr>
                <td>Time A4</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="group">
          <h2>Grupo B</h2>
          <table className="grupo1">
            <thead>
              <tr>
                <th>Time</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td1'>Time B1</td>
                <td className='td1'>3</td>
                <td className='td1'>3</td>
                <td className='td1'>0</td>
                <td className='td1'>0</td>
                <td className='td1'>9</td>
              </tr>
              <tr>
                <td>Time B2</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td className='td1'>Time B3</td>
                <td className='td1'>3</td>
                <td className='td1'>1</td>
                <td className='td1'>0</td>
                <td className='td1'>2</td>
                <td className='td1'>3</td>
              </tr>
              <tr>
                <td>Time B4</td>
                <td>3</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Adicione mais grupos conforme necessário */}
      </div>
    </div>
  );
}

export default FaseGrupo;
