import Image from 'next/image';
import { useState } from 'react';
import { ImageHobby as StrapiImageHobby } from '../../types/strapi-about';
import * as Styled from './styles';

export interface ImageModalProps {
  imageHobby: StrapiImageHobby;
}

export default function ImageModal({ imageHobby }: ImageModalProps) {
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleModalImage = (url: string) => {
    setImage(url);
    setShowModal(!showModal);
  };

  return (
    <Styled.Container>
      {showModal && (
        <Styled.Modal data-testid="modal">
          <Image
            onClick={() => setShowModal(!showModal)}
            src={image}
            alt="ImageModal"
            width={500}
            height={500}
          />
        </Styled.Modal>
      )}
      {imageHobby.data.map((item) => (
        <Image
          onClick={() => handleModalImage(item.attributes.url)}
          key={item.attributes.formats.thumbnail.name}
          src={item.attributes.formats.thumbnail.url}
          alt={item.attributes.formats.thumbnail.name}
          width={item.attributes.formats.thumbnail.width}
          height={item.attributes.formats.thumbnail.height}
        />
      ))}
    </Styled.Container>
  );
}
