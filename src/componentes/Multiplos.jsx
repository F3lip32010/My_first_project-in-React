import React from 'react'

const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export { BoaTarde, BoaNoite }
// eslint-disable-next-line import/no-anonymous-default-export
export default { BoaTarde, BoaNoite }