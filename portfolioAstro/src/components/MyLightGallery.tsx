import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import DOMPurify from "isomorphic-dompurify";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

interface ImageInfo {
  id: string;
  url: string;
  title: string;
  description: string;
  date: string;
}

interface MyLightGalleryProps {
  imageInfo?: ImageInfo[];
}

const PLUGINS = [lgThumbnail, lgZoom];

export default function MyLightGallery({
  imageInfo = [],
}: MyLightGalleryProps) {
  return (
    <LightGallery
      elementClassNames="thumbnail-grid"
      plugins={PLUGINS}
      download={false}
    >
      {imageInfo.map((image) => {
        const sanitizedTitle = DOMPurify.sanitize(image.title);
        const sanitizedDate = DOMPurify.sanitize(image.date);
        const sanitizedDescription = DOMPurify.sanitize(image.description);
        const subHtml = `<h4>${sanitizedTitle}</h4><p>${sanitizedDate}</p><p>${sanitizedDescription}</p>`;

        return (
          <a
            data-src={image.url}
            key={image.id}
            data-sub-html={subHtml}
          >
            <img src={image.url} alt={sanitizedTitle} />
          </a>
        );
      })}
    </LightGallery>
  );
}
