import { IconArrowUp } from '../../../icons/icon-arrowup';
import * as Styled from './GoToTop.styles';

export default function GoToTop() {
  return (
    <Styled.Button onClick={() => window.scrollTo(0, 0)}>
      {IconArrowUp}
    </Styled.Button>
  );
}
