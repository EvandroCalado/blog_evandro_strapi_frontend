import { readingTime } from 'reading-time-estimator';
import icons from '../../icons';
import * as Styled from './styles';

export interface ReadingTimeProps {
  content: string;
}

export default function ReadingTime({ content }: ReadingTimeProps) {
  const result = readingTime(content, 200, 'pt-br');

  return (
    <Styled.Container>
      <Styled.Span>{icons.clock}</Styled.Span>
      <Styled.Span>{result.text}</Styled.Span>
    </Styled.Container>
  );
}
