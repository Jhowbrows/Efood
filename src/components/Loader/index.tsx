import { DotLoader } from 'react-spinners'
import { Cores } from '../../styles'
import { LoaderContainer } from './styles'

const Loader = () => {
  return (
    <LoaderContainer>
      <DotLoader
        color={Cores.RosaEscuro}
        loading
        speedMultiplier={0.8}
        size={250}
      />
    </LoaderContainer>
  )
}

export default Loader
