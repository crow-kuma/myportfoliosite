import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
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

/**
 * Strips all HTML tags and escapes special characters to prevent XSS.
 */
function stripTagsAndEscape(text: string): string {
  if (!text) return "";
  // Strip HTML tags
  const stripped = text.replace(/<[^>]*>?/gm, "");
  // Escape HTML entities
  return stripped
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function MyLightGallery({
  imageInfo = [],
}: MyLightGalleryProps) {
  return (
    <LightGallery
      elementClassNames="glb-thumbnail-grid"
      plugins={PLUGINS}
      download={false}
    >
      {imageInfo.map((image) => {
        const escapedTitle = stripTagsAndEscape(image.title);
        const escapedDate = stripTagsAndEscape(image.date);
        const escapedDescription = stripTagsAndEscape(image.description);
        const subHtml = `<h4>${escapedTitle}</h4><p>${escapedDate}</p><p>${escapedDescription}</p>`;

        return (
          <a data-src={image.url} key={image.id} data-sub-html={subHtml}>
            <img src={image.url} alt={escapedTitle} />
          </a>
        );
      })}
    </LightGallery>
  );
}
