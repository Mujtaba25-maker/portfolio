import { useRef, useState } from "react";
import { Expand, X, ZoomIn, ZoomOut } from "lucide-react";
import { getProjectMedia } from "../data/projectMedia.js";

export default function ProjectImage({ project, detail = false }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const media = getProjectMedia(project);
  const [view, setView] = useState(media.original ? "original" : "showcase");
  const [zoom, setZoom] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const displayed = view === "showcase" ? media.showcase : media.original;
  const preview = detail && media.original ? media.original : media.preview;
  if (!preview) return null;

  const open = () => {
    setView(media.original ? "original" : "showcase");
    setZoom(false);
    setIsOpen(true);
    dialog.current.showModal();
  };
  const selectView = (next) => {
    setView(next);
    setZoom(false);
  };
  const cropped = view === "original" && media.crop;

  return (
    <figure className={"project-image" + (media.showcase && !detail ? " project-showcase-image" : "")}>
      <button ref={trigger} type="button" className="image-trigger" aria-label={"Expand image: " + project.title} onClick={open}>
        <MediaImage image={preview} crop={detail ? media.crop : null} />
        <span className="image-hint"><Expand size={15} aria-hidden="true" />{media.original ? "Inspect original" : "View showcase"}</span>
      </button>
      <dialog ref={dialog} className="image-dialog" aria-label={project.title + " image preview"} onClose={() => { setIsOpen(false); trigger.current?.focus(); }} onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }}>
        <div className="image-dialog-toolbar">
          <p>{project.title}</p>
          <button type="button" autoFocus onClick={() => dialog.current.close()} aria-label="Close image preview"><X size={22} /></button>
        </div>
        <div className="image-view-controls" role="group" aria-label="Image view options">
          {media.original && <button type="button" aria-pressed={view === "original"} onClick={() => selectView("original")}>{media.crop ? "Report canvas" : "Original image"}</button>}
          {media.showcase && <button type="button" aria-pressed={view === "showcase"} onClick={() => selectView("showcase")}>Showcase image</button>}
          {media.crop && <button type="button" aria-pressed={view === "source"} onClick={() => selectView("source")}>Full source screenshot</button>}
          <button type="button" aria-pressed={zoom} onClick={() => setZoom((value) => !value)}>{zoom ? <ZoomOut size={16} aria-hidden="true" /> : <ZoomIn size={16} aria-hidden="true" />}{zoom ? "Fit to screen" : "Original size"}</button>
        </div>
        <p className="image-view-note" aria-live="polite">
          {view === "showcase" && media.missingOriginal ? media.missingOriginal : view === "showcase" ? "Promotional showcase. Use the original image to inspect the actual report." : cropped ? "Original report canvas. Only the surrounding editor interface is hidden; the source image is unchanged." : "Original source image."}
          {" "}Use original size and scroll for detail. Press Escape to close.
        </p>
        <div className="image-dialog-scroll" tabIndex={0} role="region" aria-label="Scrollable project image">
          {isOpen && displayed && <MediaImage key={view} image={displayed} crop={cropped ? media.crop : null} zoom={zoom} />}
        </div>
      </dialog>
    </figure>
  );
}

function MediaImage({ image, crop, zoom = false }) {
  if (crop) {
    return (
      <span className="report-canvas" style={{ aspectRatio: `${crop.width} / ${crop.height}`, width: zoom ? crop.width : "100%", maxWidth: zoom ? "none" : crop.width }}>
        <img src={image.src} alt={crop.alt || image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" style={{ width: `${image.width / crop.width * 100}%`, left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%` }} />
      </span>
    );
  }
  return <img className="project-media-image" src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" style={{ width: zoom ? image.width : "100%", maxWidth: zoom ? "none" : image.width }} />;
}
