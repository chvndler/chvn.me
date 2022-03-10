import CoverBox from '@components/cover'
import Command from '@components/command'
import { SignatureOne as ChvnIcon } from '@components/vector'
import { useTheme } from 'next-themes'

// Data
import { data as items } from '@data/current.json'

const Cover = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <CoverBox>
        <p>
          Press <code>Cmnd+K</code> to navigate.
        </p>
        <h2>CHANDLER CHAPPELL®</h2>

        <div className="menu_container">
          <div className="cmnd_k">
            <Command />
          </div>
        </div>
      </CoverBox>

      <div>
        <ChvnIcon />
      </div>
    </div>
  )
}

Cover.theme = 'system'
export default Cover
