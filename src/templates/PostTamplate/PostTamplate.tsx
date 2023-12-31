import Post from '../../components/Blog/Post/Post';
import {
  Post as StrapiPost,
  Setting as StrapiSetting,
} from '../../types/strapi';
import Base from '../BaseTemplate/BaseTemplate';

export interface PostTemplateProps {
  setting: StrapiSetting;
  post: StrapiPost;
}

export default function PostTemplate({ setting, post }: PostTemplateProps) {
  return (
    <Base setting={setting}>
      <Post post={post} />
    </Base>
  );
}
