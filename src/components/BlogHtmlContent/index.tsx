import Prism from 'prismjs';
import { useEffect } from 'react';
import { PrismWrapper } from './prism-theme';
import * as Styled from './styles';

export interface BlogHtmlContentProps {
  html: string;
}

export default function BlogHtmlContent({ html }: BlogHtmlContentProps) {
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
