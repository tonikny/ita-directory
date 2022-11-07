import React from 'react'
import Body from '../../components/layout/Body/Body'
import { Menu } from '../../components/molecules'

function Business() {
  return (
    <Body title="Para empresas" menu={<Menu />}>
      <p>Empresas</p>
    </Body>
  )
}

export default Business
