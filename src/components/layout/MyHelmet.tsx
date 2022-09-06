import {Helmet} from 'react-helmet';
import { bookInterface } from '../../constant/bookList';
import { constUrl } from '../../constant/constUrl';


interface Props {
  page: 'top' | 'book';
  book?: bookInterface;
}


export function MyHelmet(props: Props) {
  let title, description, image, type: string | undefined;

  if (props.page === 'book') {
    description = `AIによって生成された${props.book?.title}の挿絵`;
    title = props.book?.title;
    image = `${window.location.origin}/${constUrl.path}/assets/${props.book?.titleId}/${props.book?.illustrator}/${props.book?.headerPath}`;
    type = 'website';
  } else {
    description = `AIによって生成された挿絵`;
    title = 'AI挿絵';
    image = `${window.location.origin}/${constUrl.path}/assets/chumon/StableDiffusion/0000000007_0000000000.jpg`;
    type = 'website';
  }
  return (
    <>
      <Helmet
        title={'AI挿絵'}
        meta={[
          { property: 'description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:type', content: type },
          { property: 'og:url', content: `${window.location.origin}` },
          { property: 'og:image', content: image },
          { property: 'og:description', content: description },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image', content: image },
          { name: 'twitter:description', content: description },
          { name: 'twitter:title', content: title },
        ]}
      />
    </>
  )
}