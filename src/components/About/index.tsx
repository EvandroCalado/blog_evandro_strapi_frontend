import Image from 'next/image';
import { About as AboutStrapi } from '../../types/strapi-about';
import AboutImageModal from '../AboutImageModal';
import Heading from '../Heading';
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
      <AboutImageModal imageHobby={imageHobby} />
    </Styled.Container>
  );
}
