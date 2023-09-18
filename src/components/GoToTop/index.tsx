import icons from '../../icons';
import * as Styled from './styles';

export default function GoToTop() {
  return (
    <Styled.Button onClick={() => window.scrollTo(0, 0)}>
      {icons.arrowUp}
    </Styled.Button>
  );
}
