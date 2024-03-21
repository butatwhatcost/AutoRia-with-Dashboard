import React, { useState } from "react";


function ImagePreview({ image_url }) {
    const [previewSrc, setPreviewSrc] = useState(image_url);

    const handleImageHover = (e) => {
        const href = e.target.getAttribute("href");
        setPreviewSrc(href);
    }

    return (
        <td className="td-image">
            <a href={ image_url } className="image-link" onMouseMove={handleImageHover}>Image</a>

            <img src={ previewSrc } alt="" className="preview-image" />
        </td>
    )
}

export default ImagePreview;
