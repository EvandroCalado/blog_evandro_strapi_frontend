import Prism from 'prismjs';
import { useEffect } from 'react';
import * as Styled from './HtmlContent.styles';
import { PrismWrapper } from './prism-theme';

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
