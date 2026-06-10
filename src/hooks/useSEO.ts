/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

export interface UseSEOProps {
  title: string;
  description?: string;
}

export function useSEO({ title, description }: UseSEOProps) {
  useEffect(() => {
    // Set Document Title
    const formattedTitle = title.endsWith("Relayboard") ? title : `${title} | Relayboard`;
    document.title = formattedTitle;

    // Set Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);
}
