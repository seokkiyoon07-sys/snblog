'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CheckCircle,
  Sparkles,
  BrainCircuit,
  LineChart,
  BookOpenText,
  Repeat2,
} from 'lucide-react';
import Callout from '@/components/Callout';

export default function SNarGOClient() {
  const [activeTab, setActiveTab] = useState('why');

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 lg:py-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <Badge className="text-sm px-3 py-1 rounded-2xl">SN Vertical AI</Badge>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          SNarGO — 수학문제 전용{' '}
          <span className="inline-flex items-center gap-2">
            Vertical AI <Sparkles className="size-6 md:size-7" />
          </span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          SN이 직접 개발한 수능 특화 AI. 내부 벤치마크 기준{' '}
          <strong>약 2,000문제 중 1문제 오답</strong> 수준의 정확도를 보이고
          있습니다. 모르는 문제가 나오면 <strong>해설 AI 'SNarVIS'</strong>가
          이해될 때까지 여러 각도에서 설명합니다.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="#why"
            className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
          >
            왜 스나고인가
          </a>
          <a
            href="#model"
            className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
          >
            모델 & 평가
          </a>
          <a
            href="#next"
            className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
          >
            다음 단계: SNarGEN
          </a>
        </div>
      </section>

      {/* Thumbnail */}
      <section className="mt-12">
        <div className="flex justify-center">
          <Image
            src="/images/startup/SNarGo/SNargo-thumbnail.PNG"
            alt="SNarGO 썸네일"
            width={1200}
            height={600}
            className="rounded-2xl shadow-2xl w-full max-w-4xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Why Vertical */}
      <section id="why" className="mt-16 space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold">왜 스나고인가</h2>
        <p className="text-muted-foreground leading-relaxed">
          수능은 단순한 문제풀이가 아닙니다.{' '}
          <strong>출제 원리, 난이도 조절, 문항 설계 규칙</strong>이 정교하게
          얽혀 있습니다. 스나고는 이 규칙을 정확히 이해하고 학습한{' '}
          <strong>수능 전용 AI</strong>로, 범용 LLM(ChatGPT, 제미나이, 그록
          등)보다 수능 맥락을 깊게 이해합니다.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 gap-2">
            <TabsTrigger value="why">Vertical AI란?</TabsTrigger>
            <TabsTrigger value="compare">쉽게 말하면</TabsTrigger>
            <TabsTrigger value="perf">핵심 성능</TabsTrigger>
          </TabsList>
          <TabsContent value="why" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="size-5" /> 버티컬 AI(Vertical AI)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground">
                <p>
                  특정 분야에 깊이 특화된 인공지능입니다. 광범위하게 두루 아는
                  대신, 한 분야에서 끝까지 정확함을 추구합니다.
                </p>
                <ul className="grid gap-2 md:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-4" /> 도메인 규칙과
                    문맥의 정밀 이해
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-4" /> 범용 AI 대비 높은
                    정답률
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-4" /> 전문 데이터로 맞춤
                    학습
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-4" /> 한 문제를 빠르고
                    정확하게
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="compare" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>쉽게 말하면</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <blockquote className="border-l-2 pl-4 italic">
                  "무엇이든 넓게 아는 친구(범용 AI)"보다 "수능만큼은 깊게 아는
                  친구(Vertical AI)"가 바로 스나고입니다.
                </blockquote>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="perf" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="size-5" /> 내부 벤치마크
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>
                  약 2,000문제 중 1문제 오답 수준(사내 벤치마크 기준). 실제 세트
                  구성에 따라 편차는 있을 수 있습니다.
                </p>
                <p>
                  모르는 문제가 나오면 <strong>SNarVIS</strong>가 이해 신호가
                  확인될 때까지 단계적으로 해설합니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* SNarGO 2025 수능 22번 풀이 예시 */}
      <section className="mt-16">
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            스나고 2025학년도 수능 22번 풀이화면
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <Image
                src="/images/startup/SNarGo/Snargo1.png"
                alt="스나고가 2025학년도 수능 22번 풀이 - Part 1"
                width={600}
                height={400}
                className="rounded-lg border border-gray-200 shadow-sm"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/startup/SNarGo/SNargo2.png"
                alt="스나고가 2025학년도 수능 22번 풀이 - Part 2"
                width={600}
                height={400}
                className="rounded-lg border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Model & Evaluation */}
      <section id="model" className="mt-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          어떻게 만들었나: 모델 & 평가
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>모델 파트</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                수능 유형에 맞춘 <strong>지식 압축·추론 강화 튜닝</strong>
              </p>
              <p>
                근거 제시, 조건 재확인, 계산 검증을 위한{' '}
                <strong>프롬프트/루브릭</strong> 설계
              </p>
              <p>
                해설 전용 어댑터 <strong>SNarVIS</strong>로 설명의 품질·길이·톤
                제어
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>평가·관측</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                연도·과목·유형별 <strong>정답 일치율</strong>과{' '}
                <strong>해설 근거 일치율</strong> 이중 평가
              </p>
              <p>
                업데이트 시 <strong>리그레이션 테스트</strong>로 과거 성능 유지
                검증
              </p>
              <p>현장 지표(정답 재현율, 재오답률, 이해도 체감) 지속 추적</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-muted-foreground">
          현재는 수학·물리에 우선 적용되어 있습니다. 국어·영어는 범용 LLM이 이미
          높은 성능을 보이며, 사탐·화학·생명·지구과학은 2026년 내 고도화를
          목표로 합니다.
        </p>
      </section>

      {/* Limits & Roadmap */}
      <section className="mt-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          한계와 정직한 전망
        </h2>
        <Card className="rounded-2xl">
          <CardContent className="pt-6 text-muted-foreground space-y-2">
            <p>
              <strong>2026~2027년</strong>에는 범용 LLM이 수능 영역에서도
              스나고에 근접할 수 있다고 봅니다. 그래서 우리는 정답률 경쟁을 넘어{' '}
              <strong>제품 경험</strong>과 <strong>학습 효율</strong>로
              승부합니다.
            </p>
            <p>
              현재 <strong>처리 속도</strong>와{' '}
              <strong>그래프/도형 생성</strong> 기능은 개발 중이며, 순차적으로
              업데이트될 예정입니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Next: SNarGEN */}
      <section id="next" className="mt-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          그 다음: SNarGEN(수능 문제 생성 AI)
        </h2>
        <p className="text-muted-foreground">
          정답 맞히기가 평준화되는 시대에는{' '}
          <strong>문제를 더 잘 만들고, 더 개인화하는 능력</strong>이 핵심입니다.
          SNarGO의 경험을 바탕으로 SNarGEN을 개발하고 있습니다.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>SNarGEN의 방향</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>평가원급 수능 문제 자동 생성</li>
                <li>출제 의도·난이도·오답률 제어가 가능한 조건부 생성</li>
                <li>학생별 취약 영역 타깃의 적응형 세트 자동 편성</li>
                <li>SNarVIS 연동 해설 동시 생성, 근거 도표 자동 첨부</li>
                <li>품질 자동 심사 + 휴먼 검수로 완성도 확보</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Repeat2 className="size-5" /> 학생 경험
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                "내가 틀릴 법한 문제"가 즉석에서 생성 → 풀이 → SNarVIS 해설 →
                즉시 재학습 루프
              </p>
              <p>
                학습 로그 기반 난이도 자동 조절로 지루함·과부하를 최소화합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mt-16">
        <Callout variant="info">
          <strong>
            정확하게 풀고, 끝까지 이해될 때까지 설명하며, 더 나은 문제로
            학생들을 성장시키는 것
          </strong>{' '}
          <br />— 그것이 SN의 AI가 교육을 바꾸는 방식입니다.
        </Callout>
      </section>

      {/* YouTube Video */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          SNarGO 개발자 영상
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/EDZfzgMSYkg"
              title="SNarGO 개발자 영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          자주 묻는 질문
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>스나고는 어떤 과목에 강한가요?</AccordionTrigger>
            <AccordionContent>
              수학·언어·논리 기반 문항에 강점을 보입니다. 현재 수학과 물리는
              매우 높은 정답률을 기록 중이며, 다른 과목도 지속적으로 확장하고
              있습니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>
              해설이 너무 길면 부담스럽지 않나요?
            </AccordionTrigger>
            <AccordionContent>
              SNarVIS는 톤·길이·예시 밀도를 자동 조절합니다. 학생의 이해 속도에
              맞춰 짧게 혹은 자세히 설명할 수 있습니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>
              스나고가 틀리는 문제는 어떤 건가요?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  사람에게 직관적으로 쉬운데 AI에게 논리적 함정이 있는 유형을
                  간혹 틀릴 수 있습니다. 그러나 이러한 사례는 다음 버전의 개선
                  데이터로 활용됩니다.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/startup/SNarGo/524-1.png"
                    alt="SNarGO가 틀리는 문제 유형 예시"
                    width={600}
                    height={400}
                    className="rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>SNargo는 언제 오픈하나요?</AccordionTrigger>
            <AccordionContent>
              현재 SN독학기숙학원 학원생들을 대상으로 클로즈베타 서비스 중이며,
              2026년 1월 1일 오픈 예정입니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
