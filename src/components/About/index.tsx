import Image from 'next/image';
import { About as AboutStrapi } from '../../types/strapi-about';
import Heading from '../Heading';
import ImageModal from '../ImageModal';
import * as Styled from './styles';

export interface AboutProps {
  about: AboutStrapi;
}

export default function About({ about }: AboutProps) {
  const { title, description, image, hobby, imageHobby } = about.attributes;
  const { url, name, width, height } = image.data.attributes;

  return (
    <Styled.Container>
      <Heading>{title}</Heading>
      <Styled.Description>{description}</Styled.Description>
      <Styled.ImageContainer>
        <Image src={url} alt={name} width={width} height={height} />
      </Styled.ImageContainer>
      <Styled.Description>{hobby}</Styled.Description>
      <ImageModal imageHobby={imageHobby} />
    </Styled.Container>
  );
}
