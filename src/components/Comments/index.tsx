import { DiscussionEmbed } from 'disqus-react';
import * as Styled from './styles';

export interface CommentsProps {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
}

export default function Comments({
  id,
  slug,
  title,
  allowComments,
}: CommentsProps) {
  if (!allowComments) {
    return null;
  }

  return (
    <Styled.Container>
      <DiscussionEmbed
        shortname="evandrocalado-tech"
        config={{
          url: `https://www.evandrocalado.tech/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      ></DiscussionEmbed>
    </Styled.Container>
  );
}
