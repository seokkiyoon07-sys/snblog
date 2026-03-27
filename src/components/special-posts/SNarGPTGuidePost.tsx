'use client';

import SNarGPTInterface from '@/components/SNarGPTInterface';
import SNarGPTGraphOnly from '@/components/SNarGPTGraphOnly';
import ArticleContent from '@/components/ArticleContent';
import { PROSE_CLASSES } from '@/lib/constants';

interface SNarGPTGuidePostProps {
  renderedParts: {
    beforeInterface: string;
    afterInterface: string;
    afterGraph: string;
  };
}

export default function SNarGPTGuidePost({
  renderedParts,
}: SNarGPTGuidePostProps) {
  return (
    <>
      <ArticleContent
        content={renderedParts.beforeInterface}
        className={PROSE_CLASSES}
      />

      <div className="my-12">
        <SNarGPTInterface />
      </div>

      <ArticleContent
        content={renderedParts.afterInterface}
        className={PROSE_CLASSES}
      />

      <div className="my-12">
        <SNarGPTGraphOnly />
      </div>

      <ArticleContent
        content={renderedParts.afterGraph}
        className={PROSE_CLASSES}
      />
    </>
  );
}
