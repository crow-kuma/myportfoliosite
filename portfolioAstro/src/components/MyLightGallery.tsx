import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
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
      {imageInfo.map((image) => (
        <a
          data-src={image.url}
          key={image.id}
          data-sub-html={`<h4>${image.title}</h4><p>${image.date}</p><p>${image.description}</p>`}
        >
          <img src={image.url} alt={image.title} />
        </a>
      ))}
    </LightGallery>
  );
}
