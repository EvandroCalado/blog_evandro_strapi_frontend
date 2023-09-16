import Post from '../../components/Post';
import {
  Post as StrapiPost,
  Setting as StrapiSetting,
} from '../../types/strapi';
import Base from '../Base';

export interface PostingProps {
  setting: StrapiSetting;
  post: StrapiPost;
}

export default function Posting({ setting, post }: PostingProps) {
  return (
    <Base setting={setting}>
      <Post post={post} />
    </Base>
  );
}
