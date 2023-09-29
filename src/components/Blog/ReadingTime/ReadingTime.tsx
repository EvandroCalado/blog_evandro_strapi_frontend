import { readingTime } from 'reading-time-estimator';
import { IconClock } from '../../../icons/icon-clock';
import * as Styled from './ReadingTime.styles';

export interface ReadingTimeProps {
  content: string;
}

export default function ReadingTime({ content }: ReadingTimeProps) {
  const result = readingTime(content, 200, 'pt-br');

  return (
    <Styled.Container>
      <Styled.Span>{IconClock}</Styled.Span>
      <Styled.Span>{result.text}</Styled.Span>
    </Styled.Container>
  );
}
