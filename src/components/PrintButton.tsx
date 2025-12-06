'use client';

interface PrintButtonProps {
  contentId: string;
  title: string;
  buttonText?: string;
}

export default function PrintButton({
  contentId,
  title,
  buttonText = 'PDF로 인쇄하기',
}: PrintButtonProps) {
  const handlePrint = () => {
    const content = document.getElementById(contentId);
    if (!content) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }

          * {
            box-sizing: border-box;
          }

          body {
            font-family: 'Noto Sans KR', 'Malgun Gothic', sans-serif;
            line-height: 1.8;
            color: #1a1a1a;
            padding: 0;
            margin: 0;
            font-size: 11pt;
          }

          .print-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 2px solid #10b981;
          }

          .print-header h1 {
            font-size: 18pt;
            color: #1a1a1a;
            margin: 0 0 10px 0;
          }

          .print-header .subtitle {
            font-size: 10pt;
            color: #666;
          }

          .content {
            white-space: pre-line;
          }

          .content p {
            margin: 0 0 12px 0;
          }

          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-header">
          <h1>${title}</h1>
          <div class="subtitle">SN Academy | snacademy.kr</div>
        </div>
        <div class="content">
          ${content.innerHTML}
        </div>
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
      aria-label={buttonText}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
      {buttonText}
    </button>
  );
}
