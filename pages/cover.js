import CoverBox from '@components/cover';
import Command from '@components/command';
// import { SignatureOne as ChvnIcon } from '@components/vector';
import Video from '@components/video';

const Cover = () => {
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
    </div>
  );
};

Cover.theme = 'light';
export default Cover;
