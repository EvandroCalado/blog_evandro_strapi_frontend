import Prism from 'prismjs';
import { useEffect } from 'react';
import { PrismWrapper } from './prism-theme';
import * as Styled from './styles';

export interface HtmlContentProps {
  html: string;
}

export default function HtmlContent({ html }: HtmlContentProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container
        dangerouslySetInnerHTML={{ __html: html }}
      ></Styled.Container>
    </PrismWrapper>
  );
}
