import * as Styled from './HtmlContent.styles';

export interface HtmlContentProps {
  description: string;
}

export default function HtmlContent({ description }: HtmlContentProps) {
  return (
    <Styled.Content
      dangerouslySetInnerHTML={{ __html: description }}
    ></Styled.Content>
  );
}
