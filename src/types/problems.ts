export type ProblemVariant = 'original' | 'variant' | 'creative';

export interface Choice {
  label: string;
  text: string;
}

export interface ProblemSolution {
  answerDisplay: string;
  correctIndex: number;
  steps: { html: string }[];
}

export interface Problem {
  variant: ProblemVariant;
  questionHtml: string;
  viewbox?: { html: string }[];
  bogi?: { label: string; html: string }[];
  diagramHtml?: string;
  choices: Choice[];
  choiceColumns?: 3 | 5;
  solution: ProblemSolution;
}

export interface ProblemTriplet {
  number: number;
  source: string;
  topic: string;
  original: Problem;
  variant: Problem;
  creative: Problem;
}

export interface ProblemSetMeta {
  id: string;
  title: string;
  subject: string;
  subcategory: string;
  totalTriplets: number;
}

export interface ProblemSet {
  meta: ProblemSetMeta;
  triplets: ProblemTriplet[];
}
